const inputBox=document.querySelector(".input-box");
const searchBtn=document.querySelector(".search-button");
let weatherImg=document.querySelector(".weather-image");
let temperature=document.querySelector(".temperature");
let weatherDesc=document.querySelector(".weather-desc");
let humidPerc=document.querySelector(".humidity-perc");
let windSpeed=document.querySelector(".wind-speed");
let location_not_found=document.querySelector(".location-not-found");
let weatherBody=document.querySelector(".weather-body");


async function checkWeather(city){
    const api_key="b6dc3c6d70d2f483b70ff7c575ef3b93";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response=>response.json()); 

    if(weather_data.cod==="404"){
        location_not_found.style.display="block";
        weatherBody.style.display="none";
        console.log("error");

    }
    console.log("run");
    console.log(weather_data);
    temperature.innerHTML=Math.round(weather_data.main.temp-273.15)+"°C";
    weatherDesc.innerHTML=weather_data.weather[0].description;
    humidPerc.innerHTML=weather_data.main.humidity + "%";
    windSpeed.innerHTML=weather_data.wind.speed + "km/H";


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg.src= "/assets/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "/assets/clear.png";
            break;
        case 'Rain':
            weatherImg.src ="/assets/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "/assets/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "/assets/snow.png";
            break;

    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})


