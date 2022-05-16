const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const cron = require('node-cron');
const request = require('request');

require("dotenv").config();
// const SERVER_ADDRESS = process.env.REACT_APP_SERVER_PORT;
router.use(parser.json());
router.use(parser.urlencoded({
    extended: true
}));


router.get("/", (req, res) => {
    const idCronOne = (req.query.h);
    const heure = 21;
  cron.schedule('2 20'+`heure`+' * * * ', function() {
     //   cron.schedule("2 51 20 * * * ", function() {
        console.log("lecture des données du Wemos");
    //     request('http://xx.xx.xx.xx:8070/api/xdevices.json?cmd=10', function (error, response, body) {
    //    //    request('http://xx.xx.xx.xx/json?tasknr=1&view=sensorupdate', function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //     console.log(body)
       // }
      //  })
    });
   // job.stop();
});


//  cron.schedule("*/5 * * * * *", function() {
// //   // API call goes here
//  console.log("Get Wemos 15 Secondes");
//  request('http://192.168.1.84:8070/api/xdevices.json?cmd=10', function (error, response, body) {
// //    request('http://192.168.1.80/json?tasknr=1&view=sensorupdate', function (error, response, body) {
//  if (!error && response.statusCode == 200) {
//  console.log(body)

//  }
//  })
//  })

module.exports = router;
