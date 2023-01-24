import React from 'react'
import BaseTimer from '../Components/BaseTimer';
import BaseTimerLabel from '../Components/BaseTimerLabel'
import MusicInput from '../Components/MusicInput';
import YoutubeFrame from '../Components/YoutubeFrame';

function Timer() {
  return (
    <div className='page-container'> 
        <BaseTimer />
        <BaseTimerLabel />
        <MusicInput />
        <YoutubeFrame />     
    </div>
  )
}

export default Timer