module.exports={
    createproduct:{
        post:{
            tags:["Create product on shopify"],
            summary:"Create product on shopify store",
            produces:["application/json"],
            consumes:["application/json"],
            requestBody:{
                required:true,
                content:{
                    "application/json":{
                        schema:{
                            $ref:"#components/schemas/shopifystore"
                        }
                    }
                }
            },
            responses: {
				'201': {
					description: 'Product data has been created'
				},
				'400': {
					description: "Bad request"
				},
                '500':{
                    description:"Internal server error"
                }
				
			}

        }
    },
    fetchorders:{
        get:{
            tags:["Get orders"],
            summary:"Get all orders",
            produces:["application/json"],
            responses:{
                '200':{description:"Return Product data"},
                
                '500':{description:"Internal server error"},
            } 

            
        }
    },

    fetchorderbydaterange:{
        post:{
            tags:["Get order by date range"],
            summary:"Get order by using date",
            produces:["application/json"],
            requestBody:{
                content:{
                    'application/json':{
                        schema:{
                            type:'object',
                            properties:{
                                startDate:{
                                    type:'Date',
                                },
                                endDate:{
                                    type:'Date',
                                }
                            }
                        }
                    }
                }
            },
            responses:{
                '200':{description:"Order fetch using date"},
                '403':{description:"Access token required"},
                '500':{description:"Internal server error"}
            }
        }
    },
    fetchcustomers:{
        get:{
            tags:["Get list of customers"],
            summary:"Get all customer",
            produces:["application/json"],
            responses:{
                '200':{description:"Fetch all customers"},
                
                '500':{description:"Internal server error"},
            }
        }
    },
    fetchproducts:{
        get:{
            tags:["Fetch all products"],
            summary:"Fetch all product",
            produces:["application/json"],
            responses:{
                '200':{description:"Fetch all products"},
                
                '500':{description:"Internal server error"},
            }
        }
    },
    fetchproductsbyid:{
        get:{
            tags:["Get products by Id"],
            summary:"Get product by Id",
            produces:["application/json"],
            parameters:[
                {
                    in:'path',
                    name:'id',
                    required:true,
                    type:'string',
                }
            ],
            responses:{
                '200':{description:"Get Product data"},
                '500':{description:"Internal server error"},
            }
        }
    },
    cart:{
        post:{
            tags:["Add to cart"],
            summary:"Add product to cart",
            produces:["application/json"],
            requestBody:{
                content:{
                    'application/json':{
                        schema:{
                            type:'object',
                            properties:{
                                details:{
                                    type:'string',
                                }
                            }
                        }
                    }
                }
            },
            responses: {
				'201': {
					description: 'Product data has been created'
				},
				'400': {
					description: "Bad request"
				},
                '500':{
                    description:"Internal server error"
                }
				
			}
        }
    },
    countshopoifystore:{
        get:{
            tags:["Total unique store count"],
            summary:"Shopify store count",
            produces:["application/json"],
            responses:{
                '200':{description:"Return Product data"},
                
                '500':{description:"Internal server error"},
            }
        }
    }



}