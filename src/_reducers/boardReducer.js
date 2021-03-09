import { GET_BOARD } from '../_actions/types';

export default function board(state = {}, action) {
  switch (action.type) {
    case GET_BOARD:
      return { ...state, movies: action.payload };
    default:
      return { state, movies: [] };
  }
}
