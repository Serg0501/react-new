import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function CounterFun(props) {
    const [value, setValue] = useState(0);

   const inc = () => {
        setValue (value + props.step);
    }

   const dec = () => {
        setValue (value - props.step);
    }

  return (
   <>
        <h2>Counter {value}</h2>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
   </>
  )
}

CounterFun.prototype = {
    step: PropTypes.number
}


CounterFun.defaultProps = {
    step: 1,
  }