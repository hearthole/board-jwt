import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/userAction';
function LoginPage(props) {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPassHanlder = (e) => {
    setPass(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      uid: id,
      pass: pass,
    };

    dispatch(loginUser(body))
      .then((res) => {
        console.log(res);
        if (res.payload === true) {
          props.history.push('/board');
        } else {
          alert('오류발생');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login'>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>ID</label>
        <input type='id' value={id} onChange={onIdHandler} />
        <label>Password</label>
        <input type='password' value={pass} onChange={onPassHanlder} />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
