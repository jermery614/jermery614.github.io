const api = {
    key: "0aacc5e2496379b32f0b648d2c189d0b",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  const cityName = localStorage.getItem("City")
  // localStorage.clear();
  if (cityName){
    // localStorage.clear();
    searchbox.value = cityName
    // localStorage.clear();
  }
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13)  
    {
      const cityName = localStorage.getItem("City")
      // console.log(cityName)
      if (cityName){
        localStorage.clear();
        searchbox.value = cityName
        getResults(cityName)
      } else {
        getResults(searchbox.value);
      localStorage.setItem("City", searchbox.value);
      }
    } 
  }

  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
      
  }

  function displayResults (weather) {
    console.log(weather);
    setWeatherPic(weather);
    getYourFishOn(weather);
    
    let city = document.querySelector('.location .city');
    // city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let sunrise = document.querySelector('.location .sunrise');
    sunrise.innerHTML = "Sunrise: " + new Date(weather.sys.sunrise *1000).toLocaleTimeString([], {timeStyle: 'short'}) + " / "+ "Sunset: " + new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {timeStyle: 'short'});

    let wind = document.querySelector('.windSpeed');
    wind.innerHTML = `Wind Speed: ${Math.round(weather.wind.speed)} MPH`

    let lonLat = document.querySelector(' .lonLat')
    lonLat.innerHTML = `Longitude: ${weather.coord.lon} / Latitude: ${weather.coord.lat}`

  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = ` Conditions: ${weather.weather[0].main}`;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `Low: ${Math.round(weather.main.temp_min)}°F / High: ${Math.round(weather.main.temp_max)}°F`;

    let pressure = document.querySelector('.current .pressure');
    pressure.innerHTML = `Atmospheric Pressure: ${Math.round(weather.main.pressure *0.0295301)} hPa`
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

  function getYourFishOn(weather){
    let fishOn = document.querySelector('.getYourFishOn .toFishOrNot')
    console.log(weather.main.pressure * 0.0295301)
    let fishData = weather.main.pressure * 0.0295301;
  
    if (fishData >= 30.50){
      console.log("1")///
      fishOn.innerHTML = "<p>Based on the current barometric pressure.Fish are usually slower, moderately active, feed halfheartedly, and will most likely stay near the bottom.</p>"
    }
    if (fishData >= 29.70 && fishData <= 30.40){
        console.log("2")
        fishOn.innerHTML = "<p>Based on the current barometric pressure.Perfect, normal fishing conditions. Use different baits and gear to meet the needs of the fish.</p>"
    }
    if (fishData <= 29.60){
      console.log("3")
          fishOn.innerHTML = "<p>Based on the current barometric pressure.Fish are usually less active, nervous, spook easily, and bite slowly. Go at the fish slowly in deeper water or near cover.</p>"
      }

  }
  function setWeatherPic(weather) {
    let imgHere = document.querySelector(' .current .currentImg')
    if (weather.weather[0].main == "Rain") {
    //   console.log("1")
      imgHere.innerHTML = "<img src=\"./images/rain.png\">";
    } else if (weather.weather[0].main == "Snow") {
        // console.log("2")
        imgHere.innerHTML = "<img src=\"./images/snow.png\">";
    } else if (weather.weather[0].main == "Clear") {
        // console.log("3")
        imgHere.innerHTML = "<img src=\"./images/clear.png\">";
    } else if (weather.weather[0].main == "Clouds") {
        // console.log("4")
        imgHere.innerHTML = "<img src=\"./images/cloudy.png\">";
    }
  }

 
 
