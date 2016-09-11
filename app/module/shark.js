var React = require('react');
var {Link} = require('react-router');


//module
var Navbar = require('./navbar');
var  reqwest = require('reqwest');


var Shark = React.createClass({
    getInitialState:function () {
      return {
          addup:null,
          lasted:null
      }
    },
    componentWillMount:function(){
        var _this = this;
        reqwest({
            url:'./json/terrify.json',
            method:'get',
            type:'json',
            success:function(xrh){
                if(_this.isMounted()){
                    _this.setState({
                        addup:xrh.addup,
                        lasted:xrh.lasted
                    })
                }
            },
            error:function(){}
        })
    },
    takeClick:function () {
        var ap = document.getElementById('addup'),
            allCash = document.getElementById('allCash');
        allCash.value = ap.innerHTML;
    },
    render:function(){
        return (
            <div className="takeMoney">
                <div className="titwrap">
                    <ul>
                        <h4 className="common">提现金额</h4>
                        <li className="common clearfix">
                            <i className="iconfont pull-left">
                                &#xe602;
                            </i>
                            <input id="allCash" className="pull-left" type="tel" placeholder="请输入提现金额"/>
                        </li>
                        <li className="nowCash common clearfix">
                            <span className="pull-left">当前余额：<b id="addup" ref="bAddup">{this.state.addup}</b>元</span>
                            <span className="pull-right allTake" onClick={this.takeClick}>全部提现</span>
                        </li>
                    </ul>
                </div>
                <a className="base-btn">提现</a>
                <p className="p-detail">本月还可以提现<b>{this.state.lasted}</b>次</p>

                <ul className="rules">
                    <h4>提现规则</h4>
                    <p>1.为了更好的保障您的资金安全，提现需要审核，审核在两个工作日内完成</p>
                    <p>2.请尽量完善您的微信资料，完成微信实名认证，以享受更高的微信提现额度</p>
                    <p>3.每月可提现3次，满一元可申请提现</p>
                    <p>4.审核结果请留意公众号消息</p>
                </ul>
                <Navbar/>
            </div>
        )
    }
})
module.exports = Shark;