import test from "ava";
import { reducerTest } from "redux-ava";
import { Map } from "immutable"

import reducer from "../reducer.js";

test("return initial state", reducerTest(reducer, Map({}), {}, Map({})));

// TODO Add test

// TODO Remove test

// TODO Edit Test
