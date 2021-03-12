const express = require('express');
const axios = require('axios');

const config = {
	port: 3000
}


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.redirect('/teams');
});

// Create overview page
app.get('/teams', function (req, res) {

	axios.get('https://free-nba.p.rapidapi.com/teams', {
		headers: {
			"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
			"x-rapidapi-host": "free-nba.p.rapidapi.com"
		}
	})
		.then(function (response) {
			// handle success
			
			res.render('teams', {
				title: 'Teams', // We use this for the page title, see views/partials/head.ejs
				teams_data: response.data.data
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

// Create detail page
app.get('/teams/team', function (req, res) {

	// axios.get('https://free-nba.p.rapidapi.com/teams', {
	// 	headers: {
	// 		"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
	// 		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	// 	}
	// })
	// 	.then(function (response) {
	// 		// handle success
			
	// 		res.render('teams', {
	// 			title: 'Teams', // We use this for the page title, see views/partials/head.ejs
	// 			teams_data: response.data.data
	// 		});
	// 	})
	// 	.catch(function (error) {
	// 		// handle error
	// 		console.log(error);
	// 	});
});

// Actually set up the server
app.listen(config.port, function () {
	console.log(`Application started on port: ${config.port}`);
});