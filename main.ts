let socket = sockets.connect("wss://echo.websocket.events") // Free test server
socket.onMessage(msg => {
    game.splash("Received: " + msg)
})
socket.send("hello from MakeCode!")

