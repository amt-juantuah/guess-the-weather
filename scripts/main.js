const btn = document.getElementById('btn');
const cityName = document.getElementById('city-name');
const day = document.getElementById('date');
const degrees = document.getElementById('deg');
const feel = document.getElementById('feel');
const tempIcon = document.getElementById('temp-icon');
const weda = document.getElementById('weda');
const humid = document.getElementById('humid');
const windSpeed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');
const precipitation = document.getElementById('rain-prob');
let date = new Date();
day.innerText = date.toDateString();

btn.onclick = function searchWeather() {
                const city = document.getElementById('city').value;
                const key = 'fe6a1f70ef05261c6de8bc629468338f';
                let date = new Date();
                let dated = date.toDateString();
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        tempIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
                        degrees.innerHTML = Math.floor(data.main.temp) + '<sup>o</sup>';
                        cityName.innerText = data.name + ", " + data.sys.country;
                        feel.innerHTML = 'Real feel: ' + Math.floor(data.main.feels_like) + '<sup>o</sup>';
                        weda.innerText = data.weather[0].description;
                        humid.innerText = data.main.humidity;
                        windSpeed.innerText = data.wind.speed + ' mph';
                        pressure.innerText = data.main.pressure + ' pa';
                        precipitation.innerText = Object.values(data.rain) + ' mm';
                    });
                document.getElementById('city').value = '';            
                }