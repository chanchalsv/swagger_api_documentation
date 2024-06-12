module.exports = {
	
	register: {
		post: {
			tags: ["User-Register"],
			summary: "Register account",
			produces: ["application/json"],
			consumes: ["application/json"],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/User'
						}
					}
				}
			},
			responses: {
				'201': {
					description: 'User created successfully'
				},
				'409': {
					description: "Email already exist"
				},
				'500': {
					description: 'Internal server error'
				}
			}
		}
	},
	login:{
		post:{
			tags:["User-Login"],
			summary:"User login with email and password",
			produces:["application/json"],
			consumes:["application/json"],
			requestBody:{
				required:true,
				content:{
					'application/json':{
						schema:{
							$ref:'#/components/schemas/UserLogin'
						}
					}
					
				},
				responses:{
					'200':{description:"User log in successfully, with API token provided"},
					'401':{description:"Auth failed with an incorrect credentials"},
					'404':{description:"This user account not found"},
					'500':{description:"Internal server error"},
				}
			}
		}
	}
}