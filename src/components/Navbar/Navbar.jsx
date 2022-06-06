import React from "react";
// import {Link} from 'react-router-dom';

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  return (
    <div data-cy="navbar">
      <a data-cy="navbar-home-link" href="/">Logo</a>
      <span data-cy="navbar-cart-items-count">
        {/* count here */}
        Cart: {0}
        </span>
      <button data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
