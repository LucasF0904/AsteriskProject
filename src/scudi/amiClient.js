const app = require('express')
const http = require('http').createServer(app)

const AmiClient = require('asterisk-ami-client');
let ami = new AmiClient();

ami.connect('scudi', 'dev@scudi#2021', {host: '192.168.50.129', port: 5038})
 .then(amiConnection => {
 
    ami
    .on('managerevent', function(evt){console.log('OK')})
    .on('peerStatus', async(evt) => { console.log(JSON.stringify(evt))})
    .action({
       'action': 'originate',
       'channel': 'SIP/995871750',
       'context': 'default',
       'exten': '984138213',
       'callerID': '984138213',
       'priority': 1
    }, function (err, res) {});
 
     setTimeout(() => {
        ami.disconnect();
     }, 5000);
 
 })
 .catch(error => console.log(error));

 http.listen(500, function() {
    console.log('Express Rodando')
})