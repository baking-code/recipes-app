// This file is a shim to help pm2 start the app.
const path = require("path");

process.env.NODE_CONFIG_DIR = path.join(__dirname, "server", "config");
require("./server/server.js");
