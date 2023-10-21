import React from 'react'
import Slider from './Slider'

function Frame2() {
  return (
    <div className='relative flex flex-col items-center bg-frame2 bg-no-repeat bg-cover bg-center min-h-screen xl:min-h-screen'>
      <div className='absolute top-0' id='frame2'></div>
      <h1 className='text-red-500 uppercase text-5xl mb-5 mt-20 text-center'>Valorant Vietnamese Award 2022</h1>
      <div className='w-[90%] lg:w-[800px]'>
        <Slider/>
      </div>
    </div>
  )
}

export default Frame2