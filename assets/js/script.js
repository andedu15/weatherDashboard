var input = document.querySelector('.input_text');
var city = document.querySelector('#name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button= document.querySelector('.submit');
var date = document.querySelector('.date');




button.addEventListener('click', currentWeather)


function currentWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {

    
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];

        city.innerHTML = nameValue;
        temp.innerHTML = "Temp: "+tempValue+" °";
        wind.innerHTML = "Wind: "+windValue+" MPH";
        humidity.innerHTML = "Humidity: "+humidityValue+" %";
        date.innerHTML = dayjs().format('DD/MM/YYYY');


  
  console.log(data);

})

.catch(err => alert("Wrong city name!"));
}

function forecastWeather(){

}







