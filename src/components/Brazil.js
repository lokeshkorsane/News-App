import React from 'react'
import News from './News'

const Brazil = () => {
  return (
    <>
    <h3 className='text-center'>Brazil</h3>
    <News url="https://newsapi.org/v2/top-headlines?country=br&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Brazil