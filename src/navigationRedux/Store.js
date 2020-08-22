import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import pageListReducer from './reducers/PageListReducer';

const rootReducer = combineReducers({
  pageList: pageListReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
