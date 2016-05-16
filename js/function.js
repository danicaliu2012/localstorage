localStorage.setItem('information', JSON.stringify({
	name: 'Dan Liu',
	email: 'dandan8908@hotmail.com',
	CurrentCity: 'San Francisco',
	Zipcode: '94112'

}));

var information = JSON.parse(localStorage.getItem('information'));
		