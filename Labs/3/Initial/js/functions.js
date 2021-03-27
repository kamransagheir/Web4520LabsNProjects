function renderCities() {
    var iCount = 0;
    for (iCount = 0; iCount < countries.length; iCount++) {
    outputCountryBox(countries[iCount].name, countries[iCount].continent, countries[iCount].cities, countries[iCount].photos);
    }
    }
    function outputCountryBox(name, continent, cities, photos) {
        document.write('<div class="item">');
        document.write('<h2>' + name + '</h2>');
        document.write('<p>' + continent +'</p>');
        if(cities.length != 0){ 
            function outputCities(){
                document.write("<div class='inner-box'>");
                document.write("<h3>Cities</h3><ul>");
                for(var i = 0; i < cities.length; i++){
                    document.write("<li>" + cities[i] + "</li>");
                }
                document.write("</ul> </div>");        

            }
        }
            function outputPhotos(){
                document.write('<div class="inner-box">');
                document.write('<h3>Popular Photos</h3>');
                for(var i = 0; i < photos.length; i++){
                    document.write( "<img src='" + photos[iCount] + "' class='photo' /> ");
                }
                document.write('</div>');               

            }
            
        
    }
    // function outputCountryBox(name, continent, cities, photos) {
    // var sContent = '<div class="item">';
    // sContent += "<h2>" + name + "</h2>";
    // sContent += "<p>" + continent + "</p>";
    // if (cities.length !== 0) {
    // sContent += outputCities(cities);
    // }
    // if (photos.length !== 0) {
    // sContent += outputPhotos(photos);
    // }
    // sContent += "<button>Visit</button></div>";
    // //var sSectionContent = document.querySelector(".flex-container").innerHTML;
    // document.querySelector(".flex-container").innerHTML = document.querySelector(".flex-container").innerHTML + sContent;
    // }
    
    // function outputCities(cities) {
    // var iCount, sContent = "";
    // sContent += "<div class='inner-box'><h3>Cities</h3><ul>";
    // for (iCount = 0; iCount < cities.length; iCount++) {
    // sContent += "<li>" + cities[iCount] + "</li>";
    // }
    // sContent += "</ul></div>";
    // return sContent;
    // }
    // function outputPhotos(photos) {
    // var iCount, sContent = "";
    // sContent += "<div class='inner-box'><h3>Popular Photos</h3>";
    // for (iCount = 0; iCount < photos.length; iCount++) {
    // sContent += "<img src='" + photos[iCount] + "' class='photo' /> ";
    // }
    // sContent += "</div>";
    // return sContent;
    // }