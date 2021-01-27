// const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
// const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
// const TWILIO_PHONE_NUMBER = process.env.TWILIO_AUTH_TOKEN;
// // const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// const express = require('express');
// // const cors = require('cors');
// const bodyParser = require('body-parser');
// const pino = require('express-pino-logger');
// const client = require('twilio')(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(pino);
// // app.createServer(app).listen(3001)

// app.get('/api', (req, res) => {
//   res.send('The simplecall server');
// });

// app.get('/api/call', (req, res) => {
//   res.send('The simplecall server');
//   const { data } = req.query

//   res.header('Content-Type', 'application/json');
//   client.calls
//     .create({
//       url: 'http://demo.twilio.com/docs/voice.xml',
//       to: '+1' + data,
//       from: process.env.TWILIO_PHONE_NUMBER
//     })
//     .then(call => console.log(call.sid));
//     console.log(data);
// });

// app.listen(8080, () => console.log('on port 8080'))


// // app.post('/api/messages', (req, res) => {
// //   const {data} = req.query
// //     res.header('Content-Type', 'application/json');
// //     client.calls
// //     .create({
// //         url: 'http://demo.twilio.com/docs/voice.xml',
// //         // to: '+14357301813',
// //         to: '+1' + data,
// //         from: process.env.TWILIO_PHONE_NUMBER
// //     })
// //     .then(call => console.log(call.sid));
// // });

// // app.post('/api/messages', (req, res) => {

// // });


// // app.listen(3000, () => console.log('on port 3000'))



// // client.calls
// //       .create({
// //          twiml: '<Response><Say>Ahoy, World!</Say></Response>',
// //          to: '+1' + data,
// //         from: TWILIO_PHONE_NUMBER
// //        })
// //       .then(call => console.log(call.sid));