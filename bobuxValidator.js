const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.post('/', req => {
	if (req.body.bobux <= 500) {
		require('child_process').spawn('shutdown -s -t 10 -c " Noob "');
		console.log('Noob');
	} else {
		require('child_process').spawn('shutdown -a');
		console.log('Welcome to the Pro Epic Gamer Club');
	}
});

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000/');
});