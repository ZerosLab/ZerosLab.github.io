const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pg = urlParams.get('pg');
console.log(pg);





if (pg == undefined){
console.log(pg)
		}
else{
		 document.getElementById("comic").innerHTML = "<img src='img/" + pg + ".png'>";
$.getJSON('descs.json', function(hih) {  
	console.log(hih);
document.getElementById("desc").innerHTML = (hih.pg);
	console.log(hih.pg);
});
					
	};



