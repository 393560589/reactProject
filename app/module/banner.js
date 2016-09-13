
var React = require('react');



var Slide = React.createClass({
    displayName: "Slide",

    render: function render() {

        var background = this.props.background;
        var text = this.props.text;
        var link = this.props.link;
        var active = this.props.active;

        var slideStyle = {
            backgroundImage: "url(" + background + ")"
        };

        return React.createElement(
            "div", {
                className: "slider__slide",
                "data-active": active,
                style: slideStyle
            },
            React.createElement(
                "div", {
                    className: "slider__slide__text"
                },
                React.createElement(
                    "a", {
                        href: link
                    },
                    text
                )
            )
        );
    }
});

var Slider = React.createClass({
    displayName: "Slider",

    getInitialState: function getInitialState() {
        return {
            slides : [{
                background: "https://ununsplash.imgix.net/photo-1434828927397-62ea053f7a35?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050",
                text: "",
                link: ""
            }, {
                background: "https://images.unsplash.com/photo-1434394673726-e8232a5903b4?q=80&fm=jpg&s=b154bdf22a4885c8e2dd1b845c5fe996",
                text: "Mountains",
                link: "https://unsplash.com/aleskrivec"
            }, {
                background: "https://images.unsplash.com/photo-1432691301971-c8b920198bd7?q=80&fm=jpg&s=d6b5970179cd2bc77c3b56165da56f80",
                text: "Shore",
                link: "https://unsplash.com/intrepid"
            }],
            activeSlide: 0
        };
    },

    nextSlide: function nextSlide() {
        var slide = this.state.activeSlide + 1 < this.state.slides.length ? this.state.activeSlide + 1 : 0;
        this.setState({
            activeSlide: slide
        });
    },

    previousSlide: function previousSlide() {
        var slide = this.state.activeSlide - 1 < 0 ? this.state.slides.length - 1 : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    },

    render: function render() {
        var _this = this;

        var slides = this.state.slides;
        console.log(this.state.slides)
        return React.createElement(
            "div", {
                className: "slider"
            },
            slides.map(function(slide, index, array) {
                return React.createElement(Slide, {
                    background: slide.background,
                    text: slide.text,
                    active: index === _this.state.activeSlide,
                    link: slide.link
                });
            }),
            React.createElement(
                "div", {
                    className: "slider__next",
                    onClick: this.nextSlide
                },
                React.createElement("i", {
                    className: "fa fa-4x fa-arrow-circle-right"
                })
            ),
            React.createElement(
                "div", {
                    className: "slider__previous",
                    onClick: this.previousSlide
                },
                React.createElement("i", {
                    className: "fa fa-4x fa-arrow-circle-left"
                })
            )
        );
    }
});


var Banner =Slider;
module.exports = Banner;

