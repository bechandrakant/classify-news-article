const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require('express')
const aylien = require("aylien_textapi")
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

// set aylien API credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

console.log('Your API credentials are: ' + JSON.stringify(textapi))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/classify', postData)

function postData (req, res) {
    // Get url to classify
    const urlToClassify = req.body.url;

    // call aylien api with url
    textapi.classify({
        url: urlToClassify
      }, (error, response) => {
        // If everything goes well
        if (error === null) {
          // Extract useful data from response
          let classification = {
              'category': response.categories[0].label,
              'text': response.text
          }
          // send data to client
          res.json(classification);
        }
      });
}

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
