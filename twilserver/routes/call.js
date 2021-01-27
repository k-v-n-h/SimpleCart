var express = require('express');
var router = express.Router();

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.send('call server');
    res.set('Access-Control-Allow-Origin', '*');
    next();
    const { data } = req.query

    // res.header('Content-Type', 'application/json');
    client.calls
      .create({
        // url: 'http://demo.twilio.com/docs/voice.xml',
        twiml: '<Response><Say>Ahoy, World! is this jannen? </Say></Response>',
        to: '+1' + data,
        from: TWILIO_PHONE_NUMBER
      })
      .then(call => console.log(call.sid));

});

 

module.exports = router;