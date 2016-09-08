/**
 * Created by Administrator on 2016/8/30.
 */
var React = require('react');
var {Router,Route,Link} = require('react-router');

var Alertsweet = React.createClass({
    render:function(){
        var  styleObj = this.props.ck ? 'block':'none'
        return (
            <div className="alertbackground" style={{display:styleObj}}>
                <div className="alertgift">
                    <h4>恭喜您获得</h4>
                    <div className="giftimg">
                        <img src={this.props.imgsrc} alt="中奖礼物" />
                    </div>
                    <p>{this.props.describe}</p>
                    <Link to='/cash' className="base-btn">确定</Link>
                </div>
            </div>
        )
    }
})
module.exports = Alertsweet