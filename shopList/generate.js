const fetch = require('node-fetch');
fs = require('fs')

let intermarche = "https://intermarche.pl/wp-content/themes/intermarche/json/markers.json"
let makro = "https://www.makro.pl/services/StoreLocator/StoreLocator.ashx?id={91546E5B-E850-482B-9772-85D8EC00BC7C}&lat=52.44&lng=19.4&language=pl-PL&distance=150000000&limit=100"

let settings = {
	method: "Get"
};

fetch(intermarche, settings)
	.then(res => res.json())
	.then((json) => {
		let jsonResults = json.map(event => {
			return `{"street": "${event.street}","city":"${event.city}","zip":"${event.zip}" , "lat": ${event.lat}, "lng": ${event.lng}}`
		})

		fs.writeFile('intermarche.json', `[${jsonResults}]`, function (err) {
			if (err) return console.log(err);
			console.log('Done');
		})
	});

fetch(makro, settings)
	.then(res => res.json())
	.then((json) => {
		let jsonResults = json.stores.map(event => {
			return `{"street": "${event.street}","city":"${event.city}","zip":"${event.zip}" , "lat": ${event.lat}, "lng": ${event.lon}}`
		})

		fs.writeFile('makro.json', `[${jsonResults}]`, function (err) {
			if (err) return console.log(err);
			console.log('Done');
		})
	});