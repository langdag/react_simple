import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'
import postReducer from '../reducers/postReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	postReducer,
	form: formReducer
});

export default createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
