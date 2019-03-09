import Engine from './../index'
const Socket = new Engine<string>() // Connects to localhost

Socket.On('open', () => {
	print('Connected')
	Socket.Send('test')
})

Socket.On('message', (data) => {
	print(`Message recieved: ${data}`)
})

Socket.On('close', (data) => {
	print('Disconnected')
})