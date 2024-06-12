module.exports = {
	openapi: '3.0.0',
	info: {
		title: 'Haze backend API Doc',
		version: '1.0.0',
		description:
			'It is haze backend api documentation on swagger',
		license: {
			name: 'MIT',
			url: 'https://choosealicense.com/licenses/mit/'
		},

	},
	servers: [
		{
			url: `http://localhost:8080/api`,
			description: 'local server'
		},
		{
			url: "https://haze.staging.app/backend/",
			description: 'live server',
		}
	]
};
