import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h3>React Redux demo</h3>
      <ul>
        <li>
        <Link to='/click-count'>Click Count</Link>
        </li>
        <li>
          <Link to='/wheather'>Wheather</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
