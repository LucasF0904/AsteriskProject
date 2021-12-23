const app = require('express')();
const http = require('http').createServer(app)

const asteriskManager = require('asterisk-manager');
const { Console } = require('console');
let ami = asteriskManager(5038, '192.168.21.111', 'dev', 'devpass')
let peers = []

ami.on('managerevent', function (evt) {  });

ami.on("SIPpeers", async (evt) => {
    peers.push(evt)
});

ami.action({
    'Action': 'SIPpeers',
    'ActionID': '7c5f3952633d11ec953c0022196bd414'
}, function (err, res) { });

console.log(peers);
