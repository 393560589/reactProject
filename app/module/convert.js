/**
 * Created by Administrator on 2016/9/11.
 */
var React = require('react');

var reqwest = require('reqwest');

var Convert = React.createClass({
    getInitialState:function () {
      return {
          num:1,
          phone:10000,
      }
    },
    cartClick:function () {
      var numVal = document.getElementById('howmany');
            if(numVal.value>1){
                numVal.value--
            }else{
                numVal.value = 1
            }
        this.setState({
            num:numVal.value
        })
    },
    addClick:function () {
        var numVal = document.getElementById('howmany');
        numVal.value++
        this.setState({
            num:numVal.value
        })
    },
    componentDidMount:function () {
        reqwest({
            url:'./json/terrify.json',
            method:'get',
            type:'json',
            success:function(xrh){

            }
        })
    },
    render:function () {
        return (
            <div className="convert">
                <h2 className="CustomerPhone format">
                    您的手机号码
                </h2>
                <div className="format clearfix phoneCon">
                    <span className="pull-left">{this.state.phone}</span>

                    <i className="pull-right iconfont">
                        &#xe610;
                    </i>

                    <span className="pull-right">绑定账号</span>

                </div>
                <ul className="formSubmit">
                    <li className="clearfix">
                        <p>单价</p>
                        <span>1000积分</span>
                    </li>
                    <li className="clearfix">
                        <p>数量</p>
                        <div className="pull-right numBalance">
                            <i className="iconfont commonlist cart" onClick={this.cartClick}>
                                &#xe612;
                            </i>

                            <div className="commonlist">
                                <input id="howmany" type="tel" value={this.state.num} />
                            </div>

                            <i className="iconfont commonlist add" onClick={this.addClick}>
                                &#xe611;
                            </i>
                        </div>
                    </li>
                    <li className="clearfix">
                        <p>总价</p>
                        <span className="yellow">1000积分</span>
                    </li>
                    <li className="clearfix">
                        <p>持有积分</p>
                        <span className="yellow">2000积分</span>
                    </li>
                    <li className="clearfix">
                        <p>兑换话费</p>
                        <span>10元</span>
                    </li>
                </ul>
                <div className="format">
                    <a href="" className="abtn">
                        立即兑换
                    </a>
                </div>

                <a className="explain" href="">
                    话费兑换说明
                </a>
            </div>
        )
    }
})
module.exports = Convert;