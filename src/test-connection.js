const Socket = new (require("ws")).WebSocket("ws://localhost:3000");

const { template } = require("../package.json");

Socket.on("open", () => console.log("[Connection] Connected to \"WeeApi\" Gateway."));
Socket.on("message", (data) => {
  let payload = JSON.parse(data);

  let name = template.name;
  let version = template.version;

  let project = payload[name];

  if (project.latest !== version && !project.supported.includes(version)) {
    console.log("Not supported.")
  } else {
    console.log("Supported")
  }
});