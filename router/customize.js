

module.exports.postCustomizer = {
    post: {
      tags: ["Create customizer"],
      summary: "Add customizer data",
      produces: ["application/json"],
      consumes: ["application/json"],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/customizer'
            }
          }
        }
      },
      responses: {
        '201': {
          description: "Data created"
        },
        '500': {
          description: "Internal server error"
        }
      }
    }
  };
  
  module.exports.getCustomizer = {
    get: {
      tags: ["Get customizer data"],
      summary: "Get all customizer data",
      produces: ["application/json"],
      responses: {
        '200': { description: "Get all customizer data" },
        '500': { description: "Internal server error" }
      }
    }
  };
  
  module.exports.getCustomizerByIdd = {
    get: {
      tags: ["Get customizer data by Id"],
      summary: "Get customizer data by Id",
      produces: ["application/json"],
      parameters: [
        {
          in: 'path',
          name: 'pId',
          required: true,
          schema: {
            type: 'string'
          }
        }
      ],
      responses: {
        '200': { description: "Get customizer data" },
        '400': { description: "Invalid ID format" },
        '404': { description: "Customizer data not found" },
        '500': { description: "Internal server error" }
      }
    }
  };
  
  module.exports.getCustomizerById = {
    get: {
      tags: ["Get data by Id"],
      summary: "Get customizer data by Id",
      produces: ["application/json"],
      parameters: [
        {
          in: 'path',
          name: 'pId',
          required: true,
          schema: {
            type: 'string'
          }
        }
      ],
      responses: {
        '200': { description: "Get customizer data" },
        '400': { description: "Invalid ID format" },
        '404': { description: "Customizer data not found" },
        '500': { description: "Internal server error" }
      }
    }
  };
  
  module.exports.updateCustomizer = {
    patch: {
      tags: ["Customizer update"],
      summary: "Update an existing customizer data",
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'pId',
          required: true,
          schema: {
            type: 'string'
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                newData: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      responses: {
        '200': { description: "Customizer data has been updated" },
        '400': { description: "Invalid request format" },
        '404': { description: "Customizer data not found" },
        '500': { description: "Internal server error" }
      }
    }
  };
  