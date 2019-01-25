import * as types from '../actions/actionTypes';

export default function addDiveReducer(state = [], action) {
  switch (action.type) {
    case types.SAVE_DIVE:
      return action.diveData;
    case types.LOAD_DATA_SUCCESS:
      return action.diveData;
    case types.GET_NEXT_DIVE:
    	return action.diveData
    	// alert(action);
    	// return (...state, {nextDiveNumber: action.payload});
    default:
      return state;
  }
}
