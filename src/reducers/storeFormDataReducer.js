import * as types from '../actions/actionTypes';

const initialState = {
	diveNumber: '22',
	diveLocation: '',
	divedate: '', 
}
export default function(state = initialState, action) {
	console.log(action.payload)
	debugger;
  switch (action.type) {
    case types.STORE_FORM_DATA:
    	return [...state, action.payload];
	default:
    	return state;
  } 
}
