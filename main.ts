let socket = sockets.connect("https://websocket-test-t9ah.onrender.com")

socket.onMessage((msg) => {
    game.splash("Received: " + msg)
})

game.splash("Sending hello...")
socket.send("hello from MakeCode!")

