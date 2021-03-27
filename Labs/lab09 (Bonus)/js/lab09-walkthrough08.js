/* code goes here */
function	init()	{					document.getElementById("sampleForm").addEventListener("submit",																																																					checkForEmptyFields);					}	/*	initialize	handlers	once	page	is	ready	*/	window.addEventListener("load",	init);
//ensure that the fields are not empty
function     checkForEmptyFields(e){
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    //loop through the input elements looking for the empty values 
    var fieldList = [];
    for(var  i = 0; i < fields.length; i++){
        if(fields[i].value == null || fields[i].values == ""){
            //if the field is empty; prevent it from submission
            e.preventDefault();
            fieldList.push(fields[i]);

        }
    }
    var message = "The following field can't be empty: ";
    if(fieldList.length>0){
        for(var i = 0; i < fieldList.length; i++){
            msg += fieldList[i].id + ",";
        }
        alert(message);
    }

}