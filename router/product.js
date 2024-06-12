
module.exports={

    createProductdata:{
        post: {
			tags: ["Add product data"],
			summary: "Add product data",
			produces: ["application/json"],
			consumes: ["application/json"],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/productdata'
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
				
			}
		}
    },
    getProductdata:{
        get:{
			tags:["Get product data"],
			summary:"Product data",
			produces:["application/json"],
			
				responses:{
					'200':{description:"Return Product data"},
					
					'500':{description:"Internal server error"},
				}
			}
    },
    getProductdataBydId:{
        get:{
           tags: ["Get data by Id"],
            summary:"Get product data by Id",
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
    updateProductdata:{
        patch:
        {
            tags:["Update Product data"],
            summary:'Update and existing Product data',
            produces:['application/json'],
            parameters:[
                {
                in:'path',
                name:'id',
                required: true,
                type:'string',
                }

            ],
            requestBody:{
                content:{
                    'application/json':{
                        schema:{
                            type:'object',
                            properties:{
                                newData:{
                                    type:'string'
                                }
                            }
                        }
                    }
                }
            },
            responses:{
                '201':{description:"Product data has been updated"},
                '404':{description:"Not found"},
                '500':{description:"Internal server error"}
            },
        }
    },
    deleteProductdata:{
        delete:{
            tags:["Delete Product data"],
            summary:"Delete data",
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
                '200':{description:"Product data has been deleted"},
                '404':{description:"Not found"},
                '500':{description:"Internal server error"}
            }
        }
    },
}