import path from "path";
import Server from "socket.io";
import express from "express";
import fs from "fs";
import makeStore from "./store";
import { loadRecipesAction } from "./actions";

const app = express();
const http = require("http").Server(app, { origins: "*:*" });
const io = new Server(http);

const clientDir = path.join(__dirname, "..", "client");

console.error(clientDir);

app.use(express.static(clientDir));

// Wildcard handler for pushstate requests
app.get("*", function (req, res) {
  res.sendFile(path.join(clientDir, "index.html"));
});

http.listen(4321, () => {
  console.log("Recipes app now listening on port", 4321);
});


fs.createReadStream(__dirname + "/data/test.json").pipe(fs.createWriteStream(__dirname + "/data/test.json.bck"));

export const store = makeStore();
startServer(io, store);

store.dispatch(loadRecipesAction(require("./data/test.json")));

console.log("Store loaded successfully");

process.on("SIGINT", __onExit);

function __onExit() {
  console.log("Saving store...");
  const state = store.getState();
  fs.writeFileSync(__dirname + "/data/test.json", JSON.stringify(state, null, 4), {
    encoding: "utf8"
  });
  process.exit(0);
}

function startServer(io, store) {
  store.subscribe(
    () => io.emit("state", store.getState().toJS())
  );

  io.on("connection", (socket) => {
    socket.emit("state", store.getState().toJS());
    socket.on("action", store.dispatch.bind(store));
  });
}
