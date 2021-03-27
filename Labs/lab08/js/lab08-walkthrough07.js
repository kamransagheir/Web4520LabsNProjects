
/* add code here */
var daysOfWeek = new Array("Mon","Tues","Wed","Thur",	"Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");
//document.write(daysOfWeek + "<br>");
document.write("<table border = 1>");
document.write("<tr>");
for(var i = 0; i < daysOfWeek.length; i++){
    if(daysOfWeek[i].length < 4){
        day = daysOfWeek[i];
    }
    else{
        day = "<em>" + daysOfWeek[i] + "</em>";
    }
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");
for(var j = 1; j < 31; j++){
    date = j;
    if(j % 7 == 0){
        
        document.write("<th>" + j + "</th>");
        document.write("</tr>");
        
    }
    else{
        
        document.write("<th>" + j + "</th>");
    }
    
}
document.write("</table>");

