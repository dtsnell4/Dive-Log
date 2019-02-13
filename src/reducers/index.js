import { combineReducers } from 'redux'
import addDiveReducer from './addDiveReducer';
import storeFormDataReducer from './storeFormDataReducer';

const rootReducer = combineReducers({
  addDive: addDiveReducer,
  storeForm: storeFormDataReducer,
})

export default rootReducer;
