import React, { Component } from 'react'
export default class HelloClass extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {name, surname} = this.props;
    return (
        <>
            <p>Кто там? {name} {surname}!</p>
        </>
    )
  }
}