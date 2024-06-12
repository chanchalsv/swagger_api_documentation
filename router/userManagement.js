module.exports = {
	
	addprofiledetails: {
		post: {
			tags: ["User-profile Add details"],
			summary: "Add Details in User Profile",
			produces: ["application/json"],
			consumes: ["application/json"],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/userProfile'
						}
					}
				}
			},
			responses: {
				'200': {
					description: 'User profile has been updated'
				},
				'409': {
					description: "Details can't be changed"
				},
				'500': {
					description: 'Internal server error'
				}
			}
		}
	},
	getprofilelist:{
		get:{
			tags:["User-profile list"],
			summary:" All User profile list",
			produces:["application/json"],
			
				responses:{
					'200':{description:"Return all user list"},
					
					'500':{description:"Internal server error"},
				}
			}
	},
    getuser:{
       get:{
        tags:["Get User by id(one user)"],
        summary:"Single user ",
        produces:["application/json"],
        responses:{
            '200':{description:"Get single user"},
            '500':{description:"Internal server error"},
        }
       }
    },
    updateuser:{
        put:{
            tags:["Update User Profile"],
            summary:'Update an existing user profile',
            produces:["application/json"],
            parameters:[
                {
                    in:'path',
                    name:'userId',
                    required:true,
                    type:'string',
                }
            ],
            requestBody:{
                content:{
                    'application/json':{
                        schema:{
                            type:"object",
                            properties:{
                                userName:{
                                    type:'string'
                                },
                                address:{
                                    type:'string'
                                },
                                phone:{
                                    type:'string',
                                },
                                shopifystoredomain:{
                                    type:'string'
                                },
                                shopifyaccesstoken:{
                                    type:'string'
                                }

                            }
                        }
                    }
                }
            },
            response:{
                '200':{description:"User has been updated"},
                '401':{description:"Auth failed"},
                '500':{description:"Internal server error"}
            }
        }
    },
    deleteuser:{
        delete:{
            tags:["Delete User"],
            summary:"Delete existing user",
            produces:["application/json"],
            parameters:[
                {
                    in:'path',
                    name:'userId',
                    required:true,
                    type:'string',
                }
            ],
            responses:{
                '200':{description:"User deleted successfully"},
                '404':{description:"User not found"},
                '500':{description:"Internal server error"}
            }
        }
    },
    getallstoreowner:{
        get:{
			tags:["Store owner list"],
			summary:" All Store owner list",
			produces:["application/json"],
			
				responses:{
					'200':{description:"Return all store-owner list"},
					
					'500':{description:"Internal server error"},
				}
			}
    },
    createsuperadminmanager: {
		post: {
			tags: ["Create super admin manager"],
			summary: "Create super admin manager",
			produces: ["application/json"],
			consumes: ["application/json"],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/superadminmanager',
						}
					}
				}
			},
			responses: {
				'201': {
					description: 'Super admin manager has been created'
				},
                '400':{
                    description:'Already registered'
                },
				'500': {
					description: 'Internal server error'
				}
			}
		}
	},
    getsuperadminmanager:{
        get:{
			tags:["Super admin manager list"],
			summary:" All Super admin manager list",
			produces:["application/json"],
			
				responses:{
					'200':{description:"Return all super admin manager list"},
					
					'500':{description:"Internal server error"},
				}
			}
    },
	updatesuperadminmanager:{
            put:{
                tags:["Update Super Admin Manager status"],
                summary:'Update status of super admin manager status',
                produces:["application/json"],
                parameters:[
                    {
                        in:'path',
                        name:'userId',
                        required:true,
                        type:'string',
                    }
                ],
                requestBody:{
                    content:{
                        'application/json':{
                            schema:{
                                type:"object",
                                properties:{
                                    status:{
                                        type:'string'
                                    },
                                   
    
                                }
                            }
                        }
                    }
                },
                response:{
                    '200':{description:"Super admin manager status has been updated"},
                    
                    '500':{description:"Internal server error"}
                }
            }
    },
	createstoreownermanager:{
        post: {
			tags: ["Create store owner manager"],
			summary: "Create store owner manager",
			produces: ["application/json"],
			consumes: ["application/json"],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/storeownermanager',
						}
					}
				}
			},
			responses: {
				'201': {
					description: 'Store owner manager has been created'
				},
                '400':{
                    description:'Already registered'
                },
				'500': {
					description: 'Internal server error'
				}
			}
		}
    },
	getstoreownermanager:{
        get:{
			tags:["Store owner manager list"],
			summary:" All store owner manager list",
			produces:["application/json"],
			
				responses:{
					'200':{description:"Return all store owner manager list"},
					
					'500':{description:"Internal server error"},
				}
			}
    },
	updatestoreownermanager:{
        put:{
            tags:["Update Store Owner Manager status"],
            summary:'Update status of store owner manager status',
            produces:["application/json"],
            parameters:[
                {
                    in:'path',
                    name:'userId',
                    required:true,
                    type:'string',
                }
            ],
            requestBody:{
                content:{
                    'application/json':{
                        schema:{
                            type:"object",
                            properties:{
                                status:{
                                    type:'string'
                                },
                               

                            }
                        }
                    }
                }
            },
            response:{
                '200':{description:"Store owner manager status has been updated"},
                
                '500':{description:"Internal server error"}
            }
        }
    },
	
	updatestoreownerstatus:{
        put:{
            tags:["Update Stor Owner status"],
            summary:'Update  store owner status',
            produces:["application/json"],
            parameters:[
                {
                    in:'path',
                    name:'userId',
                    required:true,
                    type:'string',
                }
            ],
            requestBody:{
                content:{
                    'application/json':{
                        schema:{
                            type:"object",
                            properties:{
                                status:{
                                    type:'string'
                                },
                               

                            }
                        }
                    }
                }
            },
            response:{
                '200':{description:"Store owner status has been updated"},
                
                '500':{description:"Internal server error"}
            }
        }
    },
	deletestoreowner:{
        delete:{
            tags:["Delete Store Owner"],
            summary:"Delete store owner",
            produces:["application/json"],
            parameters:[
                {
                    in:'path',
                    name:'userId',
                    required:true,
                    type:'string',
                }
            ],
            responses:{
                '200':{description:"Store owner deleted successfully"},
                '404':{description:"User not found"},
                '500':{description:"Internal server error"}
            }
        }
    }


	
}