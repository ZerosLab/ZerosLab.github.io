dexJSONURL=""

newtable="<table><tr>"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('game');
const type = urlParams.get('type');
const level = urlParams.get('level');
i = 0;
$.getJSON(dexJSONURL, function(dex)){


  for element in game.json{
    i+=1;
    newtable += "<td";
    if element.name in dexJSON:
      newtable +=' style="background-color:yellow"> ';
    else:
      newtable +=">";
      newtable += "</td>"
    if i%6=0:
      newtable+="</tr><tr>"
    if i%30 = 0:
      newtable += "<tr><tr><td colspan=6> " + i.toString + "-" + (i+30).tostring + "</tr><tr>"
  }






document.getElementById("p1").innerHTML = newtable;
