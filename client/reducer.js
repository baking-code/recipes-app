import { List, Map } from 'immutable';

const init = List([]);

export default function(todos=init, action) {
  switch(action.type) {
    case 'ADD_RECIPE':
      // ...
    default:
      return todos;
  }
}
