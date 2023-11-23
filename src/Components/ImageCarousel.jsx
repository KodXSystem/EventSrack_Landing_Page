import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCard, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageCarousel = ({ images }) => {
const baseUrl = 'http://192.168.1.12:3012/media/eventImage/652e3dbe63ab1a0a48096577/';
  return (
    <Carousel showArrows={true} thumbWidth={400} showThumbs={true} centerSlidePercentage={55}>
    {images.map((src, index) => (
      <div key={index}>
        <img src={`${baseUrl}${src}`} alt={`Event Image ${index + 1}`} />
      </div>
    ))}
  </Carousel>
  );
};

export default ImageCarousel;
