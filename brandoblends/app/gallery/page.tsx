import React from 'react'
import BeforeAfter from './_components/BeforeAfter'
import { HeroSection } from './_components/Hero'
import GallerySection from './_components/Gallery'
import FinalCTA from '../_Components/FinalCTA'

const page = () => {
  return (
    <div className='w-full h-full'>
        <div>
            <HeroSection />
        </div>
        <div id="about">
            <BeforeAfter />
        </div>
        <div>
            <GallerySection />
        </div>
        <div>
            <FinalCTA />
        </div>
    </div>
  )
}

export default page