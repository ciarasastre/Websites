
//Examples of cookies with background examples

var bg_colour;
function egcookie()
{
	bg_colour = document.getElementById("select").value;
	createCookie("bg", bg_colour); //First name cookie THEN initialize what variable it came from.
}


//HOW TO LOAD

//in html
<body onload="setup()">

//in js file
function setup()
{
	bg_colour = egCookie("bg");
	document.getElementById("main").style.color = "bg_colour";
}



// NOW XMLDocuments

