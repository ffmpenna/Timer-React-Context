import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

function MusicInput() {
    const { handleChangeMusic, musicUrl } =  useContext(MyContext)
  return (
    <div className='teste'>
    <input className='music-input' onChange={handleChangeMusic} value={musicUrl} name='musicUrl' type='text' placeholder='URL do Youtube...'/>
    </div>
  )
}

export default MusicInput