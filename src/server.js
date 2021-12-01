const app = require('express')
const http = require('http').createServer(app)

const asteriskManager = require('asterisk-manager')
let ami = asteriskManager(5038, '127.0.0.1', 'admin', 'admin')


//aqui altera a função especifica que deseja apenas para testar
ami.on("peerStatus", async(evt) => {
    console.log(JSON.stringify(evt))
})


http.listen(500, function() {
    console.log('Express Rodando')
})