import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {

} from "../reducers/index";

function configureStore() {
  const store = createStore(
    combineReducers({

    }),
    {},
    composeWithDevTools()
  );

  return store;
}

export default configureStore();
