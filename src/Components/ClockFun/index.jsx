import React, {useState, useEffect} from 'react'

export default function ClockFun(props) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    /*
    const next = () => {
        setTime(time + 1);
    }

    const start = () => {
        setIsRunning(true);
        timerId = setInterval(next, 1000);    
    }

    const stop = () => {
        clearInterval(timerId);
        timerId = null;
        setTime(0);
    } 
    */
    const reset = () => {
        setTime(0);
    }
    
    useEffect (() => {
        if(isRunning){
            const timerId = setInterval(() => {setTime(time + props.step)}, 1000)
            return () => {
                clearInterval(timerId);
            }
        }
    }, [time, isRunning]);


  return (
    <>
        <h1>{time}</h1>
        <button onClick={() => setIsRunning(true)}>start</button>
        <button onClick={() => setIsRunning(false)}>stop</button>
        <button onClick={reset}>reset</button>
    </>
  )
}

