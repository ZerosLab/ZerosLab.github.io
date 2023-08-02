


//var obj='{"nul":"nul"}';

//dict = [];


//$.getJSON('https://raw.githubusercontent.com/ZerosLab/transitionary/main/steam.json', function(data) {
    // JSON result in `data` variable

//response = (data.response);


//array = response.games;


//text = "";

//for (let x in array){
//text += data.response.games[x].name + "<br>";



//dict[x]=data.response.games[x].appid;




//}







//});





 
$.getJSON('https://raw.githubusercontent.com/ZerosLab/transitionary/main/books.json', function(test) {
    // JSON result in `data` variable
    start={0:{'unlocktime': 0},1:{'unlocktime': 0},2:{'unlocktime': 0}};
    //console.log("okay");
    
    
    //console.log(test);
    
     achieves={};
 
     innertext="<ul><li'>";
    for (let x in test){
      innertext += ("<u><b>☆"+x + "☆</b></u><br><ul>");
      
      for (let y in test[x]){
		  if (test[x][y].shelf == "true"){
        innertext += "<li><u>";
        innertext += test[x][y].title;
        innertext += "</u><ul>";
		if (test[x][y].author != undefined){
		innertext += "<li>" + "Author: " + test[x][y].author + "</li>";
		}
		if (test[x][y].artist != undefined && test[x][y].artist != ""){
		innertext += "<li>" + "Artist: " + test[x][y].artist + "</li>";
		}
		if (test[x][y].translator != undefined){
		innertext += "<li>" + "Translator: " + test[x][y].translator + "</li>";
		}
		if (test[x][y].editor != undefined){
		innertext += "<li>" + "Editor: " + test[x][y].editor + "</li>";
		}
		if (test[x][y].label != undefined){
		innertext += "<li>" + "Label: " + test[x][y].label + "</li>";
		}
		if (test[x][y].year != undefined && test[x][y].year != ""){
		innertext += "<li>" + "Year: " + test[x][y].year + "</li>";
		}
		innertext += "</ul>";
        
		  }
        }
           innertext += "<br><br></ul>";
for (let y in test[x]){
		  if (test[x][y].shelf == "false"){
        innertext += "<li><b><u>";
        innertext += test[x][y].title;
        innertext += "</u><ul>";
		if (test[x][y].author != undefined){
		innertext += "<li>" + "Author: " + test[x][y].author + "</li>";
		}
		if (test[x][y].artist != undefined && test[x][y].artist != ""){
		innertext += "<li>" + "Artist: " + test[x][y].artist + "</li>";
		}
		if (test[x][y].translator != undefined){
		innertext += "<li>" + "Translator: " + test[x][y].translator + "</li>";
		}
		if (test[x][y].editor != undefined){
		innertext += "<li>" + "Editor: " + test[x][y].editor + "</li>";
		}
		if (test[x][y].label != undefined){
		innertext += "<li>" + "Label: " + test[x][y].label + "</li>";
		}
		if (test[x][y].year != undefined && test[x][y].year != ""){
		innertext += "<li>" + "Year: " + test[x][y].year + "</li>";
		}
		innertext += "<a href='https://www.bookfinder.com/search/?st=sr&ac=qr&mode=basic&author=" + test[x][y].author + "&title=" + test[x][y].title + "&isbn=&lang=en&destination=us&currency=USD&binding=*&keywords=&publisher=&min_year=&max_year=&minprice=&maxprice=&classic=off'> link </a>";
		innertext += "</ul></b>";
        
		  }
        }
 //     for (let y in test[x]){
//		  if (test[x][y].year == ""){
  //      innertext += "<li><b><i><u>❋";
    //    innertext += test[x][y].title;
      //  innertext += "❋</u><ul>";
	//	if (test[x][y].author != undefined){
//		innertext += "<li>" + "Author: " + test[x][y].author + "</li>";
	//	}
		//if (test[x][y].artist != undefined && test[x][y].artist != ""){
//		innertext += "<li>" + "Artist: " + test[x][y].artist + "</li>";
	//	}
		//if (test[x][y].translator != undefined){
//		innertext += "<li>" + "Translator: " + test[x][y].translator + "</li>";
	//	}
		//if (test[x][y].editor != undefined){
//		innertext += "<li>" + "Editor: " + test[x][y].editor + "</li>";
	//	}
		//if (test[x][y].label != undefined){
//		innertext += "<li>" + "Label: " + test[x][y].label + "</li>";
	//	}
		//if (test[x][y].year != undefined && test[x][y].year != ""){
//		innertext += "<li>" + "Year: " + test[x][y].year + "</li>";
	//	}
		//innertext += "</ul></b.</b>";
//        
	//	  }
      //  }
        }
    
		 
    
    
   
    
document.getElementById("testing").innerHTML = (innertext);


});




//
//
//  const response = await fetch("http://example.com/movies.json"));
//  const jsonData = await response.json());
//  console.log(jsonData);
