inlets = 2;
outlets = 3;

var thelist = [0, 0];

function msg_int(v)
{
	if(inlet==1) thelist[1] = v;
	else if(inlet==0)
	{
		thelist[0] = v;
		outlet(0, thelist);
	}
}

function bang()
{
		outlet(0, thelist);	
}