import React from 'react'
import { HeroSection } from './_Components/Hero'
import AboutSection from './_Components/About'
import TestimonialsSection from './_Components/Testimonials'
import FinalCTA from './_Components/FinalCTA'

const page = () => {
  return (
    <div className='w-full h-full'>
      <div>
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div>
        <TestimonialsSection />
      </div>
      <div>
        {/* <ServicesSection /> */}
      </div>
      <div>
        <FinalCTA />
      </div>
    </div>
  )
}

export default page