import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

function StartBtn() {
  const { toggleTimer, isTimerRunning, stopTimer, hasTimerEnded, timeLeft } = useContext(MyContext)
  const startOrPause = isTimerRunning ? 'PAUSE' : 'START'

  const teste = () => {
    if (hasTimerEnded) {
      toggleTimer(!isTimerRunning);
      stopTimer(false);
    } else {
      toggleTimer(!isTimerRunning);
    }
  }

  const teste2 = () => {
    if(timeLeft.minutes < 1 && timeLeft.seconds < 1 && hasTimerEnded)
    return true;
    else return false;
  }
  return (
    <div>
      <button disabled={teste2()}  className='start-btn' onClick={teste}>{startOrPause}</button>
    </div>
  )
}

export default StartBtn