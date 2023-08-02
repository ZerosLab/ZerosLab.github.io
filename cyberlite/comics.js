const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pg = urlParams.get('pg');
console.log(pg);


function next(){
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pg = urlParams.get('pg');
window.location.href = ("https://zeroslab.github.io/cyberlite/?pg=" + (parseInt(pg) + 1));
	
}
function prev(){
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pg = urlParams.get('pg');
window.location.href = ("https://zeroslab.github.io/cyberlite/?pg=" + (parseInt(pg) - 1));

	
}
function firs(){
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pg = urlParams.get('pg');
window.location.href = "https://zeroslab.github.io/cyberlite/?pg=1";


	
}
function lat(){$.getJSON('descs.json', function(hih) { 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pg = urlParams.get('pg');

window.location.href = ("https://zeroslab.github.io/cyberlite/?pg=" + str(Object.values(hih).length - 1));
	
});}



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


