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

window.location.href = ("https://zeroslab.github.io/cyberlite/?pg=" + (Object.values(hih).length).toString());
	
});}
	$.getJSON('descs.json', function(hih) { 
if (pg == undefined){
	firs();}
else if (pg <= 0){
	window.location.href = "https://zeroslab.github.io/cyberlite/?pg=1";
}
else if (pg > (Object.values(hih).length)){
	lat();
}
else{
	document.getElementById("comic").innerHTML = "<img src='img/" + pg + ".png'>";
		console.log("ok");
		document.getElementById("desc").innerHTML = (hih[pg]);
		console.log(hih.pg);
		console.log(hih[pg]);					
	};
};);

