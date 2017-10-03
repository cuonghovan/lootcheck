import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h3>Fb-react demo</h3>
    <ul>
      <li>
      <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/user-info'>User Info</Link>
      </li>
    </ul>
  </header>
);

export default Header;
