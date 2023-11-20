import React from "react";
import Typewriter from "typewriter-effect";
import { CSSTransition } from 'react-transition-group';
import 'flatpickr/dist/themes/light.css'; 
import Event from "./Event"
import Search from "../components/Search"
  
export default function () {
 
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

  return (
    <div>
      <section className="wrapper" style={{backgroundColor: "#E9EDF5"}}>
        <div className="container px-0">
          <section className="wpb-content-wrapper">
            <section
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
                     <Search/>
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
              </div> 
               <Event/>
            </section>  
            <section className="vc_section overflow-visible vc_custom_1585643340020 vc_section-has-fill vc_section-o-content-bottom vc_section-flex vc_general vc_parallax vc_parallax-content-moving">
           <div className="partnerSection ">
                 <div className="d-block w-100">
                  <h3 style={{textAlign:"center",color: "#999"}}>Our Partners</h3>
                  </div>
            <div className="row justify-content-center">
             {partners.map((partner, index) => (
            <CSSTransition
              key={index}
              in={true}
              timeout={index * 100}
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
          </section>
        </div>
      </section>
      {/* /wrapper.section */}
      <ul className="side-social-links">
        <li className="pr-4">
          <span>Follow Us</span>
        </li>
        <li>
          <a className="external d-inline-block px-4" href="#">
            <i className="fe fe-facebook"></i>
          </a>
        </li>
        <li>
          <a className="external d-inline-block px-4" href="#">
            <i className="fe fe-twitter"></i>
          </a>
        </li>
        <li>
          <a className="external d-inline-block px-4" href="#">
            <i className="fe fe-youtube"></i>
          </a>
        </li>
        <li>
          <a className="external d-inline-block px-4" href="#">
            <i className="fe fe-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
