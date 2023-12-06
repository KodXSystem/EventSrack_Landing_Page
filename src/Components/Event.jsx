import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getEvents } from '../service/service';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NoImage from "../assets/logo/NoImage.jpg"
const Event = (props) => {
  const [allEvents, setAllEvents] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const res = await getEvents();
        setAllEvents(res?.data?.data?.data || []);
      } catch (e) {
        console.log(e.message);
      }
    };

    getAllEvents();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    },
  };

  return (
    <div className="ml-3 mb-0">
    <Carousel responsive={responsive} 
    infinite 
    autoPlay={props.deviceType !== "mobile" ? true : false}
    containerClass="carousel-container"
    autoPlaySpeed={3000}
    deviceType={props.deviceType}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    keyBoardControl={true}>
      {allEvents.map((event, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Link to={`/EventDetails`} state={{ event }}>
            <div className="mb-4 p-2" style={{ position: 'relative' }}>
              <div className="card">
                <img
                  src={`${process.env.REACT_APP_API_ENDPOINT_IMG}/media/eventImage/${event._id}/${event.banner_images[0]}`}
                  className="card-img-top"
                  alt="No Image"
                  style={{ width: 'auto', height: '400px',position: 'relative' }}
                  onError={(e) => {
                    e.target.src = NoImage;
                    e.target.alt = "No Image";
                  }}
                />
                <div
                 className="text-white position-absolute top-120 start-0 end-0 bottom-0 p-4"
                >
                  <div className="card-body text-white "  >
                  <h5 className="text-white">NGN {event.amount}/-</h5>
                    <h4 className="card-title text-white">{event.event_name}</h4>
                    <h5 className="text-white">
                    <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2"></i>
                      Event Start Date: {moment(event?.event_start_date).format('DD-MM-YYYY')}</h5>
                    <h5 className="text-white">  <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2"></i>{event.event_location}</h5>
                    <Link
                      to={`/TicketBook`} state={{ event }}
                      className="btn btn-danger"
                      style={{
                        opacity: hoveredCard === index ? 1 : 0,
                        transition: 'opacity 0.3s',
                      }}
                    >
                      Book ticket
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  </div>
  );
};
export default Event;
