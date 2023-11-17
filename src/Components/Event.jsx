import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBCol, MDBRow, MDBCard,
    MDBCardBody, MDBCardOverlay,MDBCardText,MDBCardTitle, MDBCardImage  } from 'mdb-react-ui-kit';

import EventDetails from '../pages/EventDetails';
import {useRef,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
export default function Event(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
console.log(props.Events,"props")
  useEffect(() => {
    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []); 
    const events = [
        {
          id: 1,
          banner_images: 'assets/wp-content/uploads/2019/12/vibra-mahou-fest-1-873x1024.jpg',
          amount: '$39 - $1,200',
          event_name: 'Vibra Mahou Fest',
          date: 'Jul 16',
          event_location: ' Grant Park,  ',
        },
        {
          id: 2,
          banner_images: 'assets/wp-content/uploads/2019/12/kenny-g-873x1024.jpg',
          amount: '$120',
          event_name: 'Kenny G',
          date: '     Aug 28',
          event_location: '   Majestic Theatre  ',
        },
        {
          id: 3,
          banner_images: 'assets/wp-content/uploads/2019/12/sesame-street-live-3-873x1024.jpg',
          amount: '$45',
          event_name: '  Sesame Street Live! Make ',
          date: ' Sep 26',
          location: 'Grand Chapiteau',
        },
     
        {
          id: 4,
          banner_images: '   assets/wp-content/uploads/2019/10/the-nutcracker-873x1024.jpg',
          amount: '$69 - $79',
          event_name: ' St. Petersburg Ballet-The Nutcracker     ',
          date: 'Oct 9',
          event_location: 'Majestic Theatre',
        },
        {
          id: 5,
          banner_images: 'assets/wp-content/uploads/2019/12/vlah-dumitru-FvmwloIbCeQ-unsplash-873x1024.jpg',
          amount: '  $36 - $69',
          event_name: 'The Phantom of the Opera',
          date: '  Nov 28',
          event_location: 'Kings Theatre',
        },
        {
          id: 6,
          banner_images: 'assets/wp-content/uploads/royaltickets-uploads/2019/12/cirque-du-solei-kurios-873x1024.jpg',
          amount: '$49',
          event_name: 'Cirque du Soleil Kurios',
          date: 'Dec 26',
          event_location: 'Grand Chapiteau',
        },
      ];
  let eventsChunks=[]
  const isMobile = window.innerWidth <= 771; 
  const chunkSize = isMobile ? 1 : 3; 
  if(props.Events?.length>0){
  for (let i = 0; i < props.Events.length; i += chunkSize) {
    eventsChunks.push( props.Events.slice(i, i + chunkSize));
  }}
  else{
    for (let i = 0; i < events.length; i += chunkSize) {
      eventsChunks.push( events.slice(i, i + chunkSize));
    }
  }
  return (
<MDBContainer  style={{ marginBottom: '20px',marginTop:'-12px', marginLeft:'15px'}}>
      <MDBCarousel showControls style={{marginTop:'-168px'}}>
        {eventsChunks.map((chunk, index) => (
          <MDBCarouselItem  key={index + 1} itemId={index + 1} style={{marginTop:'177px'}} className={index === 0 ? 'active' : ''} interval={5000} >
            <MDBRow >
              {chunk.map(event => (
                <MDBCol key={event.id}  >
                  <Link to={{ pathname: `/EventDetails`, state: events }}>
                  <MDBCard>
                    <div  class="bg-image hover-overlay ripple">
                    < MDBCardImage src="assets/wp-content/uploads/2019/12/sesame-street-live-3-873x1024.jpg" />
                    {/* < MDBCardImage src={event.banner_images} /> */}
                    <a href="#!">
              <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                     </a>
                    </div>                 
                    < MDBCardOverlay  >
                      <MDBCardBody style={{bottom:"0px" ,marginTop:'110px'}} >
                        <MDBCardText  style={{ color: 'white',position:'relative', marginBottom:'-8px'}}>${event.amount}</MDBCardText>
                        <MDBCardTitle style={{ color: 'white'}}>{event.event_name}</MDBCardTitle>
                        <MDBCardText style={{ color: 'white' }}>
                        <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2"></i>
                          {event.date} {} 
                          <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2"></i>{event.event_location}
                          <br />
                          <div>
                          <a href="#"className='text-white'>Book ticket</a>
                          </div>
                      </MDBCardText>
                      </MDBCardBody>
                    </ MDBCardOverlay>
                  </MDBCard></Link>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCarouselItem>
        ))}
      </MDBCarousel>
    </MDBContainer>
  )
}
