var React = require('react');
var {Route,Router,hashHistory} = require('react-router');
require('./config/base');
var newFastClick = require('fastclick');
document.ready = function(){
        newFastClick(document.body);
}

//module
var Account = require('./module/account');
var Shark = require('../app/module/shark');
var Play = require('../app/module/play');
var Prize = require('../app/module/prize')
var Exchange = require('../app/module/exchange');
var Convert = require('./module/convert')

var routes = (
    <Router history={hashHistory}>
        <Route name="user" path="/" component={Account} />
        <Route name="cash" path='cash' component={Shark} />
        <Route name="exchange" path='exchange' component={Exchange}/>
        <Route name="prize" path='prize' component={Prize} />
        <Route name="play" path='play' component={Play} />
        <Route name="convert" path='convert' component={Convert} />
    </Router>
)
React.render((
    <Router routes={routes} history={hashHistory} />),
    document.body
)