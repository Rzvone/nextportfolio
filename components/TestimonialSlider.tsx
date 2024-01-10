import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Reviews from './Reviews';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
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


const TestimonialSlider = () => {
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
        <Reviews 
            image='/images/avatar.jpg'
            name='John Doe'
        />
        <Reviews 
            image='/images/avatar.jpg'
            name='Jane Doe'
        />
        <Reviews 
            image='/images/avatar.jpg'
            name='James Doe'
        />
        <Reviews 
            image='/images/avatar.jpg'
            name='Jill Doe'
        />
    </Carousel>
  );
}

export default TestimonialSlider