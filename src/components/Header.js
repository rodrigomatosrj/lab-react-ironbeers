import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
    </nav>
  );
}

export default Header;
