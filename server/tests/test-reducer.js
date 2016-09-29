import test from "ava";
import _ from "lodash";
import { reducerTest } from "redux-ava";
import { Map, fromJS } from "immutable";
import * as actions from "../actions";

const objs = require("../data/test.json");

import reducer from "../reducer.js";

test("return initial state", reducerTest(reducer, Map({}), {}, Map({})));

test("add items", reducerTest(reducer, Map({}), actions.addRecipeAction(objs.id1), Map({ "id1": objs.id1 })));
test("remove items", reducerTest(reducer, Map({ "id1": objs.id1 }), actions.removeRecipeAction("id1"), Map({})));

const edited = _.extend(objs.id1, { name: "Just Toast" });
test("edit item", reducerTest(reducer, Map(objs), actions.editRecipeAction(edited), Map({ "id1": edited, "id2": objs.id2 })));
