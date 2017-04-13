import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li>
              <IndexLink to="/timer" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link">Count Down</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
                Created by <a href="https://github.com/ric9176" target="_blank">Richard Moss</a>
            </li>
          </ul>
        </div>
      </div>
);

export default Nav;
