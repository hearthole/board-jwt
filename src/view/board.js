import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBoard } from '../_actions/boardAction';
import Header from '../component/header';

function BoardPage(props) {
  const movies = useSelector((state) => state.board.movies) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoard());
  }, []);

  return (
    <div className="login">
      <div>
        <Header />
      </div>
      <table className="type01">
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>director</th>
            <th>year</th>
            <th>image</th>
          </tr>
          {movies.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.director}</td>
              <td>{row.year}</td>
              <td>
                <img src={row.poster} alt="" width="100px" height="100px"></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default withRouter(BoardPage);
