var React = require('react');
var {Link} = require('react-router');


//module
var Navbar = require('./navbar');
var  reqwest = require('reqwest');


var Account = React.createClass({
    getInitialState:function(){
      return {xrh:null ,loading:false}
    },
    componentDidMount:function(){
        var _this = this;
        reqwest({
            url:'./json/terrify.json',
            method:'get',
            type:'json',
            success:function(resp){
                if(_this.isMounted()){
                    _this.setState({
                        loading:true,
                        xrh:resp
                    })
                }

            },
            error:function(){}
        })
    },
    render:function() {
        var _this = this;
        if(_this.state.loading){
             var res = _this.state.xrh;
             var Resps = res.list.map(function(item){
                 var error = item.type == 0 ? 'pull-right numWho':'pull-right numWho error';
                 return (
                         <li className="list clearfix">
                             <div className='pull-left titTime'>
                                 <h4>{item.tit}</h4>
                                 <p>{item.date}</p>
                             </div>
                             <div className={error}>
                                 <h4>{item.cash}元</h4>
                                 <p>{item.people}</p>
                             </div>
                         </li>
                 )
         });
         };
        return (
            <div className="record">
                <div className="money">
                    <div className="wechatImg">
                        <img src="" alt="xx的头像"/>
                    </div>
                    <h4 className="myBalanceTit mix">
                        xx的余额
                    </h4>
                    <p className="mix myBalanceNum">
                        <b>1.00</b>元
                    </p>
                    <span className="addUp">
                         累计已提现 0.00 元
                    </span>
                    <ul className="btnbox clearfix">
                        <li className="base-btn credit">
                            <Link to='/cash'>
                                <i className="iconfont"></i>
                                提现
                            </Link>
                        </li>
                        <li className="base-btn cash">
                            <Link to='/mo'>
                                <i className="icnonfont"></i>
                                夺宝(敬请期待)
                            </Link>
                        </li>
                    </ul>
                </div>
                <h4 className="detailTit">收支详情</h4>
                <div className="record_detail">
                    <ul>
                        {Resps}
                    </ul>
                </div>
                <Navbar />
            </div>
        )
    }
})

module.exports = Account;