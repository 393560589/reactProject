/**
 * Created by Administrator on 2016/8/29.
 */
var React =require('react');
var reqwest = require('reqwest');

//module
var Navbar = require('../module/navbar');
var shake=4000,
    last_update=0,
    x=0,y=0,z=0,last_x=0,last_y=0,last_z=0;

var Play = React.createClass({
    componentDidMount:function(){
       if(window.DeviceMotionEvent){
            window.addEventListener("devicemotion",deviceMotionHandler,false);
        }
        var anBoat = document.getElementById('animateBoat');
        var alertBlock = document.getElementById('alertBlock');
        var close = document.getElementById('close');
        var chanceNum =document.getElementById('chanceNum');

        function boatObj(){
            this.a;
            this.b;
        }
        boatObj.prototype.appear=function () {
            setTimeout(function(){
                alertBlock.style.display = 'block';
                this.a = parseInt(chanceNum.innerHTML);
                this.a--;
                this.b =this.a;
                if(this.b > 0){
                    chanceNum.innerHTML = this.b;
                }else{
                    chanceNum.innerHTML = 0;
                }
            },2500)
        }
        boatObj.prototype.disappear = function () {
            alertBlock.style.display = 'none'
        }
        close.onclick = function () {
            boat.disappear()
            anBoat.className = 'animationBoat';
        }
        var boat = new  boatObj();//不管干嘛，先撸个类。做构造回头用

        function deviceMotionHandler(event){
            var acceleration = event.accelerationIncludingGravity,
                currTime=new Date().valueOf(),
                diffTime=currTime-last_update;
            if(diffTime>100){
                last_update=currTime;
                x=acceleration.x;
                y=acceleration.y;
                z=acceleration.z;
                var speed=Math.abs(x+y+z-last_x-last_y-last_z)/diffTime*10000
                if(speed>shake){
                    if(parseInt(chanceNum.innerHTML) == 0 ){
                        alert('没机会了还玩，傻吊')
                        return
                    }
                    boat.appear();
                    anBoat.className = 'animationBoat boatmove';
                }
                last_x = x;
                last_y = y;
                last_z = z;
            }
        }
    },
    render:function(){
        return (
            <div className="playGame">
                <div className="containerWrap">
                    <div className="animationBoat" id="animateBoat">
                        <div className="toop">
                <p className="rotateTran">
                    <span>摇动频幕，领取红包</span><br/>
                    <span>今天你还有<b id="chanceNum">3</b>次机会</span>
                </p>
                        </div>
                    </div>
                </div>
                <div className="alertbackground" id="alertBlock" style={{display: 'none'}}>
                    <div className="conWrap">
                        <div className="conta">
                            <a href="" className="imgbox">
                                <img src="img/gift/alezl.jpg" alt=""/>
                            </a>
                            <ul className="logoMon">
                                <li className="accId">
                                    <img src="" alt=""/>
                                </li>
                                <li>
                                    天天挂传奇的红包
                                </li>
                                <li style={{fontWeight: 'bold',color:' #ff3334',fontSize:' 0.9rem'}}>
                                    0.05元
                                </li>
                            </ul>
                            <a href="" className="btn" id="btn">立即提现</a>
                        </div>
                    </div>
                    <div className="againGame" id="close">
                        再摇一次
                    </div>
                </div>
                <Navbar/>
            </div>
        )
    }
})

module.exports = Play;