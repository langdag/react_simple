import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from '../reducers/postReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	postReducer
});

export default createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
