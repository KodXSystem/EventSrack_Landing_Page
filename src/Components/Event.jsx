import React from 'react'
import {
  MDBCarousel, MDBCarouselItem, MDBContainer, MDBCol, MDBRow, MDBCard,
  MDBCardBody, MDBCardOverlay, MDBCardText, MDBCardTitle, MDBCardImage
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getEvents } from '../service/service';



export default function Event(props) {
  const eventDetails = props?.Events;
 

  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [allEvents, setAllEvents] = useState([]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const getAllEvents = async () => {
    try {
      const res = await getEvents();
      setAllEvents(res?.data?.data?.data || []);
    } catch (e) {
      console.log(e.message);
    }
  };
 
  useEffect(() => {
    getAllEvents()
  }, [])



  console.log(allEvents)


  useEffect(() => {
    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const events = allEvents;
  
  let eventsChunks = []
  const isMobile = window.innerWidth <= 771;
  const chunkSize = isMobile ? 1 : 3;
  if (props.Events?.length > 0) {
    for (let i = 0; i < props.Events.length; i += chunkSize) {
      eventsChunks.push(props.Events.slice(i, i + chunkSize));
    }
  }
  else {
    for (let i = 0; i < events.length; i += chunkSize) {
      eventsChunks.push(events.slice(i, i + chunkSize));
    }
  }
  return (
    <MDBContainer style={{ marginBottom: '20px', marginTop: '-12px', marginLeft: '15px' }}>
      <MDBCarousel showControls showIndicators interval={1000} touch={false} style={{ marginTop: '-168px' }} >
        {eventsChunks.map((chunk, index) => (
          <MDBCarouselItem key={index + 1} itemId={index + 1} style={{ marginTop: '177px' }} className={index === 0 ? 'active' : ''} interval={1000} >
            <MDBRow >
              {chunk.map(event => (
                <MDBCol key={event.id} className='col-md-4'>
                  <Link to={`/EventDetails`} state={{ eventDetails}} >
                    <MDBCard style={{width:'350px',}}>
                      <div class="bg-image hover-overlay ripple">
                        < MDBCardImage src="assets/wp-content/uploads/2019/12/sesame-street-live-3-873x1024.jpg" />
                        {/* < MDBCardImage src={event.banner_images} /> */}
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}></div>
                        </a>
                      </div>
                      < MDBCardOverlay  >
                        <MDBCardBody style={{ bottom: "0px", marginTop: '110px' ,paddingLeft:'12px' }} >
                          <MDBCardText style={{ color: 'white', position: 'relative', marginBottom: '-8px' }}>NGN {" "}{event.amount}/-</MDBCardText>
                          <MDBCardTitle style={{ color: 'white' }}>{event.event_name}</MDBCardTitle>
                          <MDBCardText style={{ color: 'white' }}>
                            <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2"></i>
                            Event Start Date:{' '}{moment(event?.event_start_date).format('DD-MM-YYYY')} {" "}
                            <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2"></i>{event.event_location}
                            <br />
                            <div>
                              <a href="#" className='text-white'>Book ticket</a>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </ MDBCardOverlay>
                    </MDBCard>
                  </Link>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCarouselItem>
        ))}
      </MDBCarousel>
    </MDBContainer>
  )
}
