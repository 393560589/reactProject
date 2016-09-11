/**
 * Created by Administrator on 2016/8/29.
 */
var React =require('react');
var reqwest = require('reqwest');

//module
var Navbar = require('../module/navbar');
var Alert = require('../module/alert')

var shake=4000,
    last_update=0,
    x=0,y=0,z=0,last_x=0,last_y=0,last_z=0;

var Play = React.createClass({
    getInitialState:function(){
      return {
            ck:false,
            item:{
                img:null,
                name:null,
                describe:null
            }
      }
    },
   /* handleClick:function(newState){
        this.test();
        console.log(this.state.ck)
    },*/
    componentDidMount:function(){
       if(window.DeviceMotionEvent){
            window.addEventListener("devicemotion",this.deviceMotionHandler,false);
        }
    },

    test:function(){
        var _this = this;
        reqwest({
            url:'./json/tsconfig.json',
            method:'get',
            type:'json',
            success:function(xrh){
                var a = Math.ceil(Math.random()*8);//判断第几个奖品
                if(_this.isMounted()){
                    _this.setState({
                        ck:true,
                        item:xrh.gift[a]
                    })
                    alert(_this.state.ck)
                }
            },
            error:function(){}
        })
    },
    deviceMotionHandler:function(event){
        /*if(this.state.ck){
            return alert('您已经摇过了')
        }*/
        var acceleration = event.accelerationIncludingGravity,
            currTime=new Date().valueOf(),
            diffTime=currTime-last_update;
        var _this = this;
        if(diffTime>100){
            last_update=currTime;
            x=acceleration.x;
            y=acceleration.y;
            z=acceleration.z;
            var speed=Math.abs(x+y+z-last_x-last_y-last_z)/diffTime*10000
            if(speed>shake){
                var id = React.findDOMNode(this.refs.game);
                function move(game){
                    this.game = id
                }
                var load = new move();
                move.prototype.add = function(){
                    this.game.className='move'
                }
                move.prototype.remove = function(){
                    this.game.className = ''
                }
                load.add();
                reqwest({
                    url:'../hps/json/tsconfig.json',
                    method:'get',
                    type:'json',
                    success:function(xrh){
                        var a = Math.ceil(Math.random()*8);//判断第几个奖品
                        if(_this.isMounted()){
                            _this.setState({
                                ck:true,
                                item:xrh.gift[a]
                            })
                        }
                    },
                    error:function(){}
                })
                setTimeout(load.remove,5000);
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    },

    render:function(){
        return (
            <div className="playHappy"  id="playHappy">
                <div className="backGame">
                    <div id="game" ref="game">

                    </div>
                </div>
                <Alert imgsrc={this.state.item.img} describe={this.state.item.describe}
                name={this.state.item.name} ck={this.state.ck}
                />
                <Navbar/>
            </div>
        )
    }
})

module.exports = Play;