
module.exports={

    createLayerdata:{
        post: {
			tags: ["Add layer data"],
			summary: "Add layer data",
			produces: ["application/json"],
			consumes: ["application/json"],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/layerdata'
						}
					}
				}
			},
			responses: {
				'201': {
					description: 'Layer data has been created'
				},
				'400': {
					description: "Bad request"
				},
				
			}
		}
    },
    getLayerdata:{
        get:{
			tags:["Get layer data"],
			summary:"Layer data",
			produces:["application/json"],
			
				responses:{
					'200':{description:"Return layer data"},
					
					'500':{description:"Internal server error"},
				}
			}
    },
    getLayerdataBydId:{
        get:["Get data by Id"],
        summary:"Get layer data by Id",
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
            '200':{description:"Get layer data"},
            '500':{description:"Internal server error"},
        }
    },
    updateLayerdata:{
        patch:
        {
            tags:["Update layer data"],
            summary:'Update and existing layer data',
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
                '201':{description:"Layer data has been updated"},
                '404':{description:"Not found"},
                '500':{description:"Internal server error"}
            },
        }
    },
    deleteLayerdata:{
        delete:{
            tags:["Delete Layer data"],
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
                '200':{description:"Layer data has been deleted"},
                '404':{description:"Not found"},
                '500':{description:"Internal server error"}
            }
        }
    },
}