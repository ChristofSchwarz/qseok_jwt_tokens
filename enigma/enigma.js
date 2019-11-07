// you have to install the following modules:
// npm install ws enigma.js

const enigma = require('./node_modules/enigma.js/enigma.min.js');
const WebSocket = require('ws');
//const fs = require('fs');
const schema = require('./node_modules/enigma.js/schemas/12.170.2.json'); 
// match this schema to your closest Qlik Sense version.

const session = enigma.create({
    schema,
    url: 'wss://192.168.56.234/api/engine/openapi/rpc',
    createSocket: url => new WebSocket(url, {
        rejectUnauthorized: false,  
        headers: {
            "Authorization": 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im15LWtleS1pZGVudGlmaWVyIn0.eyJpc3MiOiJodHRwczovL3FsaWsuYXBpLmludGVybmFsIiwiYXVkIjoicWxpay5hcGkiLCJzdWIiOiJhZG1pbiIsImdyb3VwcyI6WyJFdmVyeW9uZSJdLCJuYW1lIjoiUWxpayBBUEkiLCJleHAiOjE4MDAwMDAwMDB9.KTZ0nRl31vnbrVosuqWtfhPr3vNvmONXQPrchi5aw3FikigBxFKkNd2NDyvYHEoB0EoseJ4MqRhGOj6gjtn8pQ'
        }
    })
});

session.open().then(function (global) {
    console.log('Session was opened successfully');
    //console.log(global);
    return global.engineVersion().then(ret => {
        console.log(ret);
        return global.getDocList();
    }).then(ret => {
        // console a list of available documents
        ret.forEach(e=>{
            console.log(e.qDocId, e.qDocName);
        });
    }).catch(error => {
        console.error('Error', error);
    });
}).then(ret => {
    session.close();
}).catch(error => {
    console.error('Error', error);
});
