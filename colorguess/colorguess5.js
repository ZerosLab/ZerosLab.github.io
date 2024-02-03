square=document.getElementById("square").style
msg = document.getElementById("msg")
var multiply = 12.75;
var max = 20;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
function toHex(num) {
		x=(num >>> 0).toString(16);
    if (x.length == 1){
    	x = "0" + x
    }
    return x;
}
function randomColor(){
red = getRandomIntInclusive(0,max)*multiply;
green = getRandomIntInclusive(0,max)*multiply;
blue = getRandomIntInclusive(0,max)*multiply;
square.backgroundColor="rgb(" + red + ", " + green + ", " + blue +")"
console.log(square.backgroundColor);
msg.innerHTML = ""
}



function get3Distance(target,guess){
	targetX = parseInt(target.slice(1,3), 16);
  targetY = parseInt(target.slice(3,5), 16);
  targetZ = parseInt(target.slice(5), 16);
  guessX = parseInt(guess.slice(1,3), 16);
  guessY = parseInt(guess.slice(3,5), 16);
  guessZ = parseInt(guess.slice(5), 16);
  xDist=Math.abs(targetX-guessX);
  yDist=Math.abs(targetY-guessY);
  zDist=Math.abs(targetZ-guessZ);
  xyHyp=Math.sqrt((xDist**2)+(yDist**2));
  totalDist=Math.sqrt((xyHyp**2)+(zDist**2));
  return ([totalDist, xDist, yDist, zDist]);}

function testColor(form){
	var redguess = form.Red.value*multiply;
  if (redguess == 256){
  	redguess = 255;
  }
	var greenguess = form.Green.value*multiply;
  if (greenguess == 256){
  	greenguess = 255;
  }
	var blueguess = form.Blue.value*multiply;
  if (blueguess == 256){
  	blueguess = 255;
  }
  var guess="#"+String(toHex(redguess)).padStart(2, '0')+String(toHex(greenguess)).padStart(2, '0')+String(toHex(blueguess)).padStart(2, '0');
	console.log(guess);
	distance = get3Distance(rgb2hex(square.backgroundColor),guess.toString())
  console.log(distance);
  if (distance[0]>150){
	  msg.innerHTML = "sorry, ur way off"}
  else if (100<distance[0]){
	  msg.innerHTML = "getting warmer"}
  else if (50<distance[0]){
	  msg.innerHTML = "lukewarm"}
  else if (25<distance[0]){
	  msg.innerHTML = "yeah! you got this!"}
  else if (10<distance[0]){
	  msg.innerHTML = "ok ur getting damn close"}
  else if (5<distance[0]){
	  msg.innerHTML = "fuckkkk ur so close you got this"}
  else if (0<distance[0]){
	  msg.innerHTML = "you got it!"}
  else if (distance[0] == 0){
  	msg.innerHTML = "damn ur like. exactly there. like srsly. zero distance. good job. no notes."
  }
  msg.innerHTML+="(" + distance[1]+ " red, "+ distance[2] +  " green, "+ distance[3] + " blue)"
}
