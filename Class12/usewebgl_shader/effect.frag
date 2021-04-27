precision mediump float;

#define hypot(x, y) sqrt(x*x+y*y)
#define xor(x, y)	((!(x&&y))&&(x||y))
#define sinh(x)		(0.5*(exp(x) - exp(-x)))
#define cosh(x)		(0.5*(exp(x) + exp(-x)))
#define tanh(x)		((sinh(x))/(cosh(x)))
#define asinh(x)	(log(x) + sqrt(x*x+1.))
#define acosh(x)	(log(x) + sqrt(x*x-1.))
#define atanh(x)	(0.5*log((1.+x)/(1.-x)))
#define trunc(x)	(vec4(x.r > 0. ? floor(x.r) : ceil(x.r), x.g > 0. ? floor(x.g) : ceil(x.g), x.b > 0. ? floor(x.b) : ceil(x.b), x.a > 0. ? floor(x.a) : ceil(x.a)))

vec2 jit_wrap1(vec2 v) {
	return mod(v, 1.);
}

vec2 jit_clamp1(vec2 v) {
	return clamp(v, 0., 1.);
}

vec2 jit_mirror1(vec2 v) {
	return 1.-abs((mod(v, 2.)-1.));
}

uniform float strength;
uniform sampler2D tin1;
uniform sampler2D tin2;


varying vec2 v_texcoord;


vec2 fold_vec2_float(vec2 x, float lo, float hi);
vec2 fold_vec2_float(vec2 x, float lo, float hi) {
	float range = (hi-lo);
	vec2 v = (x-lo)/range;
	return range*(1.-abs(mod(v, 2.)-1.))+lo;
}



void main() {
	vec4 in1 = texture2D(tin1, v_texcoord);
	vec4 in2 = texture2D(tin2, v_texcoord);
	vec2 norm = v_texcoord;



	float swiz_130 = (in1.g);
	float mul_121 = (swiz_130 * strength);
	vec2 mul_129 = (norm * 4.0);
	vec2 fold_128 = (fold_vec2_float(mul_129, 0.0, 1.0));
	vec2 add_120 = (fold_128 + mul_121);
	vec4 sample_118 = (texture2D(tin1, jit_wrap1(add_120)));
	gl_FragColor = sample_118;
}
