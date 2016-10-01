import makeStore from "./store";
import startServer from "./server";
import { loadRecipesAction } from "./actions";

export const store = makeStore();
startServer(store);

store.dispatch(loadRecipesAction(require("./data/test.json")));

console.log(store.getState());
