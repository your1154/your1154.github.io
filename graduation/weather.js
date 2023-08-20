const API_KEY = "42887f84f6d84b7e1a83c54eb6b592a0";

function onGeoOk(potion) {
    const lat = potion.coords.latitude;
    const lon = potion.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
                const weather= document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                const temp = (data.main.temp-273.15)
                const temp2 = temp.toFixed(2);
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${temp2}`
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);