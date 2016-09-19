/**
 * Created by Administrator on 2016/9/14.
 */
var React =require('react');

var img=[
    'img/01.jpg',
    'img/02.jpg',
    'img/01.jpg',
    'img/02.jpg'
]
var index =[];
var id=0;
var interval = 1000;
var timer;
for(var i=0,len;i<=img.length-1;i++){
    index.push(i)
}

var Slider = React.createClass({
    getInitialState:function () {
      return {
          buttons:null,//小圆点这种
          movebox:null,//移动的盒子
          isanmite:false,//判断动画
          wrapWidth:16,//盒子总宽度16为基本
          imgmove:16,//盒子走势
          start:0,//开始的left值
      }
    },
    componentDidMount:function () {
        var animWrap = document.getElementById('animWrap');
        var buttons = document.getElementById('sliderBtn').getElementsByTagName('li');
        animWrap.style.width = (this.state.wrapWidth) * (animWrap.children.length)+'rem';//盒子的总宽度
        var Wrap = parseInt(animWrap.style.width);
        /*;*/buttons[id].className='on'
        this.setState({
            movebox:animWrap,
            wrapWidth: Wrap,
            buttons:buttons
        });
        this.play()
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
        console.log(id)
        if(id<=0){
            id=img.length-1
        }else{
            id--
        }

        this.animationAcheive(this.state.imgmove);
        this.showButton()
    },
    rightMove:function () {
        if(id>=img.length-1){
            id = 0
        }else{
            id++
        }
        this.animationAcheive(-this.state.imgmove);
        this.showButton()
    },
    showButton:function () {
        for(var i=0;i<this.state.buttons.length;i++){
            if(this.state.buttons[i].className=='on'){
                this.state.buttons[i].className ='';
                break
            }
        }
        this.state.buttons[id].className='on';
    },
    btnClick:function (e) {
        var _this = e.target,
        index = _this.getAttribute('id');
        if(_this.className=='on'){
            return
        }
        var offset = -16*(index-id);
        this.animationAcheive(offset);
        id = index;
        this.showButton()
    },
    play:function () {
        var _this_ = this
        timer = setTimeout(function(){
            _this_.rightMove();
            _this_.play()
        },interval)
    },
    stop:function () {
        clearTimeout(timer)
    },
    render:function () {
        var showbtn = [];
        for(var i=0;i<index.length;i++){
            showbtn.push(
                <li id={i} onClick={this.btnClick}>

                </li>
            )
        }
        return (
            <div className="Slider">
                <div className="sliderbox" onMouseOut={this.play} onMouseMove={this.stop}>
                    <ul className="imgbox" id="animWrap" style={{left:'0'}}>
                        {
                            img.map(function (item) {
                                return (
                                    <li><a href=""><img src={item} alt=""/></a></li>
                                )
                            })
                        }
                    </ul>
                    <ul className="sliderBtn" id="sliderBtn">
                        {showbtn}
                    </ul>
                    <a id="prve" onClick={this.leftMove}>左边</a>
                    <a id="next" onClick={this.rightMove}>右边</a>
                </div>
            </div>
        )
    }
});


module.exports = Slider;