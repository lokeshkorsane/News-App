import React from 'react'
import News from './News'

const Technology = () => {
  return (
    <>
    <h3 className='text-center'>Technology</h3>
    <News url="https://newsapi.org/v2/top-headlines?category=technology&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Technology