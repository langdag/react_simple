//import { combineReducers } from 'redux';
import { SET_POST_TITLE } from '../constants/actionTypes'
//let reducer = (state = {}, action) => {
//  switch (action.type) {
//    default:
//      return state;
//  }
//};
//
//const rootReducer = combineReducers({
//  reducer
//});

//export default rootReducer;

const initState = {
	PostTitle: 'Test'
}

export default (state = initState, action) => {
	switch (action.type) {
		case SET_POST_TITLE:
			return {...state, post_title: action.payload}
		default: 
			return state;
	}
}