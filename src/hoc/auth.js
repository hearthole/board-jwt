import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authUser } from '../_actions/userAction';

export default function auth(Componet, requireAuth) {
  //requireAuth
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능

  function AuthCheck(props) {
    //const isAuth = useSelector((state) => state.login.isAuth);
    const dispatch = useDispatch();
    //useEffect를 사용해서 초기 검증을 실행해준다
    useEffect(() => {
      dispatch(authUser()).then((res) => {
        console.log(res);
        // console.log("훅 테스트");
        //로그인을 하지 않았을때
        if (!res.payload.isAuth) {
          if (requireAuth) {
            //option이 true일때 로그인으로 강제 이동
            props.history.push('/login');
          }
        } else {
          //로그인을 했을때
          //option이 false일때 LandingPage로 이동
          if (!requireAuth) {
            props.history.push('/');
          }
        }
      });
    }, []);

    return <Componet />;
  }

  return AuthCheck;
}
