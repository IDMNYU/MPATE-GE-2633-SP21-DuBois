// hi there

var d = new Dict("fred");

function dictionary(v)
{
	d.clone(v);
	var e = JSON.parse(d.stringify()); // this is stupid
	for(var i in e)
	{
		var pitch = Math.floor((e[i].position[0]+1.)*64.);
		var vel = Math.floor(e[i].impulse*200.);
		if(vel>127) vel = 127;
		outlet(0, pitch, vel);
	}
}