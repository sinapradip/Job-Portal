import React from 'react'
import { Navbar } from './shared'
import { HeroSection } from './HeroSection'

export default function Home() {
  return (
    <>
     <div>
        <Navbar />
        <HeroSection />
        {/* <CategoryCarousel />
        <LatestJobs />
        <Footer /> */}
     </div>
    </>
  )
}
