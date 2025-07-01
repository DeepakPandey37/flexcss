import React from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Hero from './Hero'
import Midlevel from './Midlevel'
import Tabs from './Tabs'

const Home = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar/>
      <Hero/>
      
        <Midlevel/>
       <Tabs/>
      <Footer/>
    </div>
  )
}

export default Home