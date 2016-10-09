/**
 * Created by Administrator on 2016/9/14.
 */
var React =require('react');
var {Router,Route,Link} = require('react-router');

var img=[
    'img/01.jpg',
    'img/02.jpg',
    'img/01.jpg',
    'img/02.jpg'
]
var index =[];

for(var i=0,len = img.length-1;i<=len;i++){
    index.push(i)
}

var Slider = React.createClass({
    getInitialState: function () {
      return {
          slider:null,
      }
    },
    componentDidMount:function () {
       var slider = document.getElementById('Slider')
        window.addEventListener('load',this.load)
    },
    load:function(){

        document.addEventListener('touchstart',this.touch,false);
        document.addEventListener('touchmove',this.touch,false);
        document.addEventListener('touchmove',this.touch,false);
    },
    touch:function(event){
        
        var event = window.event || event;
        if(event.type == 'touchstart'){
            console.log(event.touches[0].clientX)
        }
        if(event.type == 'touchmove'){
            console.log(event.changedTouches[0].clientY)
        }
        if(event.type == 'touchend'){
            console.log(event.touches[0].clientY)
        }
    },
    render:function () {
        var showbtn = [];
        for(var i=0;i<index.length;i++){
            showbtn.push(
                <li id={i}>

                </li>
            )
        }
        return (
            <div className="Slider" id="Slider" ref='slider'>
                <div className="sliderbox">
                    <ul className="imgbox" id="animWrap" style={{left:'0'}}>
                        {
                            img.map(function (item) {
                                return (
                                    <li><Link><img src={item} alt=""/></Link></li>
                                )
                            })
                        }
                    </ul>
                    <ul className="sliderBtn" id="sliderBtn">
                        {showbtn}
                    </ul>
                    <a id="prve">左边</a>
                    <a id="next">右边</a>
                </div>
            </div>
        )
    }
});


module.exports = Slider;