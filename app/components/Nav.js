import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Count Down</Link>
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
