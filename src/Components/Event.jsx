import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBCol, MDBRow, MDBCard,
    MDBCardBody, MDBCardOverlay,MDBCardText,MDBCardTitle, MDBCardImage  } from 'mdb-react-ui-kit';
import './style.css' 
export default function Event() {
    const events = [
        {
          id: 1,
          imageSrc: 'assets/wp-content/uploads/2019/12/vibra-mahou-fest-1-873x1024.jpg',
          price: '$39 - $1,200',
          eventName: 'Vibra Mahou Fest',
          date: 'Jul 16',
          location: ' Grant Park, Chicago  ',
        },
        {
          id: 2,
          imageSrc: 'assets/wp-content/uploads/2019/12/kenny-g-873x1024.jpg',
          price: '$120',
          eventName: 'Kenny G',
          date: '     Aug 28',
          location: '   Majestic Theatre  ',
        },
        {
          id: 3,
          imageSrc: 'assets/wp-content/uploads/2019/12/sesame-street-live-3-873x1024.jpg',
          price: '$45',
          eventName: '  Sesame Street Live! Make Your Magic',
          date: ' Sep 26',
          location: 'Grand Chapiteau',
        },
     
        {
          id: 4,
          imageSrc: '   assets/wp-content/uploads/2019/10/the-nutcracker-873x1024.jpg',
          price: '$69 - $79',
          eventName: ' St. Petersburg Ballet-The Nutcracker     ',
          date: 'Oct 9',
          location: 'Majestic Theatre',
        },
        {
          id: 5,
          imageSrc: 'assets/wp-content/uploads/2019/12/vlah-dumitru-FvmwloIbCeQ-unsplash-873x1024.jpg',
          price: '  $36 - $69',
          eventName: 'The Phantom of the Opera',
          date: '  Nov 28',
          location: 'Kings Theatre',
        },
        {
          id: 6,
          imageSrc: 'assets/wp-content/uploads/royaltickets-uploads/2019/12/cirque-du-solei-kurios-873x1024.jpg',
          price: '$49',
          eventName: 'Cirque du Soleil Kurios',
          date: 'Dec 26',
          location: 'Grand Chapiteau',
        },
        {
          id: 7,
          imageSrc: 'assets/wp-content/uploads/royaltickets-uploads/2020/01/it-conference-cover-873x1024.jpg',
          price: '$149 - $300',
          eventName: 'IT Conference',
          date: 'Apr 17',
          location: 'San Jose Civic',
        },
      ];
      
  let eventsChunks=[]
  const isMobile = window.innerWidth <= 576; 
  const chunkSize = isMobile ? 1 : 3; 
  for (let i = 0; i < events.length; i += chunkSize) {
    eventsChunks.push(events.slice(i, i + chunkSize));
  }
  return (

<MDBContainer className="" style={{ marginBottom: '100px',marginTop:'-12px', marginLeft:'-2px'}}>
      <MDBCarousel showControls interval={3000} style={{marginTop:'-168px'}}>
        {eventsChunks.map((chunk, index) => (
          <MDBCarouselItem key={index + 1} style={{marginTop:'137px'}}>
            <MDBRow >
              {chunk.map(event => (
                <MDBCol key={event.id} >
                  <MDBCard className="text-white" style={{ width: '24rem' }}>
                    <div className='bg-image hover-zoom'>
                    < MDBCardImage src={event.imageSrc} />
                    </div>
                    < MDBCardOverlay>
                      <MDBCardBody style={{bottom:"0px"}}>
                        <MDBCardText  style={{ color: 'white'}}>{event.price}</MDBCardText>
                        <MDBCardTitle style={{ color: 'white'}}>{event.eventName}</MDBCardTitle>
                        <MDBCardText style={{ color: 'white' }}>
                        <i class="fe fe-calendar text-white opacity_60 fs-80 mr-2"></i>
                          {event.date} {} 
                          <i class="fe fe-map-pin text-white opacity_60 fs-80 mr-2"></i>{event.location}
                          <br />
                          {/* <div>
                          <a href="#">Book ticket</a>
                          </div> */}
                      </MDBCardText>
                      </MDBCardBody>
                    </ MDBCardOverlay>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCarouselItem>
        ))}
      </MDBCarousel>
    </MDBContainer>
  )
}
