import React from 'react'
import Image from 'next/image'
import { HeroSection } from './_Components/Hero'
import AboutSection from './_Components/About'
import TestimonialsSection from './_Components/Testimonials'
import FinalCTA from './_Components/FinalCTA'
import ServicesSection from './_Components/Services'

const page = () => {
  return (
    <div className='w-full h-full'>
      <div>
        <HeroSection />
      </div>
      <div>
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