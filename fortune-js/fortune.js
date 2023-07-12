quotepath = "https://github.com/ZerosLab/transitionary/raw/main/friends.json";

elementid = "fortune";






$.getJSON(quotepath, function(test) {
	num = 0;
	for (let x in test){
		num += 1;

	};
	rand = Math.floor(Math.random() * num);
	fort = test.rand;
	document.getElementById(elementid).innerHTML = fort;
});