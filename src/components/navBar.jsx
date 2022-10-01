import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const togglerRef = React.useRef(null);

  const handleNavItemClick = () => {
    togglerRef.current.click();
  };

  return (
    <nav className="navbar navbar-dark fixed-top navbar-expand-lg navbar_bg_color">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Word-Image
        </Link>
        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavItemClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/new-image"
                onClick={handleNavItemClick}
              >
                New Image
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".in">
              <Link
                className="nav-link"
                to="/list-image"
                onClick={handleNavItemClick}
              >
                View All
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
