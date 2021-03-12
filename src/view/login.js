import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../_actions/userAction';
function LoginPage(props) {
  const [body, setBody] = useState({ uid: '', pass: '' });
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

  const onIdHandler = (e) => {
    setBody({ ...body, uid: e.currentTarget.value });
  };
  const onPassHanlder = (e) => {
    setBody({ ...body, pass: e.currentTarget.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(body));
  };

  useEffect(() => {
    if (isLogin) {
      props.history.push('/board');
    }
  }, [isLogin]);

  return (
    <div className="login">
      <form
        onSubmit={onSubmitHandler}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>ID</label>
        <input type="id" value={body.uid} onChange={onIdHandler} />
        <label>Password</label>
        <input type="password" value={body.pass} onChange={onPassHanlder} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
