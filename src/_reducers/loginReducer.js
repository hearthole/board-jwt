import { LOGIN_USER } from '../_actions/types';

export default function login(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.data };
    default:
      return state;
  }
}
