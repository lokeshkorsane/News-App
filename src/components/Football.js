import React from 'react'
import News from './News'

const Football = () => {
  return (
    <>
    <h3 className='text-center'>Football</h3>
    <News url="https://newsapi.org/v2/top-headlines?q=football&apiKey=0894111e580846cf80c553cc90b39958" heading="Football"/>
    </>
  )
}

export default Football