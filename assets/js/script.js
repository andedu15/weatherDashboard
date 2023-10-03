// GLOBAL VARIABLES

var input = document.querySelector('.input_text');
var city = document.querySelector('#name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button= document.querySelector('.submit');
var date = document.querySelector('.date');



button.addEventListener('click', currentWeather); // SEARCH BUTTON

// CURRENT WEATHER
function currentWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {

    
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];
        var id = data['id'];
        var history = [];

        city.innerHTML = nameValue;
        temp.innerHTML = "Temp: "+toFahrenheit(tempValue)+" °F";
        wind.innerHTML = "Wind: "+windValue+" MPH";
        humidity.innerHTML = "Humidity: "+humidityValue+" %";
        date.innerHTML = dayjs().format('DD/MM/YYYY');
        


        var search = {
            city: nameValue,
            id: id,
        }

        localStorage.setItem("Search", JSON.stringify(search)); //Save in local storage
        history.push(search.city);

        // SHOW HISTORY
        var list = document.createElement('button');
        list.appendChild(document.createTextNode(history));
        document.querySelector('.history').appendChild(list);


  
  console.log(data);
  console.log(history);
  

})


.catch(err => alert("Wrong city name!"));
}

// CONVERT FROM KELVIN TO FAHRENHEIT
function toFahrenheit(tempValue){
    var fahrenheit = Math.trunc((tempValue-273)*(9/5)+32);
    return fahrenheit
}

console.log(history);

// FORECAST WEATHER

function forecastWeather(){

}











