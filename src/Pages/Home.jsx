import React from 'react'

import {Footer, Gallery, Googlereviews, Header, Hero, Youtube, Imagecarousel, Intro} from '../Components';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Hero />
      <Imagecarousel />
      <Intro />
      <Youtube />
      <Googlereviews />
      <Footer />

    </div>
  )
}

export default Home