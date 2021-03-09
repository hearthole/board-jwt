import { LOGIN_USER, LOGOUT_USER, AUTH_USER } from '../_actions/types';

export default function login(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      if (action.payload) {
        return { ...state, isAuth: action.payload };
      }
      return { ...state, isAuth: false };
    case LOGOUT_USER:
      return { ...state, isAuth: action.payload };
    case AUTH_USER:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
}
