import React from "react";
import desktopLogo from "../Assets/Logo/Full/Horizontal/Color-white.png";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={desktopLogo}
            alt="moodagent-logo"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Download
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
                Support
              </a>
            </li>
          </ul>
          <div class="d-flex">
            <a className="nav-link text-white" href="#">
              Log In
            </a>
            <button class="btn btn-light" type="button">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
