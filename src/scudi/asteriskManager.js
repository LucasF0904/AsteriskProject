const app = require('express')
const http = require('http').createServer(app)

const asteriskManager = require('asterisk-manager')
let ami = asteriskManager(5038, '192.168.50.129', 'scudi', 'dev@scudi#2021')
console.log(ami)

ami.action( {
    'action': 'Status'
}, function(err, res){})

ami.on('managerevent', function(evt){console.log('OK')})
ami.on('peerStatus', async(evt) => {
    console.log(JSON.stringify(evt))
})

ami.action({
    'action': 'originate',
    'channel': 'SIP/995871750',
    'context': 'default',
    'exten': '984138213',
    'callerID': '984138213',
    'priority': 1,
    'timeout': 20000
}, function (err, res) {})

http.listen(500, function() {
    console.log('Express Rodando')
})