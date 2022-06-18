import React from 'react'
import News from './News'

const WorldAll = () => {
  return (
    <>
    <h3 className='text-center'>All</h3>
    <News url="https://newsapi.org/v2/top-headlines?q=world&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default WorldAll