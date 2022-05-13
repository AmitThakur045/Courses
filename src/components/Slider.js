import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SampleData from './SampleData';

const Slider = () => {
  return (
    <div>
    <Carousel>
      <div className="flex space-x-3">
        <div className="flex flex-col space-y-3">
          <SampleData />
          <SampleData />
        </div>
        <div className="flex flex-col space-y-3">
          <SampleData />
          <SampleData />
        </div>
      </div>
      <div className="flex space-x-3">
        <div className="flex flex-col space-y-3">
          <SampleData />
          <SampleData />
        </div>
        <div className="flex flex-col space-y-3">
          <SampleData />
          <SampleData />
        </div>
      </div>
    </Carousel>
  </div>
  )
}

export default Slider;