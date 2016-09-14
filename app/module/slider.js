/**
 * Created by Administrator on 2016/9/14.
 */
var React =require('react');

var Slider = React.createClass({
    getInitialState:function () {
      return {
          movebox:null,//移动的盒子
          isanmite:false,//判断动画
          wrapWidth:16,//盒子总宽度16为基本
          imgmove:16,//盒子走势
          start:0,//开始的left值
      }
    },
    componentDidMount:function () {

        var animWrap = document.getElementById('animWrap');
        animWrap.style.width = (this.state.wrapWidth) * (animWrap.children.length)+'rem';//盒子的总宽度
        var Wrap = parseInt(animWrap.style.width)
        this.setState({
            movebox:animWrap,
            wrapWidth: Wrap
        })
    },
    animationAcheive:function (offset) {
        this.state.movebox.style.left =this.state.start +offset+'rem';
        var start = parseInt(this.state.movebox.style.left);
        this.setState({
            start:start
        })
        if(start>0){
            this.state.movebox.style.left = -(this.state.wrapWidth-16)+'rem'
            this.setState({
                start:-(this.state.wrapWidth-16)
            })
        }
        if(start<-(this.state.wrapWidth-16)){
            this.state.movebox.style.left = 0
            this.setState({
                start:0
            })
        }
    },
    leftMove:function(){
        this.animationAcheive(this.state.imgmove)
    },
    rightMove:function () {
        this.animationAcheive(-this.state.imgmove)
    },
    render:function () {
        return (
            <div className="Slider">
                <div className="sliderbox">
                    <ul className="imgbox" id="animWrap" style={{left:'0'}}>
                        <li><a href=""><img src="img/01.jpg" alt=""/></a></li>
                        <li><a href=""><img src="img/02.jpg" alt=""/></a></li>
                        <li><a href=""><img src="img/01.jpg" alt=""/></a></li>
                        <li><a href=""><img src="img/02.jpg" alt=""/></a></li>
                        <li><a href=""><img src="img/01.jpg" alt=""/></a></li>
                        <li><a href=""><img src="img/02.jpg" alt=""/></a></li>
                    </ul>
                    <ul className="sliderBtn">
                        <li className="on"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <a id="prve" onClick={this.leftMove}>左边</a>
                    <a id="next" onClick={this.rightMove}>右边</a>
                </div>
            </div>
        )
    }
})
module.exports = Slider;