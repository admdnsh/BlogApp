import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Simple Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          </ul>
            <Link to="/create">Create Post</Link>
      </nav>
    </header>
  );
};

export default Header;
