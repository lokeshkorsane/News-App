import React from 'react'
import News from './News'

const France = () => {
  return (
    <>
    <h3 className='text-center'>France</h3>
    <News url="https://newsapi.org/v2/top-headlines?country=fr&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default France