import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCard, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageCarousel = ({ images, event_id }) => {

  return (
    <Carousel showArrows={true} thumbWidth={100} showThumbs={true}  showStatus={false} centerSlidePercentage={55} >
    {images.map((src, index) => (
      <div key={index}>
        <img src={`${process.env.REACT_APP_API_ENDPOINT_IMG}/media/eventImage/${event_id}/${src}`}
        alt={`Event Image ${index + 1}`} />
      </div>
    ))}
  </Carousel> 
  );
};

export default ImageCarousel;
