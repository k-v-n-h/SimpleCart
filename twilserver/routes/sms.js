var express = require('express');
var router = express.Router();

/* GET sms page. */
router.get('/sms', function(req, res, next) {
  // Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '+15017122661', to: '+15558675310'})
      .then(message => console.log(message.sid));

  res.render('index', { title: 'Express' });
});


module.exports = router;
