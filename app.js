var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var humidity= document.querySelector('.humidity');
var wind= document.querySelector('.wind');
var country= document.querySelector('.country');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=16c38c72cf491091fb283c7bec04f5bd')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var HumidityValue = data['main']['humidity'];
  var windValue = data['wind']['speed'];
  var countryValue = data['sys']['country'];
  console.log(temp);
  main.innerHTML = nameValue;

  // desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = " "+tempValue+"&#176;C";
  country.innerHTML = " "+countryValue;
  // humidity.innerHTML = "<img src="humidity.png" alt=""> "+HumidityValue;
  // wind.innerHTML = "wind - "+windValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})