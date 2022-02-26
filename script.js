var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name_ = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiId = '&appid=50a7aa80fa492fa92e874d23ad061374';


button.addEventListener('click', function(){
    fetch(url+inputValue.value+apiId)
  .then(response => response.json())
  .then(data => {
    var cityName = data['name'];
    var temperature = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name_.innerHTML = cityName;
    temp.innerHTML = Math.round(temperature/10) +" 'C";
    desc.innerHTML = descValue;
})
  .catch(error => alert("No such city found!"))
})