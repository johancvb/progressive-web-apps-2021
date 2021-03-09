const express = require('express');
const request = require('request');

const config = {
	port: 3000
}


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// Send a plain string using res.send();
	res.redirect('/teams');
});

// Create a route for our overview page
app.get('/teams', function(req, res) {
	request('https://free-nba.p.rapidapi.com/teams', {json: true}, function (err, requestRes, body){
		if (err) {
			// We got an error
			res.send(err);
		} else {
			// Render the page using the 'posts' view and our body data
			res.render('teams', {
				title: 'Teams', // We use this for the page title, see views/partials/head.ejs
				postData: body
			});
		}
	});
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
app.listen(config.port, function() {
	console.log(`Application started on port: ${config.port}`);
});