import React from 'react'
import News from './News'

const Business = () => {
  return (
    <>
    <h3 className='text-center'>Business</h3>
    <News url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Business