const app = require('express')
const http = require('http').createServer(app)

const AmiClient = require('asterisk-ami-client');
let ami = new AmiClient();

ami.connect('root', 'Srtds810@502', {host: '192.168.21.111', port: 5038})
 .then(amiConnection => {
 
     ami
     .on('connect', () => console.log('connect'))
     .on('event', event => console.log(event))
     .on('data', chunk => console.log(chunk))
     .on('response', response => console.log(response))
     .on('disconnect', () => console.log('disconnect'))
     .on('reconnection', () => console.log('reconnection'))
     .on('internalError', error => console.log(error))
     .action({
         Action: 'Ping'
     });
 
     setTimeout(() => {
        ami.disconnect();
     }, 5000);
 
 })
 .catch(error => console.log(error));

 http.listen(500, function() {
    console.log('Express Rodando')
})