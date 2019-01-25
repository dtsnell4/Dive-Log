import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form';
import addDiveReducer from './addDiveReducer';
// import formDataReducer from './formDataReducer';
import storeFormDataReducer from './storeFormDataReducer';
import contactsReducer from './contactsReducer'
import ActiveContactReducer from './activeContactReducer'

console.log('storeFormDataReducer', storeFormDataReducer)
const rootReducer = combineReducers({
  // form: formReducer,
  addDive: addDiveReducer,
  // formData: formDataReducer,
  storeForm: storeFormDataReducer,
  contacts: contactsReducer,
  activeContact: ActiveContactReducer
})

export default rootReducer;
