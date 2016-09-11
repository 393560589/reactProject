/**
 * Created by Administrator on 2016/9/10.
 */
var React = require('react');
var {Link,Router,Route} =require('react-router');
var reqwest = require('reqwest');



var Prize = React.createClass({
    getInitialState:function(){
        return {
            list:null,
            check:false
        }
    },
    componentDidMount:function(){
        var _this = this;
        reqwest({
            url:'./json/prize.json',
            method:'get',
            type:'json',
            success:function(xrh){
                if(xrh.code){
                    if(_this.isMounted()){
                        _this.setState({
                            check:true,
                            list:xrh.list
                        })
                    }
                }
            },
            error:function(){}
        })
    },
    render:function(){
        if(this.state.check){
            var Resp = this.state.list.map(function(item){
                    return (
                        <li>
                            <div className="monWrap">
                                <i className="iconfont">
                                    &#xe60d;
                                </i>
                                {item.rmb}
                            </div>
                            <h4>
                                {item.rmb}元短信
                            </h4>
                            <p>
                                <i className="iconfont">
                                    &#xe60c;
                                </i>
                                {item.worth}
                            </p>
                        </li>
                    )
                })
            }
        return (
            <div className="Market">
                <div className="titTop">
                    <i className="iconfont">
                        &#xe60f;
                    </i>
                    可用积分：<b>1206</b>
                    <a href="" className="pull-right takeRe">
                        兑换记录
                    </a>
                </div>
                <ul className="section clearfix">
                    {Resp}
                </ul>
                <a className="abtn" href="">
                    兑换记录
                </a>
            </div>
        )
    }
})
module.exports = Prize;