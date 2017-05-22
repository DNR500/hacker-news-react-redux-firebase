import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/combined';

const store = createStore(rootReducer,
  {},
  applyMiddleware(thunk),
);

export default store;
