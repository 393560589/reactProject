var React = require('react');
var {Route,Router,hashHistory} = require('react-router');
require('./config/base');

//module
var Account = require('./module/account');
var Shark = require('../app/module/shark');
var Play = require('../app/module/play')

var routes = (
    <Router>
        <Route name="user" path="/" component={Account} />
        <Route name="cash" path='cash' component={Shark} />
        <Route name="play" path='play' component={Play} />
    </Router>
)
React.render((
    <Router routes={routes} history={hashHistory} />),
    document.body
)