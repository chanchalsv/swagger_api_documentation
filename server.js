/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// const { swaggerUi, swaggerSpec } = require('./swagger')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger'); // Adjust the path if necessary

// Create Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev")); // Log HTTP requests
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCssUrl: CSS_URL}));

app.get("*",(req,res)=>{
  res.send("Hello I'm swagger API documentation")
})


// Set the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
