import React from 'react'
import News from './News'

const Germany = () => {
  return (
    <>
    <h3 className='text-center'>Germany</h3>
    <News url="https://newsapi.org/v2/top-headlines?country=de&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Germany