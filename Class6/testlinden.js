outlets = 2;

var thestring = ' ';
var axiom = 'A';
var therules;

//therules = [['A', 'AB'], ['B', 'A']];
//therules = [['A', 'AB'], ['B', 'AC'], ['C', 'ABA']];
therules = [['A', 'DA'], ['B', 'AC'], ['C', 'ABA'], ['D', 'BCA']];

reset();


function bang()
{
	var outstring = '';
	for(var i = 0;i<thestring.length;i++)
	{
		var match = -1;
		var c = thestring.charAt(i); // current character
		for(var j = 0;j<therules.length;j++)
		{

			if(c==therules[j][0]) match = j;
		}
		if(match>-1) // the rule exists
		{
			outstring+=therules[match][1];
		}
		else // the rule does not exist
		{
			outstring+=c;
		}
	}
	outlet(1, outstring);
	thestring = outstring;
}

function reset()
{
	thestring = axiom; // start over
}

function position(v)
{
	outlet(0, thestring.charAt(v));
}