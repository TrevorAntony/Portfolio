import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = { 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ReviewSlider = () => { 
  return (
  <Carousel 
 additionalTransfrom={0}
 arrows={true}
 autoPlay={true}
 autoPlaySpeed={5000}
 centerMode={false}
 infinite
 responsive={responsive}
 itemClass='item'
>
  <ClientReview
   image='/images/u1.jpg' 
   name='Renee Omondi' 
   role='Lawyer'
   />
  <ClientReview 
  image='/images/u1.jpg' 
  name='Caroline Omondi'
  role='Doctor'
  />
  <ClientReview 
  image='/images/u1.jpg' 
  name='Daniel Ohonde' 
  role='Engineer'
  />
  <ClientReview 
  image='/images/u1.jpg' 
  name='Jael Amara' 
  role='Web developer'
  />
</Carousel>
  );
}

export default ReviewSlider