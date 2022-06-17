import React from 'react'
import News from './News'

const Cricket = () => {
  return (
    <>
    <h4 className='mx-3 mt-3'>Cricket</h4>
    <News url="https://newsapi.org/v2/top-headlines?q=cricket&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Cricket