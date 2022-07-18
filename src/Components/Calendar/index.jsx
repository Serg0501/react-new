import React, { Component } from 'react';
import {format,add} from 'date-fns';

export default class Calendar extends Component {
    constructor(props) {
      super(props);
      this.state = {
         day: new Date()
      }
    }
    addDays = options => {
        const newDay = add(this.state.day, options);
        this.setState({day: newDay});
    }
  render() {
    const {day} = this.state;
    return (
      <>
        <p>{format(new Date(), 'EEEE LLLL yyyy DDDD')}</p>
        <p>{format(new Date(), 'yyy LLL dd')}</p>
        <p>{format(new Date(), 'do MMM yy')}</p>
        <p>{format(day, 'do MMM yy')}</p>
        <button onClick={() => this.addDays({days: 1})}>Add 1 day</button>
      </>
    )
  }
}

