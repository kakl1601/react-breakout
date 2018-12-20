import React, { Component } from 'react';
import './../App.css';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';

class Button extends Component {

    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = null;
        this.runTestFunc = this.runTestFunc.bind(this);
    }

    // functions 

    runTestFunc() {
        this.props.sendTestFunc();
    }

    componentDidMount() {
        this.myTween =  new TimelineLite({repeat: 10, yoyo: true}) 
                        .to(this.myElement, .5, {x: 20})
                        .to(this.myElement, .5, {x: 0})
    }

    render() {
        return (
            <div>
            <div ref={div => this.myElement = div}><h4>Animation TEST</h4></div>
            <button onClick={this.runTestFunc}>
                <h3>Start</h3>
            </button>
            </div>
        );
    }

}

export default Button;