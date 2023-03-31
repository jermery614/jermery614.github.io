const searchPike = document.querySelector('#Pike');
const searchLarge = document.querySelector('#large');
const searchSmall = document.querySelector('#small');
const searchSteel = document.querySelector('#steelhead');
// const speciesData = localStorage.getItem("species");

searchLarge.addEventListener('click', getLarge);
searchPike.addEventListener('click', getPike);
searchSmall.addEventListener('click', getSmall);
searchSteel.addEventListener('click', getSteel);

searchLarge.addEventListener('mouseout', clearSpecies);
searchSmall.addEventListener('mouseout', clearSpecies);
searchPike.addEventListener('mouseout', clearSpecies);
searchSteel.addEventListener('mouseout', clearSpecies);




function getLarge() {
    // alert("You pushed Large Mouth")
    const speciesEL = document.querySelector('.species')
    fetch('./fish.json')
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[0].name}`+"<br>"+`-> <u>Location</u>: ${res.fish[0].location}`+"<br>"+`-> <u>Tips</u>: ${res.fish[0].tips}`+"<br>"+`-> <u>Tackle</u>: ${res.fish[0].tackle}`+"<br>"+`-> <u>Pre-Summer</u>: ${res.fish[0].presummer}`+"<br>"+`-> <u>Summer</u>: ${res.fish[0].summer}`+"<br>"+`-> <u>Fall</u>: ${res.fish[0].fall}`+"<br>"+`-> <u>Winter</u>: ${res.fish[0].winter}`+"<br>"+`-> <u>Spring</u>: ${res.fish[0].spring}`
    })
    .catch(err => console.error(err));

}

function getPike(){
    // alert("You pushed Pike")
    const speciesEL = document.querySelector('.species')
    fetch('./fish.json')
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[2].name}`+"<br>"+`-> <u>Location</u>: ${res.fish[2].location}`+"<br>"+`-> <u>Tips</u>: ${res.fish[2].tips}`+"<br>"+`-> <u>Tackle</u>: ${res.fish[2].tackle}`+"<br>"+`-> <u>Pre-Summer</u>: ${res.fish[2].presummer}`+"<br>"+`-> <u>Summer</u>: ${res.fish[2].summer}`+"<br>"+`-> <u>Fall</u>: ${res.fish[2].fall}`+"<br>"+`-> <u>Winter</u>: ${res.fish[2].winter}`+"<br>"+`-> <u>Spring</u>: ${res.fish[2].spring}`
    })
    .catch(err => console.error(err));



}

function getSmall(){
    // alert("You pushed Small Mouth")
    const speciesEL = document.querySelector('.species')
    fetch('./fish.json')
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[1].name}`+"<br>"+`-> <u>Location</u>: ${res.fish[1].location}`+"<br>"+`-> <u>Tips</u>: ${res.fish[1].tips}`+"<br>"+`-> <u>Tackle</u>: ${res.fish[1].tackle}`+"<br>"+`-> <u>Pre-Summer</u>: ${res.fish[1].presummer}`+"<br>"+`-> <u>Summer</u>: ${res.fish[1].summer}`+"<br>"+`-> <u>Fall</u>: ${res.fish[1].fall}`+"<br>"+`-> <u>Winter</u>: ${res.fish[1].winter}`+"<br>"+`-> <u>Spring</u>: ${res.fish[1].spring}`
    })
    .catch(err => console.error(err));

}
function getSteel(){
    // alert("You pushed Small Mouth")
    const speciesEL = document.querySelector('.species')
    fetch('./fish.json')
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[3].name}`+"<br>"+`-> <u>Location</u>: ${res.fish[3].location}`+"<br>"+`-> <u>Tips</u>: ${res.fish[3].tips}`+"<br>"+`-> <u>Tackle</u>: ${res.fish[3].tackle}`+"<br>"+`-> <u>Pre-Summer</u>: ${res.fish[3].presummer}`+"<br>"+`-> <u>Summer</u>: ${res.fish[3].summer}`+"<br>"+`-> <u>Fall</u>: ${res.fish[3].fall}`+"<br>"+`-> <u>Winter</u>: ${res.fish[3].winter}`+"<br>"+`-> <u>Spring</u>: ${res.fish[3].spring}`
    })
    .catch(err => console.error(err));

}

function clearSpecies(){
    const speciesEL = document.querySelector('.species');
    speciesEL.innerHTML = " "
}

function getSpecies() {

    fetch('./fish.json')
    .then(res => res.json())
    .then(res => console.log(res))
}


const display = document.querySelector('.species');
