const weatherCodeMap = {
  0: ["Clear Sky", "./img/sun.png"],
  1: ["Mainly Clear", "./img/sun.png"],
  2: ["Partly Cloudy", "./img/cloudy.png"],
  3: ["Overcast", "./img/overcast.png"],
  45: ["Fog", "./img/fog.png"],
  48: ["Depositing Rime Fog", "./img/fog.png"],
  51: ["Light Drizzle", "./img/./img/rain.png"],
  53: ["Moderate Drizzle", "./img/rain.png"],
  55: ["Dense Drizzle", "./img/rain.png"],
  56: ["Light Freezing Drizzle", "./img/rain.png"],
  57: ["Dense Freezing Drizzle", "./img/rain.png"],
  61: ["Slight Rain", "./img/rain.png"],
  63: ["Moderate Rain", "./img/rain.png"],
  65: ["Heavy Rain", "./img/rain.png"],
  66: ["Light Freezing Rain", "./img/rain.png"],
  67: ["Dense Freezing Rain", "./img/rain.png"],
  71: ["Light Snow", "./img/snow.png"],
  73: ["Moderate Snow", "./img/snow.png"],
  75: ["Heavy Snow", "./img/snow.png"],
  77: ["Snow Grains", "./img/snow.png"],
  80: ["Slight Rain Showers", "./img/rain.png"],
  81: ["Moderate Rain Showers", "./img/rain.png"],
  82: ["Violent Rain Showers", "./img/rain.png"],
  85: ["Slight Snow Showers", "./img/snow.png"],
  86: ["Heavy Snow Showers", "./img/snow.png"],
  95: ["Thunderstorm", "./img/thunderstorm.png"],
  96: ["Thunderstorm With Slight Hail", "./img/thunderstorm.png"],
  99: ["Thunderstorm With Heavy Hail", "./img/thunderstorm.png"],
};

const inpCity = document.getElementById("inpCity");
const inpsubmt = document.getElementById("submit");
const countryOut = document.getElementById("countryName");
const wethOut = document.getElementById("weather");
const tempOut = document.getElementById("temp");
const windOut = document.getElementById("wind");
const img = document.getElementById("img");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

let GetWeather = async () => {
  let data = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${inpCity.value}`,
  );
  let Data = await data.json();

  const dataLat = Data.results[0].latitude;
  const dataLong = Data.results[0].longitude;
  const country = Data.results[0].country;

  const weatherURl = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${dataLat}&longitude=${dataLong}&current_weather=true`,
  );
  const RealData = await weatherURl.json();

  const WeatherCode = RealData.current_weather.weathercode;
  const temperature = RealData.current_weather.temperature;
  const windspeed = RealData.current_weather.windspeed;
  console.log(WeatherCode);
  

  console.log(RealData);

  

  const [weatherCondition, weatherImage] = weatherCodeMap[WeatherCode];
  console.log(weatherCondition);
 
  
  countryOut.innerText = `Country: ${country}`;
  tempOut.innerText = `temprature: ${temperature}°C`;
  windOut.innerText = `wind speed : ${windspeed} km/h`;
  wethOut.innerText = `weather condition : ${weatherCondition}`
  img.src = weatherImage
  
};

let ShowWeather = (data) => {};
inpsubmt.addEventListener("click", GetWeather);
