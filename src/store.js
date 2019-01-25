import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const defaultState = {
	addDive: {
		diveData: {},
	  	diveNumber: 1,
	  	openModal: false,
	}
}
const middleware = [
  thunk,
];

let store = {}

// const reducers = combineReducers(rootReducer);

export default () => {
	// const store = createStore(rootReducer)
	store = createStore(rootReducer, defaultState, compose(applyMiddleware(...middleware)));
	return store;
}
