const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f96213445mshc9fd0b9ea22e497p1807e8jsn4ef2e1d0ce8a',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
const dataFactsEL = document.querySelector('.quotes')


fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	// .then(response => console.log(response))
	.then(response => {
		dataFactsEL.innerHTML="Quote: "+`  ${response.content}`+" "+" "+ "- "+ `By: ${response.originator.name}`;
		
	})
	.catch(err => console.error(err));

	//

