const express = require('express');
const axios = require('axios');
const { response } = require('express');

const port = 6969;
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

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
				title: 'Teams',
				teams_data: response.data.data
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

// Create detail page
app.get('/teams/:team', async function (req, res) {
	let allPlayers = [];
	const playersArr = [];

	for (var i = 1; i < 2; i++) {

		await axios.get(`https://free-nba.p.rapidapi.com/players?page=${i}&per_page=100`, {
			headers: {
				"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
				"x-rapidapi-host": "free-nba.p.rapidapi.com"
			}
		})
			.then(function (response) {
				// handle success

				allPlayers.push(response.data.data)
			
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}

	allPlayers.forEach(allPlayers => {
		for (const player of allPlayers) {
			if (player.team.name === req.params.team) {
				playersArr.push(player)
			}
		}
	});

	res.render('team', {
		title: 'team',
		data: playersArr,
		param: req.params.team  
	})

});

// Create a page with more players
app.get('/teams/:team/more', async function (req, res) {
	let allPlayers = [];
	const playersArr = [];

	for (var i = 1; i < 36; i++) {

		await axios.get(`https://free-nba.p.rapidapi.com/players?page=${i}&per_page=100`, {
			headers: {
				"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
				"x-rapidapi-host": "free-nba.p.rapidapi.com"
			}
		})
			.then(function (response) {
				// handle success

				allPlayers.push(response.data.data)
			
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}

	allPlayers.forEach(allPlayers => {
		for (const player of allPlayers) {
			if (player.team.name === req.params.team) {
				playersArr.push(player)
			}
		}
	});
	
	res.render('more', {
		title: 'more',
		moreData: playersArr
	})
})

// Create a /offline  route
app.get('/offline', function (req, res) {
	// Send a plain string using res.send();
	res.render('offline', {
		pageTitle: `Offline`
	})
});

// Actually set up the server
app.listen(config.port, function () {
	console.log(`Application started on port: ${config.port}`);
});