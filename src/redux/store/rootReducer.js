import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import uiReducer from '../reducers/uiReducer';
import basketReducer from '../reducers/basketReducer';

const rootReducer = combineReducers({
  user: userReducer,
  ui : uiReducer,
  basket: basketReducer,
});

const store = createStore(rootReducer);

export default store;
