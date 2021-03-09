import { request } from '../lib/axios';
import { GET_BOARD } from './types';

export function getBoard(id) {
  const resultData = request('get', id ? `/movies/${id}` : '/movies');
  return {
    type: GET_BOARD,
    payload: resultData,
  };
}
