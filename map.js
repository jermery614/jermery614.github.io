function myMap(weather){

    console.log(weather.coord.lon)
    console.log(weather.coord.lat)
var map = L.map('map').setView([weather.coord.lat, weather.coord.lon], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([weather.coord.lat, weather.coord.lon]).addTo(map)
    // .bindPopup("You're here.")
    // .openPopup();
}



