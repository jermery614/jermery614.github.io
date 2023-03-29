const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f96213445mshc9fd0b9ea22e497p1807e8jsn4ef2e1d0ce8a',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};
const dataFactsEL = document.querySelector('.quotes')


fetch('https://famous-quotes4.p.rapidapi.com/random?category=happiness&count=1', options)
	.then(response => response.json())
	.then(response => {
		for (let data of response){
			console.log(data)
			dataFactsEL.innerHTML = "Quote of the day: " +` --- ${data.text}` + " " +" "+ "---- "+ `By: ${data.author}`;
			
		}
	})
	.catch(err => console.error(err));

	//

