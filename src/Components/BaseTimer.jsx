import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import NumberInput from './NumberInput';

function BaseTimer() {
  const { timeLeft } = useContext(MyContext)

  return (
    <div className='timer-container'>
      <NumberInput type='minutes'/>
      <div className='base-timer'>
        <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g className="base-timer__circle">
            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
            <path
        id="base-timer-path-remaining-minutes"
        strokeDasharray="283"
        className="base-timer__path-remaining"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
          </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">
                {timeLeft.minutes}
            </span>
      </div>
      <div className='base-timer'>
        <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g className="base-timer__circle">
            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
            <path
        id="base-timer-path-remaining-seconds"
        strokeDasharray="283"
        className="base-timer__path-remaining"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
          </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">
                {timeLeft.seconds}
            </span>
      </div>
      <NumberInput type='seconds'/>
    </div>
  )
}

export default BaseTimer