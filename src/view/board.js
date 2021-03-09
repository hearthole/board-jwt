import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBoard } from '../_actions/boardAction';

function BoardPage(props) {
  const movies = useSelector((state) => state.board.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoard()).then((res) => {
      console.log(movies);
    });
  }, []);

  return (
    <div className='login'>
      <table className='type01'>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>director</th>
            <th>year</th>
          </tr>
          {movies.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.director}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default withRouter(BoardPage);
