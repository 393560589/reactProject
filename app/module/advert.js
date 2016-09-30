/**
 * Created by Administrator on 2016/9/30.
 */
var React = require('react');
var {Link,Route} = require('react-router');

var Navbar = require('./navbar');

var Advert = React.createClass({
    render:function () {
        return (
            <div className="advertising">
                <div className="personDetail clearfix">
                    <div className="pull-left clearfix">
                        <i className="logowrap">
                            <img src="./img/image/wow.jpg" alt=""/>
                        </i>
                        <div className="logotit">
                            <p>今天共摇到了0.15元</p>
                            <p>你的支持，是土豪们的动力哦</p>
                        </div>
                    </div>
                    <div className="pull-right">
                        <span>提现</span>
                    </div>
                </div>
                <ul className="list">
                    <li>
                        <a className="advWrap">
                            <img src="./img/gift/htzh.jpg" alt=""/>
                        </a>
                        <div className="fxbox clearfix">
                            <div className="pull-left clearfix">
                                <i className="logowrap">
                                    <img src="./img/image/wow.jpg" alt=""/>
                                </i>
                                <div className="logotit">
                                    <p>零钱拼宝</p>
                                    <p>2元中5000，中不中都返本。</p>
                                </div>
                            </div>
                            <div className="pull-right">
                                <i className="iconfont">&#xe613;</i>
                                <span>支持Ta</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="advWrap">
                            <img src="./img/gift/htzh.jpg" alt=""/>
                        </a>
                        <div className="fxbox clearfix">
                            <div className="pull-left clearfix">
                                <i className="logowrap">
                                    <img src="./img/image/wow.jpg" alt=""/>
                                </i>
                                <div className="logotit">
                                    <p>零钱拼宝</p>
                                    <p>2元中5000，中不中都返本。</p>
                                </div>
                            </div>
                            <div className="pull-right">
                                <i className="iconfont">&#xe613;</i>
                                <span>支持Ta</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="advWrap">
                            <img src="./img/gift/htzh.jpg" alt=""/>
                        </a>
                        <div className="fxbox clearfix">
                            <div className="pull-left clearfix">
                                <i className="logowrap">
                                    <img src="./img/image/wow.jpg" alt=""/>
                                </i>
                                <div className="logotit">
                                    <p>零钱拼宝</p>
                                    <p>2元中5000，中不中都返本。</p>
                                </div>
                            </div>
                            <div className="pull-right">
                                <i className="iconfont">&#xe613;</i>
                                <span>支持Ta</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <Navbar/>
            </div>
        )
    }
})
module.exports = Advert;