import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer'


// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer" component={Timer}></Route>
      <Route path="countdown" component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
