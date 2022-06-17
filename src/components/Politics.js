import React from 'react'
import News from './News'

const Politics = () => {
  return (
    <>
    <h3 className='mt-3 mx-3'>Politics</h3>
    <News url="https://newsapi.org/v2/top-headlines?q=politics&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Politics