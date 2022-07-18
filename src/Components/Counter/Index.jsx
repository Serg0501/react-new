import React, { Component } from 'react'
import InnerCounter from '../InnerCounter';
import PropTypes from 'prop-types';

export default class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
         value: 0,
      };
    }

    inc = () => {
        const {value} = this.state;
        this.setState({value: value+1});
    }

    dec = () => {
        const {value} = this.state;
        this.setState({value: value-1});
    }

    add1toStep = () => {
        const {step} = this.state;
        this.setState({step: step +1});
    }

    NewValueHandler = (newValue) => {
      this.setState({value: newValue});
    }

    render() {
      const{value}=this.state;
    return (
      <>
        <h2>Counter {this.state.value}</h2>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <InnerCounter 
        value={this.state.value}
        NewValueHandler={this.NewValueHandler}
        />
      </>
    )
  }
}

Counter.propTypes = {
  step: PropTypes.number
}

Counter.defaultProps = {
  step: 1,
}