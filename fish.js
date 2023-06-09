const searchPike = document.querySelector('#Pike');
const searchLarge = document.querySelector('#large');
const searchSmall = document.querySelector('#small');
const searchSteel = document.querySelector('#steelhead');
// const speciesData = localStorage.getItem("species");

searchLarge.addEventListener('click', getLarge);
searchPike.addEventListener('click', getPike);
searchSmall.addEventListener('click', getSmall);
searchSteel.addEventListener('click', getSteel);

searchLarge.addEventListener('mouseover', clearSpecies);
searchSmall.addEventListener('mouseover', clearSpecies);
searchPike.addEventListener('mouseover', clearSpecies);
searchSteel.addEventListener('mouseover', clearSpecies);




function getLarge() {
    // alert("You pushed Large Mouth")
    const speciesEL = document.querySelector('.species')
    fetch('./fish.json')
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[0].name}`+"<br><br>"+`<span>&#149;</span> <u>Location</u>: ${res.fish[0].location}`+"<br><br>"+`<span>&#149;</span> <u>Tips</u>: ${res.fish[0].tips}`+"<br><br>"+`<span>&#149;</span> <u>Tackle</u>: ${res.fish[0].tackle}`+"<br><br>"+`<span>&#149;</span> <u>Pre-Summer</u>: ${res.fish[0].presummer}`+"<br><br>"+`<span>&#149;</span> <u>Summer</u>: ${res.fish[0].summer}`+"<br><br>"+`<span>&#149;</span> <u>Fall</u>: ${res.fish[0].fall}`+"<br><br>"+`<span>&#149;</span> <u>Winter</u>: ${res.fish[0].winter}`+"<br><br>"+`<span>&#149;</span> <u>Spring</u>: ${res.fish[0].spring}`+"<br>"
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
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[2].name}`+"<br><br>"+`<span>&#149;</span> <u>Location</u>: ${res.fish[2].location}`+"<br><br>"+`<span>&#149;</span> <u>Tips</u>: ${res.fish[2].tips}`+"<br><br>"+`<span>&#149;</span> <u>Tackle</u>: ${res.fish[2].tackle}`+"<br><br>"+`<span>&#149;</span> <u>Pre-Summer</u>: ${res.fish[2].presummer}`+"<br><br>"+`<span>&#149;</span> <u>Summer</u>: ${res.fish[2].summer}`+"<br><br>"+`<span>&#149;</span> <u>Fall</u>: ${res.fish[2].fall}`+"<br><br>"+`<span>&#149;</span> <u>Winter</u>: ${res.fish[2].winter}`+"<br><br>"+`<span>&#149;</span> <u>Spring</u>: ${res.fish[2].spring}`+"<br>"
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
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[1].name}`+"<br><br>"+`<span>&#149;</span> <u>Location</u>: ${res.fish[1].location}`+"<br><br>"+`<span>&#149;</span> <u>Tips</u>: ${res.fish[1].tips}`+"<br><br>"+`<span>&#149;</span> <u>Tackle</u>: ${res.fish[1].tackle}`+"<br><br>"+`<span>&#149;</span> <u>Pre-Summer</u>: ${res.fish[1].presummer}`+"<br><br>"+`<span>&#149;</span> <u>Summer</u>: ${res.fish[1].summer}`+"<br><br>"+`<span>&#149;</span> <u>Fall</u>: ${res.fish[1].fall}`+"<br><br>"+`<span>&#149;</span> <u>Winter</u>: ${res.fish[1].winter}`+"<br><br>"+`<span>&#149;</span> <u>Spring</u>: ${res.fish[1].spring}`+"<br>"
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
        speciesEL.innerHTML =`<span>&#149;</span> <u>Name</u>: ${res.fish[3].name}`+"<br><br>"+`<span>&#149;</span> <u>Location</u>: ${res.fish[3].location}`+"<br><br>"+`<span>&#149;</span> <u>Tips</u>: ${res.fish[3].tips}`+"<br><br>"+`<span>&#149;</span> <u>Tackle</u>: ${res.fish[3].tackle}`+"<br><br>"+`<span>&#149;</span> <u>Pre-Summer</u>: ${res.fish[3].presummer}`+"<br><br>"+`<span>&#149;</span> <u>Summer</u>: ${res.fish[3].summer}`+"<br><br>"+`<span>&#149;</span> <u>Fall</u>: ${res.fish[3].fall}`+"<br><br>"+`<span>&#149;</span> <u>Winter</u>: ${res.fish[3].winter}`+"<br><br>"+`<span>&#149;</span> <u>Spring</u>: ${res.fish[3].spring}`+"<br>"
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
