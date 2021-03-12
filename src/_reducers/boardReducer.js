import { GET_BOARD } from '../_actions/types';

export default function board(state = {}, action) {
  switch (action.type) {
    case GET_BOARD:
      console.log('board reducer');
      console.log(action);
      return {
        ...state,
        movies:
          action.payload && Array.isArray(action.payload.data)
            ? action.payload.data
            : [],
      };
    default:
      return { state, movies: [] };
  }
}
