const apiKey = "7293d304ca9b9bbd35c74b6d6cf48bec";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon")
async function CheckWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name+" ";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "clouds.png"
    }else if (data.weather[0].main == "Clear") { 
        weatherIcon.src = "clear.png" 
        
    }else if (data.weather[0].main == "Mist") { 
        weatherIcon.src = "mist.png"
    }else if (data.weather[0].main == "Rain") { 
        weatherIcon.src = "rain.png" 
    }else if (data.weather[0].main == "Snow") { 
        weatherIcon.src = "snow.png" 

    }else if (data.weather[0].main == "Drizzle") { 
        weatherIcon.src = "drizzle.png"
    }
    else if (data.weather[0].main == "Haze") { 
        weatherIcon.src = "haze.png"
     }
     document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
} 
const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
searchBtn.addEventListener("click", ()=>{
    CheckWeather(searchBox.value);

})
