import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbarItems">
        <div className="container">


          <h1 className="NavBar-title">App</h1>

          <div className="menu-icon">
            <ul>
              <li>
                <Link style={{ textDecoration: 'none', color: '#e3e3e3'}} to="/feed">Feed</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none', color: '#e3e3e3'}} to="/admin">Admin</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none', color: '#e3e3e3'}} to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
