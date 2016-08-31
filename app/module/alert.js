/**
 * Created by Administrator on 2016/8/30.
 */
var React = require('react');
var {Link} = require('react-router')

var Alertsweet = React.createclass({
    render:function(){
        return (
            <div className="alertbackground">
                <div className="alertgift">
                    <h4>恭喜您获得</h4>
                    <div className="giftimg">
                        <img src={this.props.item[0].imgsrc} alt="中奖礼物" />
                    </div>
                    <p>{this.props.item[0].describe}</p>
                    <a Link={this.props.item[0].link} className="base-btn">确定</a>
                </div>
            </div>
        )
    }
})