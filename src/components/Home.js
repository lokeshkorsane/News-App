import React from 'react'
import News from './News'

const Home = () => {
  return (
    <News url="https://newsapi.org/v2/top-headlines?country=in&apiKey=0894111e580846cf80c553cc90b39958"/>
  )
}

export default Home