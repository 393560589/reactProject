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
                img:'1111',
                name:'1111',
                describe:'121212'
            }
      }
    },
    componentDidMount:function(){
        this.test()
        if(window.DeviceMotionEvent){
            window.addEventListener("devicemotion",this.deviceMotionHandler,false);
        }
    },
    test:function(){
        var _this = this;
        reqwest({
            url:'../json/tsconfig.json',
            method:'get',
            type:'json',
            success:function(xrh){
                var a = Math.ceil(Math.random()*8);//判断第几个奖品
                if(_this.isMounted()){
                    _this.setState({
                        item:xrh.gift[a]
                    })
                    console.log(_this.state.item.img)
                }
            },
            error:function(){}
        })
    },
    deviceMotionHandler:function(event){
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
                setTimeout(load.remove,5000);

                var _this = this;
                reqwest({
                    url:'../hps/json/tsconfig.json',
                    method:'get',
                    type:'json',
                    success:function(xrh){
                        var a = Math.ceil(Math.random()*8);//判断第几个奖品
                        if(_this.isMounted()){
                            _this.setState({
                                item:xrh.gift[a]
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
    },

    render:function(){
        return (
            <div className="playHappy"  id="playHappy">
                <div className="backGame">
                    <div id="game" ref="game">

                    </div>
                </div>
                <Alert imgsrc={this.state.item.img} describe={this.state.item.describe}
                name={this.state.item.name}
                />
                <Navbar/>
            </div>
        )
    }
})

module.exports = Play;