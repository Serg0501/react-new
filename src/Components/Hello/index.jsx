import React from 'react';
import './Hello.css';

export default function Hello(props) {
    const {name,surName} = props;
  return (
    <>
        <p className='contHR'>кто вы?{name} {surName}</p>
    </>
  )
}


