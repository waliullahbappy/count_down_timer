import React from 'react'
import Digit from './DigitComponent/Digit'

const CountDown = (props) => {
  return (
    <>
    <div className='d-flex '>
    <Digit color='green' value={props.time.min} />
    <Digit color='orange' value={props.time.sec}  />
    <Digit color='blue' value={props.time.mili}  />
    </div>
    </>
    
  )
}

export default CountDown