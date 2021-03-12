import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkLogin } from '../_actions/userAction';

export default function auth(Componet, requireAuth) {
  function AuthCheck(props) {
    const isLogin = useSelector((state) => state.user.isLogin);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
      dispatch(checkLogin());
      if (!isLogin) {
        if (requireAuth) {
          props.history.push('/login');
          alert('로그인이 필요합니다.');
        }
      } else {
        //로그인을 했을때
      }
    }, []);

    return <Componet />;
  }

  return AuthCheck;
}
