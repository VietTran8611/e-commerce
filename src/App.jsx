import { useState } from 'react'

import { Nav } from './components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
import { Main } from './components/Main/Main'
import { Banner } from './components/Banner/Banner'
import { Plans } from './components/Plans/Plans'
import { Rating } from './components/Rating/Rating'
import { RatingTitle } from './components/Rating/RatingTitle'
import { FAQ } from './components/FAQ/FAQ'
import { Footer } from './components/Footer/Footer'


function App() {


  return (
    <>
      <Nav />
      <Hero />
      <Main />
      <Banner />
      <Plans />
      <RatingTitle />
      <Rating />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
