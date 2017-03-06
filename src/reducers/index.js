import {combineReducers} from 'redux'
import boardReducer from './boardReducer'
import userReducer from './userReducer'
import { reducer as formReducer } from 'redux-form'

//reducers are combined into one for easy access to the store

const combinedReducers = combineReducers({
	boards: boardReducer,
	user: userReducer,
	form: formReducer
});

export default combinedReducers;