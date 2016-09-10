var React = require('react');
var {Router,Route,Link} = require('react-router');


var item = [
    {
        item:'摇一摇',
        Link:'/play'
    },
    {
        item:'提现',
        Link:'/play'
    },
    {
        item:'账户',
        Link:'/play'
    }
]
var Navbar = React.createClass({
    render:function(){
        return (
            <div className="fixednav">
                <ul className="clearfix">
                    <li>
                        <Link to='/play'>
                            <i className="iconfont">
                                &#xe603;
                            </i>
                            摇一摇
                        </Link>
                    </li>
                    <li>
                        <Link to='/cash'>
                            <i className="iconfont">
                                &#xe604;
                            </i>
                            提现
                        </Link>
                    </li>
                    <li>
                        <Link to='/exchange'>
                            <i className="iconfont">
                                &#xe605;
                            </i>
                            积分
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <i className="iconfont">
                                &#xe605;
                            </i>
                            账户
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
})
module.exports = Navbar;
