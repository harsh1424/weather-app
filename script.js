const cityInput = document.getElementById("cityInput")
const searchButton = document.getElementById("searchButton")

// const tempImg = document.getElementById("tempImg")
const temp = document.getElementById("temp")
// const weatherDescriptions = document.getElementById("weather_descriptions")
const city = document.getElementById("city")
const humidity = document.getElementById("humidity")
const windDegrees = document.getElementById("wind_degrees")
const cloudPct = document.getElementById("cloud_pct")
const feelsLike = document.getElementById("feelslike")
const windSpeed= document.getElementById("windSpeed")


function kelvinToCelsius(temp){
    return 273.15 - temp
}

// function padTo2Digits(num) {
//     return num.toString().padStart(2, '0');
//   }

// function convertMsToTime(milliseconds) {
//     let seconds = Math.floor(milliseconds / 1000);
//     let minutes = Math.floor(seconds / 60);
//     let hours = Math.floor(minutes / 60);
  
//     seconds = seconds % 60;
//     minutes = minutes % 60;
  
   
//     hours = hours % 24;
  
//     return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
//       seconds,
//     )}`;
//   }

let locationn = 'Delhi'


async function getDataFromApi(locationn){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '50a17101e2msh66d809ec4c81cdfp15dd49jsn89f752e4889f',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${locationn}`, options)
        const data =await response.json()
        console.log(data)
        humidity.innerText = data.humidity
        temp.innerText = data.temp
        feelsLike.innerText = data.feels_like
        windSpeed.innerText = data.wind_speed 
        cloudPct.innerText = data.cloud_pct
        windDegrees.innerText = data.wind_degrees
        city.innerText = locationn
}
getDataFromApi("delhi")


searchButton.addEventListener("click", ()=>{
    let cityvalue = cityInput.value;
    console.log(cityvalue)
    
    getDataFromApi(cityvalue)
})

