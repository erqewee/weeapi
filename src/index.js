const app = (require("express"))();
const wss = new (require("ws")).Server({ server: app });

const configuration = require("./configuration");

const fetch = (...args) => import('node-fetch').then(({ default: get }) => get(...args));

wss.on("connection", (socket) => {
  console.log(`[Server] New socket connected.`);

  socket.on("upgrade", (request) => {});

  socket.send(JSON.stringify(configuration));
});

app.get("/", (req, res) => {
  res.statusCode = 200;

  res.send("WeeApi");
});

app.listen(3000, () => setInterval(() => fetch("https://weeapi.erenix.repl.co"), 15000));

// require("./test-connection");