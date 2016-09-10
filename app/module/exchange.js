/**
 * Created by Administrator on 2016/9/8.
 */
var React = require('react');
var {Router,Route,Link} = require('react-router');


//module
var Navbar = require('../module/navbar');


var item = [
    {
        class:'phoneMon iconfont pull-left',
        icon: <pre className="iconfont">&#xe60d;</pre>,
        name:'话费',
        link:'/prize'
    },
    {
        class:'inter iconfont pull-left',
        icon:<pre className="iconfont">&#xe608;</pre>,
        name:'流量',
        link:'/prize'
    },
    {
        class:'message iconfont pull-left',
        icon:<pre className="iconfont">&#xe60b;</pre>,
        name:'短信',
        link:'/prize'
    },
    {
        class:'traffic iconfont pull-left',
        icon:<pre className="iconfont">&#xe60e;</pre>,
        name:'积分夺宝',
        link:'/prize'
    },{
        class:'more iconfont pull-left',
        icon:<pre className="iconfont">&#xe606;</pre>,
        name:'更多',
        link:'/prize'
    }
]
var Exchange = React.createClass({
    render:function(){
        return (
            <div className="integral">
                <div className="titleWrap">
                    <p className="commonLeft commonP">
                        <i className="iconfont">
                            &#xe607;
                        </i>
                        18042317468
                    </p>
                    <p className="commonLeft commonP">剩余积分</p>
                    <h4 className="havInter">
                        <strong>1260</strong>分
                    </h4>
                    <ul className="classify clearfix">
                        <li className="commonLeft">
                            <p>上月新增</p>
                            <h2>340</h2>
                        </li>
                        <li className="commonLeft">
                            <p>年底到期</p>
                            <h2>0</h2>
                        </li>
                    </ul>
                </div>
                <div className="listCount">
                    <div className="CountTit clearfix">
                        <p className="pull-left">
                            积分兑换
                        </p>
                        <a className="btnRecode pull-right" href="">
                            兑换记录
                        </a>
                    </div>
                    <ul>
                        {
                            item.map(function(item){
                                return (
                                    <Link className="listType clearfix" to={item.link}>
                                        <i className={item.class}>
                                            {item.icon}
                                        </i>
                                        <p className="pull-left">{item.name}</p>
                                        <span className="iconfont pull-right">
                                            &#xe60a;
                                        </span>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
                <Navbar />
            </div>
        )
    }
})
module.exports = Exchange;