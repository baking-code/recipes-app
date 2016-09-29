import test from "ava";
import { Map } from "immutable";
import { reducerTest } from "redux-ava";

import reducer from "../reducer.js";

test("return initial state", reducerTest(reducer, Map({}), {}, Map({})));
// TODO Test loading and saving the store
