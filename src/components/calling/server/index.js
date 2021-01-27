const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const app = express();
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
// const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);



app.post('/api/messages', (req, res) => {
    const { data } = req.query

    res.header('Content-Type', 'application/json');
    client.calls
    .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: '+1' + data,
        from: process.env.TWILIO_PHONE_NUMBER
    })
    .then(call => console.log(call.sid));
});

// app.post('/api/messages', (req, res) => {

// });

// app.get('/', (req, res) => {
//     res.send('The simplecall server')
// })

// app.listen(4000, () => console.log('on port 4000'))



client.calls
      .create({
         twiml: '<Response><Say>Ahoy, World!</Say></Response>',
         to: '+1' + data,
        from: TWILIO_PHONE_NUMBER
       })
      .then(call => console.log(call.sid));