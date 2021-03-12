import { LOGIN_USER, LOGOUT_USER, CHECK_LOGIN } from '../_actions/types';

export default function user(state = { isLogin: false }, action) {
  console.log('user reducer');
  console.log(action);
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        data: action.payload.data,
        status: action.payload.status,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        status: action.payload.status,
      };
    case CHECK_LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
