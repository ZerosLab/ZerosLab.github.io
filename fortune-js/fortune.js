quotepath = "friends.json";

elementid = "fortune";


$.getJSON(quotepath, function(test) {
	num = test.length;
	console.log(num);
	rand = Math.floor(Math.random() * num);
	console.log(rand);
	fort = test[rand];
	console.log(fort);
	document.getElementById(elementid).innerHTML = fort;
});
