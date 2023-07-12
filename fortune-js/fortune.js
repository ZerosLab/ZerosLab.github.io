quotepath = "friends.json";
elementid = "fortune";
$.getJSON(quotepath, function(test) {
	document.getElementById(elementid).innerHTML = test[Math.floor(Math.random() * test.length)];
});
