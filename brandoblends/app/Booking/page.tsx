import React from 'react'
import BookingSection from './_components/BookingForm'

const page = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-black to-gray-900'>
        <div className='pb-[10rem] pt-20'>
            <BookingSection />
        </div>
    </div>
  )
}

export default page