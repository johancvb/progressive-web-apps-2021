const express = require('express');
const request = require('request');
const axios = require('axios');

const config = {
	port: 3000
}


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	// Send a plain string using res.send();
	res.redirect('/teams');
});

// Create a route for our overview page
app.get('/teams', function (req, res) {
	// request('https://free-nba.p.rapidapi.com/teams', {json: true}, function (err, requestRes, body){
	// 	if (err) {
	// 		// We got an error
	// 		res.send(err);
	// 	} else {
	// 		// Render the page using the 'posts' view and our body data

	// 	}
	// });

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
				postData: response.data.data[0].name
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});

	// Make a request for a user with a given ID
	// axios.get('https://free-nba.p.rapidapi.com/teams', {

	// })
	// 	.then(function (response) {
	// 		// handle success
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		// handle error
	// 		console.log(error);
	// 	})




});

// // Create a route for our detail page
// app.get('/post/:id', function(req, res) {
// 	request(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {json: true}, function (err, requestRes, body){
// 		if (err) {
// 			// We got an error
// 			res.send(err);
// 		} else {
// 			// Render the page using the 'post' view and our body data
// 			res.render('post', {
// 				title: `Post ${req.params.id}`, 
// 				postData: body
// 			});
// 		}
// 	});
// });

// // Make sure to catch /post to /posts
// app.get('/post', function(req, res) {
// 	// Redirect the client using res.redirect (this will create a new request)
// 	res.redirect('/posts');
// });

// Actually set up the server
app.listen(config.port, function () {
	console.log(`Application started on port: ${config.port}`);
});