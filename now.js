
var obj='{"nul":"nul"}';


$.getJSON('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=FD891EC85ADCE99E41198B70370E3BA7&steamid=76561198303443035&format=json', function(data) {
    // JSON result in `data` variable



document.getElementById("demo").innerHTML = (data.total_count);
console.log(data);

obj = JSON.parse(data);
});






//
//
//  const response = await fetch("http://example.com/movies.json"));
//  const jsonData = await response.json());
//  console.log(jsonData);
