import fs from "fs";
import makeStore from "./store";
import startServer from "./server";
import { loadRecipesAction } from "./actions";


fs.createReadStream(__dirname + "/data/test.json").pipe(fs.createWriteStream(__dirname + "/data/test.json.bck"));

export const store = makeStore();
startServer(store);

store.dispatch(loadRecipesAction(require("./data/test.json")));

console.log("Store loaded successfully");

//process.on("exit", __onExit);

//process.on("SIGTERM", __onExit);
process.on("SIGINT", __onExit);

function __onExit() {
  console.log("Saving store...");
  const state = store.getState();
  fs.writeFileSync(__dirname + "/data/test.json", JSON.stringify(state, null, 4), {
    encoding: "utf8"
  });
  process.exit(0);
}
