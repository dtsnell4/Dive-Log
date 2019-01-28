import * as types from '../actions/actionTypes';

// const initialState = {
// 	diveNumber: '',
// 	diveLocation: '',
// 	divedate: '', 
// }
export default function(state = null, action) {
  switch (action.type) {
    case types.STORE_FORM_DATA:
    	return action.payload;
	default:
    	return state;
  } 
}
