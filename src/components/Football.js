import React from 'react'
import News from './News'

const Football = () => {
  return (
    <>
    <h4 className='mt-3 mx-3'>Football</h4>
    <News url="https://newsapi.org/v2/top-headlines?q=football&apiKey=0894111e580846cf80c553cc90b39958" />
    </>
  )
}

export default Football