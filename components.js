module.exports = {
	schemas: {
		User: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
				},
				email: {
					type: 'string'
				},
				password: {
					type: 'string',
					format: 'password'
				},
				confirmPassword:{
					type:'string'
				}
			},
			required: ['name','email', 'password','confirmPassword']
		},
		UserLogin:{
			type: 'object',
				properties: {
					
					email: {
						type: 'string'
					},
					password: {
						type: 'string',
						format: 'password'
					},
					
				},
				required:["email","password"],
		},
		userProfile:{
			type: 'object',
			properties: {
				userId:{
					type:'string',
				},
				name: {
					type: 'string',
				},
				city:{
					type:'string',
				},
				state:{
					type:'string',
				},
				country:{
					type:'string',
				},
				address:{
					type:'string',
				},
				phone:{
					type:'string',
				},
				profileImage:{
					type:'string',
				}
			},
			
		},
		superadminmanager:{
			type:'object',
			properties:{
				email:{
					type:'string',
				},
				name:{
					type:'string',
				},
				password:{
					type:'string',
				},
				confirmPassword:{
					type:'string',
				}
			},
			required:['name','email','password','confirmPassword']
		},
		storeownermanager:{
			type:'object',
			properties:{
				email:{
					type:'string',
				},
				name:{
					type:'string',
				},
				password:{
					type:'string',
				},
				confirmPassword:{
					type:'string',
				},
				shopifyapikey:{
					type:'string',
				},
				shopifyaccesstoken:{
					type:'string',
				},
				shopifystoredomain:{
					type:'string',
				}
			},
			required:['name','email','password','confirmPassword','shopifyapikey','shopifyaccesstoken','shopifystoredomain']
		},
		inviteuser:{
			type:'object',
			properties:{
				email:{type:'string'},
				userType:{type:'string'},
			}
		},
		customizer: {
			type: 'object',
			properties: {
			  newData: {
				type: 'string'
			  },
			}
		  },
		layerdata:{
			type:'object',
			properties:{
				layerData:{
					type:'string'
				},
			}
		},
		productdata:{
			type:'object',
			properties:{
				newProductData:{
					type:'string'
				},
			}
		},
		shopifystore:{
			type:'object',
			properties:{
				newProductData:{
					shopDomain:'string->Headers', //headers
					accessToken:'string->Headers' //header
				},
			}
		},

	},
	
	securitySchemes: {
		bearerAuth: {
			type: 'http',
			scheme: 'bearer',
			bearerFormat: 'JWT'
		}
	},
	
};
