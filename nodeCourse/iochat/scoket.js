const net = require('net');
const chatSearver = net.createServer()
const clientList = [];
chatSearver.on('connection', client => {
    client.write('Hi!\n')
    clientList.push(client)
    client.on('data', data => {
        console.log('receive', data.toString())
        clientList.forEach(e => {
            e.write(data)
        })
    })
})
chatSearver.listen(9000)