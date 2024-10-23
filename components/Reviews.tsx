import React from 'react'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
    <h1 className='heading'>
        Client <span className='text-yellow-400'>Review</span>
    </h1>
    <div className="centerdiv">
        <ReviewSlider/>
    </div>
  </div>
}

export default Reviews