import { request } from '../lib/axios';
import { GET_BOARD } from './types';

export function getBoard() {
  const resultData = request('get', '/movies')
    .then((res) => {
      console.log('board success');
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log('board error');
      console.log(err);
      return err;
    });

  return {
    type: GET_BOARD,
    payload: resultData,
  };
}
