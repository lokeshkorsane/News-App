import React from 'react'
import News from './News'

const Turkey = () => {
  return (
    <>
    <h3 className='text-center'>Turkey</h3>
    <News url="https://newsapi.org/v2/top-headlines?country=tr&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Turkey