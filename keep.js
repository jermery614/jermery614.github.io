const dynamicContent = document.querySelector("#dynamicContent")
async function weather() {
    
    let userInput = document.getElementById("gitZip").value
	const weatherData = await fetchWeatherData(userInput)
	// console.log(weatherData)
	renderWeatherCards(weatherData);

};
async function fetchWeatherData(userInput){
	const options = {
	    method: 'GET',
	    headers: {
		'X-RapidAPI-Key': '7f96213445mshc9fd0b9ea22e497p1807e8jsn4ef2e1d0ce8a',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
	}
	const  data = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${userInput}&format=json&u=f`, options)

const res = await data.json()
return res

}
 function renderWeatherCards(weatherData) {
	// const dynamicContent = document.querySelector("#dynamicContent")
	// console.log(weatherData)
	const location =  weatherData.location
	// console.log(location)
	// const locationHTML =`<div><h1>${location.city}</h1><h1>${location.country}</h1></div>`
	const locationHTML =   renderlocation( location)
	dynamicContent.innerHTML = locationHTML

}

 function renderlocation(weatherLocation){
	const tempLocation =  weatherLocation
	console.log(tempLocation)
	return `<div><h1>${tempLocation.city}</h1><h1>${tempLocation.country}</h1></div>`

}
