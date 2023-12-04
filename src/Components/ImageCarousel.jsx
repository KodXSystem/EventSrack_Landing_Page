import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCard, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageCarousel = ({ images }) => {
  const baseUrl = 'http://192.168.1.9:3012/media/eventImage/652e3dbe63ab1a0a48096577/';
  // src={`${process.env.REACT_APP_API_ENDPOINT}/media/eventImage/${event_detail?._id}/${item}`}
  return (
    <Carousel showArrows={true} thumbWidth={100} showThumbs={true}  showStatus={false} centerSlidePercentage={55} >
    {images.map((src, index) => (
      <div key={index}>
        <img src={`${baseUrl}${src}`} alt={`Event Image ${index + 1}`} />
      </div>
    ))}
  </Carousel>
  );
};

export default ImageCarousel;
