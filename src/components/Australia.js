import React from 'react'
import News from './News'

const Australia = () => {
  return (
    <>
    <h3 className='text-center'>Australia</h3>
    <News url="https://newsapi.org/v2/top-headlines?country=au&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Australia