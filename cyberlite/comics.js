const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pg = urlParams.get('pg');
console.log(pg);





if (pg == undefined){
	$.getJSON('descs.json', function(hih) { 
		window.location.replace("https://zeroslab.github.io/cyberlite/?pg=" + Object.values(hih)[Object.values(hih).length - 1]); 
});
		}
else{
		 document.getElementById("comic").innerHTML = "<img src='img/" + pg + ".png'>";
$.getJSON('descs.json', function(hih) {  
	console.log("ok");
document.getElementById("desc").innerHTML = (hih[pg]);
	console.log(hih.pg);
	console.log(hih[pg]);
});
					
	};


function next(){

window.location.href = ("https://zeroslab.github.io/cyberlite/?pg=" + (pg + 1));
	
}
function prev(){

window.location.href = "https://zeroslab.github.io/cyberlite/?pg=" + (pg - 1));

	
}
function firs(){

window.location.href = "https://zeroslab.github.io/cyberlite/?pg=1";


	
}
function lat(){


window.location.href = ("https://zeroslab.github.io/cyberlite/?pg=" + Object.values(hih)[Object.values(hih).length - 1]);
	
}
