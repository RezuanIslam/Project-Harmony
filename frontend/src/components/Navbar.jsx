import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-primary-content" href="/">
          Harmony
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn" href="/login">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
