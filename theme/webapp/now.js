console.log("run");


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
    console.log("okay");
    i=1;
    
    console.log(test);
    innertext="";
     achieves={};
 
    for (let x in test){
      innertext += ("<u><b>☆"+x + "☆</b></u><br>");
      
     innertext+="<div style='display:flex'>";
      for (let y in test[x]){
		  if (test[x][y].shelf == "true"){
        innertext += "<div style='text-align:center;border:1px solid black;width:250px'>";
        innertext += test[x][y].title;
		if (test[x][y].author != undefined){
		innertext += "Author: " + test[x][y].author;
		}
		if (test[x][y].cover != undefined){
		innertext += "<br>cover: <img width=100px src='" + test[x][y].cover + "'>";
		}
		if (test[x][y].artist != undefined && test[x][y].artist != ""){
		innertext += "<br>Artist: " + test[x][y].artist;
		}
		if (test[x][y].translator != undefined){
		innertext += "<br>Translator: " + test[x][y].translator;
		}
		if (test[x][y].editor != undefined){
		innertext += "<br>Editor: " + test[x][y].editor;
		}
		if (test[x][y].label != undefined){
		innertext += "<br>Label: " + test[x][y].label;
		}
		if (test[x][y].year != undefined && test[x][y].year != ""){
		innertext += "<br>Year: " + test[x][y].year;
		}
		innertext += "</div>";
        
		if (i%5==0){
innertext +="</div><div style='display:flex'>";
		}
		i += 1;
		  }
        }
           innertext += "</div>";
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
    
		 
    
    
   
    console.log(innertext);
document.getElementById("testing").innerHTML = (innertext);


});




//
//
//  const response = await fetch("http://example.com/movies.json"));
//  const jsonData = await response.json());
//  console.log(jsonData);
