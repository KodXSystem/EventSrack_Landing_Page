import React from "react";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { CSSTransition } from 'react-transition-group';
import flatpickr from 'flatpickr';
import { Card } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBCol, MDBRow, MDBCard,
  MDBCardBody, MDBCardOverlay,MDBRipple  } from 'mdb-react-ui-kit';
export default function () {
  const [showForm, setShowForm] = useState(false);
  const partners = [
    {
      imageSrc: 'assets/wp-content/uploads/2020/03/brand_1_white.png',
      link: '#',
      name: 'Partner 1',
    },
    {
      imageSrc: 'assets/wp-content/uploads/2020/03/brand_2_white.png',
      link: '#',
      name: 'Partner 2',
    },
    {
      imageSrc: 'assets/wp-content/uploads/2020/03/brand_3_white.png',
      link: '#',
      name: 'Partner 3',
    },
    {
      imageSrc: 'assets/wp-content/uploads/2020/03/brand_4_white.png',
      link: '#',
      name: 'Partner 4',
    },
    {
      imageSrc: 'assets/wp-content/uploads/2020/03/brand_5_white.png',
      link: '#',
      name: 'Partner 5',
    },
    {
      imageSrc: 'assets/wp-content/uploads/2020/03/brand_6_white.png',
      link: '#',
      name: 'Partner 6',
    },
    {
      imageSrc: 'assets/wp-content/uploads/2020/03/brand_7_white.png',
      link: '#',
      name: 'Partner 1',
    },
    // Add more partners following the same pattern
  ];
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
  useEffect(() => {
    const delay = 1000; // Set your desired delay in milliseconds
    const timer = setTimeout(() => {
      setShowForm(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = useSpring({
    opacity: showForm ? 1 : 0,
    from: { opacity: 0 },
  });
  const [dateRange, setDateRange] = useState(["2023-11-07", "2023-11-14"]);
  useEffect(() => {
    const inputElement = document.querySelector('.flatpickr');
    flatpickr(".flatpickr", {
      altInput: true,
      mode: "range",
      dateFormat: "Y-m-d",
      altFormat: "F j",
      defaultDate: dateRange,
    });
  }, []);

  let eventsChunks=[]
  const isMobile = window.innerWidth <= 576; 
  const chunkSize = isMobile ? 1 : 3; 
  for (let i = 0; i < events.length; i += chunkSize) {
    eventsChunks.push(events.slice(i, i + chunkSize));
  }

  return (
    <div>
      <section className="wrapper">
        <div className="container px-0">
          <section className="wpb-content-wrapper">
            <section
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              data-vc-parallax="1.5"
              className="vc_section overflow-visible vc_custom_1585643340020 vc_section-has-fill vc_section-o-content-bottom vc_section-flex vc_general vc_parallax vc_parallax-content-moving"
            >
              <div className="vc_row wpb_row vc_row-fluid z-index-9">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div
                        className="vc_empty_space  d-none d-sm-block"
                        style={{ height: 100 }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                      <div className="wpb_text_column wpb_content_element  vc_custom_1585645463406">
                        <div className="wpb_wrapper">
                          <p className="subtitle text-left">
                            All the fun starts here
                          </p>
                        </div>
                      </div>
                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <h1 className="fw-bold">
                            Discover{" "}
                            <Typewriter
                              options={{
                                strings: [
                                  "Sport Events",
                                  "Concerts",
                                  "Conferences",
                                  "Courses",
                                  "Workshops",
                                  "Parties",
                                  "Theater",
                                ],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "text-red",
                              }}
                            />
                          </h1>
                          <h1 style={{ lineHeight: "0em" }}>around you.</h1>
                        </div>
                      </div>
                      <hr />
                      <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1584895764298">
                        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-10">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <animated.form
                                id="royaltickets-search-form"
                                className="overflow-visible"
                                action="https://royaltickets.fantasythemes.net/demo06/simple-layout"
                                method="GET"
                                style={fadeIn}
                              >
                                <div className="form-row shadow bg-white rounded px-6 pt-7 pb-4 overflow-visible events-search-form">
                                  <div className="col-lg mb-3 mb-lg-0">
                                    <div className="form-row">
                                      <div className="col-md-4 col-sm-12">
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">What</div>
                                          <select
                                            className="chosen-select"
                                            name="category"
                                            data-bg-color="#ffffff"
                                            data-icon=""
                                            data-size-dropdown="large"
                                          >
                                            <option value={0}>
                                              Select Category
                                            </option>
                                            <option value="arts-theater">
                                              Arts &amp; Theater
                                            </option>
                                            <option value="concerts">
                                              Concerts
                                            </option>
                                            <option value="conference">
                                              Conference
                                            </option>
                                            <option value="family">
                                              Family
                                            </option>
                                            <option value="festivals">
                                              Festivals
                                            </option>
                                          </select>
                                        </div>
                                        {/* End Filter */}
                                      </div>
                                      <div className="col-md-4 col-sm-12">
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">Where</div>
                                          <select
                                            className="chosen-select"
                                            name="city"
                                            data-bg-color="#ffffff"
                                            data-icon=""
                                            data-size-dropdown="large"
                                          >
                                            <option value="">
                                              Select Location
                                            </option>
                                            <option value="brooklyn">
                                              Brooklyn
                                            </option>
                                            <option value="chicago">
                                              Chicago
                                            </option>
                                            <option value="new-york">
                                              New York
                                            </option>
                                            <option value="san-jose">
                                              San Jose
                                            </option>
                                          </select>
                                        </div>
                                        {/* End Filter */}
                                      </div>
                                      <div className="col-md-4 col-sm-10">
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">When</div>
                                          <input
                                            // className="flatpickr form-control form-control-sm bg-white"
                                            name="dates"
                                            type="text"
                                            placeholder="Date range"
                                            data-flatpickr=""
                                            value={`${dateRange[0]} to ${dateRange[1]}`}
                                            readOnly
                                          />
                                        </div>
                                        {/* End Filter */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-auto">
                                    <a
                                      id="submit-search-events"
                                      href="#"
                                      className="btn btn-sm btn-danger fw-500 text-uppercase w-100 mb-20"
                                    >
                                      Search{" "}
                                    </a>
                                  </div>
                                </div>
                              </animated.form>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-lg-2 vc_hidden-md vc_hidden-sm vc_hidden-xs">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1585239968310 vc_row-o-equal-height vc_row-o-content-bottom vc_row-flex">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="d-block w-100  royaltickets_title_6549fbce06e4a">
                        <p className="subtitle text-left">Discover the fun!</p>
                        <h3 className="font-weight-bold mb-0 lh-1 text-left">
                          Upcoming Events
                        </h3>
                      </div>
                      <div
                        className="vc_empty_space  d-block d-sm-none"
                        style={{ height: 32 }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper" />
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="row ">
                     
 <MDBContainer className="py-10" style={{ marginBottom: '-160px' }}>
      <MDBCarousel showControls>
        {eventsChunks.map((chunk, index) => (
          <MDBCarouselItem key={index + 1}>
            <MDBRow className="text-center">
              {chunk.map(event => (
                <MDBCol key={event.id} lg="4" className="mb-5 mb-md-0">
                  <MDBCard className="text-white" style={{ width: '24rem', textAlign: 'start' }}>
                    <div className='bg-image hover-zoom'>
                    <Card.Img variant="top" src={event.imageSrc} />
                    </div>
                    < MDBCardOverlay>
                      <MDBCardBody>
                        <span>{event.price}</span>
                        <Card.Title style={{ color: 'white' }}>{event.eventName}</Card.Title>
                        <Card.Text style={{ color: 'white' }}>
                          {event.date} - {event.location}
                          <br />
                          <a href="#">Book ticket</a>
                        </Card.Text>
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
    </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>  
      <section className="wrapper">
        <div className="partnerSection">
                 <div className="d-block w-100">
                  <h3 style={{textAlign:"center",color: "#999"}}>Our Partners</h3>
                  </div>
            <div className="row justify-content-center">
          {partners.map((partner, index) => (
            <CSSTransition
              key={index}
              in={true} // Set this to true to animate on initial render
              timeout={index * 100} // Adjust the delay as needed
             
            >
               <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center">
                <div
                  className="media position-relative sponsor p-5 mb-6 text-center"
                >
                  <a href={partner.link}>
                    <img src={partner.imageSrc} alt={partner.name} />
                  </a>
                </div>
              </div>
        
            </CSSTransition>
          ))}
          </div>
          </div>
      </section>
            <div className="vc_row-full-width vc_clearfix" />
          </section>
          <div className="royaltickets-page-comments"></div>
        </div>{" "}
        {/* /container*/}
      </section>{" "}
      {/* /wrapper.section */}
      <ul class="side-social-links">
        <li class="pr-4">
          <span>Follow Us</span>
        </li>
        <li>
          <a class="external d-inline-block px-4" href="#">
            <i class="fe fe-facebook"></i>
          </a>
        </li>
        <li>
          <a class="external d-inline-block px-4" href="#">
            <i class="fe fe-twitter"></i>
          </a>
        </li>
        <li>
          <a class="external d-inline-block px-4" href="#">
            <i class="fe fe-youtube"></i>
          </a>
        </li>
        <li>
          <a class="external d-inline-block px-4" href="#">
            <i class="fe fe-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
