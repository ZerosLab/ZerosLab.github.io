quotepath = "friends";
elementid = "fortune";
element = document.getElementById(elementid).innerHTML

$.getJSON(quotepath, function(test) {
    if(TypeOf test === 'array'){
        element = test[Math.floor(Math.random() * test.length)];}
    else{
        test2 = '["' + test.replace ('"', "'").replace("\n%\n", '"],["') + '"]';
        element = test2[Math.floor(Math.random() * test2.length)];}});
