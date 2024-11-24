import React from 'react'
import { Navbar } from './shared'
import { CategoryCarousel, HeroSection } from '.'

export default function Home() {
  return (
    <>
     <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        {/* <LatestJobs /> */}
        {/* <Footer /> */}
     </div>
    </>
  )
}
