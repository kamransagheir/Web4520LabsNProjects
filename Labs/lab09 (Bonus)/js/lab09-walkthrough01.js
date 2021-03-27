/* code goes here */
var	msg	=	document.getElementById("msgArea");
    msg.value	=	"here	is	some	text";
    document.getElementById("pageTitle").innerHTML	=	"Even	newer	title";
    msg.value	=	document.getElementById("first").innerText;
    elem	=	document.getElementsByTagName("span");	for	(i=0;	i<elem.length;	i++)	{					document.getElementById("msgArea").value	+=	"\n"	+	elem[i].innerText;	}