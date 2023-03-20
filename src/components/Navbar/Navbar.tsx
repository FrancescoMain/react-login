// components/Navbar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <NavLink className="navbar-item" to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
