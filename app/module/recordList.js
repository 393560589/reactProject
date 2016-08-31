/**
 * Created by Administrator on 2016/8/29.
 */
var React =require('react');

var RecordList = React.createClass({
    render:function(){
        return (
            <ul>
                {
                    this.props.item.map(function(item){
                        return(
                                <li className="list clearfix">
                                    <div className="pull-left titTime">
                                        <h4>{item.list.tit}</h4>
                                        <p>{item.list.date}</p>
                                    </div>
                                    <div className="pull-right numWho">
                                        <h4>{item.list.cash}元</h4>
                                        <p>{item.list.people}</p>
                                    </div>
                                </li>
                            )
                    })
                }

            </ul>
        )
    }
})
module.exports = RecordList