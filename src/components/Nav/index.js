import React from "react";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

function Nav() {
  return (
    <header>
      <h2>
        <a href="/"></a>
      </h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className ="float-left navbar-nav flex-row" id="custom-nav">Jaya Gudipalli 
                </div>
        <div className="collapse navbar-collapse flex-row" id="custom-tabs">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About Me 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
