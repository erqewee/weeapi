const app = (require("express"))();
const wss = new (require("ws")).Server({ server: app });

const configuration = require("./configuration");

wss.on("connection", (socket) => {
  console.log(`[Server] New socket connected.`);

  socket.send(JSON.stringify(configuration));
});

app.on("upgrade", (request, socket, head) => {
  wss.emit("upgrade", request, socket);
});

app.get("/", (req, res) => {
  res.statusCode = 200;

  res.send("WeeApi");
});

app.listen(3000);

// require("./test-connection");