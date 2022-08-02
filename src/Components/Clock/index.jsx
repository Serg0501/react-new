import React, { Component } from 'react'
import require from "hh-mm-ss"

export default class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
         time: 0,
      };
      this.timerId = null;
      this.timeFormat = require('hh-mm-ss')
    }
    
    start = () => {
        if(!this.timerId){
        this.timerId = setInterval(this.next, 1000)
        }    
    }

    next = () => {
        this.setState ({time: this.state.time + 1})
    }

    stop = () => {
        clearInterval(this.timerId);
        this.timerId = null;
    } 

    reset = () => {
        this.setState({time: 0});
    }
    componentDidMount(){
        this.start();
    }
    componentWillUnmount(){
        this.stop();
    }

    render() { 
        const dispTime = this.timeFormat.fromS(this.state.time, 'hh:mm:ss')
    return (
      <>
        <h1>{dispTime}</h1>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </>
    )
  }
}
