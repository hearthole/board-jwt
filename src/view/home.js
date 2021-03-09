import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../_actions/userAction';

function LandingPage(props) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(
      logoutUser().then((res) => {
        props.history.push('/login');
      })
    );
  };
  return (
    <div className='main'>
      <div>
        <h2>시작 페이지</h2>
      </div>
      <div>
        {localStorage.getItem('auth_info') ? (
          <button onClick={onClickHandler}>로그아웃</button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
