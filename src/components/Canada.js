import React from 'react'
import News from './News'

const Canada = () => {
  return (
    <>
    <h3 className='text-center'>Canada</h3>
    <News url="https://newsapi.org/v2/top-headlines?country=ca&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Canada