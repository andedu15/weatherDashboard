var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var button= document.querySelector('.submit');
var date = document.querySelector('.date');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {

    
        var nameValue = data['city']['name'];
        var tempValue = data['list']['0']['main']['temp'];
        var windValue = data['list']['0']['wind']['speed'];
        var humidityValue = data['list']['0']['main']['humidity']; 
        var dateValue = data['list']['0']['dt_txt']; 

        main.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        wind.innerHTML = windValue;
        humidity.innerHTML = humidityValue;
        date.innerHTML = dateValue;



  
  console.log(data);

})

.catch(err => alert("Wrong city name!"));
})







