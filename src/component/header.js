import React from 'react';
import { Link } from 'react-router-dom';

function header() {
  return (
    <div>
      <div className="header-box">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/board">게시판</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
