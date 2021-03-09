import { combineReducers } from 'redux';
import login from './loginReducer';
import board from './boardReducer';

const rootReducer = combineReducers({ login, board });

export default rootReducer;
