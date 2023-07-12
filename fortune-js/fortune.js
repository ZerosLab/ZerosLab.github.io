quotepath = "friends.json";

elementid = "fortune";


$.getJSON(quotepath, function(test) {
	num = test.length;
	rand = Math.floor(Math.random() * num);
	fort = test[rand];
	document.getElementById(elementid).innerHTML = fort;
});
