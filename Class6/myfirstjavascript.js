// ECMAscript
/* this is also a comment */
inlets = 2;
outlets = 3;

function bang()
{
	// outlet command
	// takes an outlet number and then 
	// a message:
	outlet(0, Math.random());
}

function timestwo(v)
{
	outlet(0, v*2);
}

function multiply(a, b)
{
	outlet(0, a*b);
}

var sum = 0; // global variable

function accumulate(x)
{
	sum+=x;
	outlet(0, sum);
}