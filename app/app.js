var React = require('react');
var {Route,Router,hashHistory} = require('react-router');
require('./config/base');
var newFastClick = require('fastclick');
document.ready = function(){
        newFastClick(document.body);
}

//module
var Account = require('./module/account');
var Shark = require('../app/module/shark'); //提现
var Play = require('../app/module/fatPlay'); //  摇一摇
var Prize = require('../app/module/prize');
var Exchange = require('../app/module/exchange'); //积分兑换
var Convert = require('./module/convert'); //
var Banner =require('./module/slider');  //banner轮播
var Advert = require('./module/advert');  //广告页面
var routes = (
    <Router history={hashHistory}>
        <Route name="user" path="/" component={Account} />
        <Route name="cash" path='cash' component={Shark} />
        <Route name="exchange" path='exchange' component={Exchange}/>
        <Route name="prize" path='prize' component={Prize} />
        <Route name="play" path='play' component={Play} />
        <Route name="convert" path='convert' component={Convert} />
        <Route name="Banner" path='Banner' component={Banner} />
        <Route name="Advert" path='Advert' component={Advert} />
    </Router>
)
React.render((
    <Router routes={routes} history={hashHistory} />),
    document.body
)