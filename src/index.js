const port = 3000;

const wss = new (require("ws")).Server({ port });

const configuration = require("./configuration");

wss.on("connection", (socket) => {
  console.log(`[SocketServer] New socket connected.`);

  socket.send(JSON.stringify(configuration));
});

// require("./test-connection");