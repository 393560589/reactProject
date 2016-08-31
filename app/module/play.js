/**
 * Created by Administrator on 2016/8/29.
 */
var React =require('react');
var reqwest = require('reqwest');


//module
var Navbar = require('../module/navbar');

var Play = React.createClass({
    getInitialState:function(){
      return {
            ck:false,
            item:null
      }
    },
    render:function(){
        var shake=4000,
            last_update=0,
            count=0,
            x=0,y=0,z=0,last_x=0,last_y=0,last_z=0;

        if(window.DeviceMotionEvent){
            window.addEventListener("devicemotion",deviceMotionHandler,false);
        }else{
            alert("本设备不支持devicemotion事件");
        }
        function deviceMotionHandler(eventData){
            var _this = this;
            var acceleration = eventData.accelerationIncludingGravity,
                currTime=new Date().valueOf(),
                diffTime=currTime-last_update;

            if(diffTime>100){
                last_update=currTime;
                x=acceleration.x;
                y=acceleration.y;
                z=acceleration.z;
                var speed=Math.abs(x+y+z-last_x-last_y-last_z)/diffTime*10000
                if(speed>shake){
                    var id = document.getElementById('playHappy');
                    console.log(id)
                    function move(game){
                        this.game=id
                    }
                    var load = new move();
                    move.prototype.add = function(){
                        this.game.className='move'
                    }
                    move.prototype.remove = function(){
                        this.game.className = ''
                    }
                    id.onclick = function(){
                        load.add();
                        setTimeout(load.remove,5000);
                    }
                    reqwest({
                        url:'../json/tsconfig.json',
                        method:'get',
                        type:'json',
                        success:function(xrh){
                            if(xrh.code){
                                alert('hehe')
                                _this.setState({
                                    item: xrh
                                })
                            }
                        },
                        error:function(){}
                    })
                }
                last_x = x;
                last_y = y;
                last_z = z;
            }
        }
        return (
            <div className="playHappy" ref="playHappy" id="playHappy">
                <div className="backGame">
                    <div id="game">

                    </div>
                </div>

                <Navbar />
            </div>
        )
    }
})

module.exports = Play;