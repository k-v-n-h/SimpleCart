// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
// import React from 'react';
// import PhoneInput from '../PhoneInput';


// const data = PhoneInput.values.numberformat; 

// if (!data) {
//     console.log("that worked");
//     client.calls
//       .create({
//          url: 'http://demo.twilio.com/docs/voice.xml',
//          to: data,
//          from: process.env.TWILIO_PHONE_NUMBER
//        })
//       .then(call => console.log(call.sid));
// } else {
//     console.log("that didnt work lol");
// }

// client.calls
//       .create({
//          url: 'http://demo.twilio.com/docs/voice.xml',
//          to: PhoneInput.values.numberformat,
//          from: '+987654321'
//        })
//       .then(call => console.log(call.sid));


function testpass(data) {

    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    if (data) {
        console.log("sending call request");
        client.calls
          .create({
            twiml: '<Response><Say>Ahoy, World!</Say></Response>',
             to: '+14357301813',
             from: process.env.TWILIO_PHONE_NUMBER
           })
          .then(call => console.log(call.sid));
    } else {
        console.log("call request failed");
    }
}

