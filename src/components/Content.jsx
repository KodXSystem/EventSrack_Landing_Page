import React from "react";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";
import NaijaStates from 'naija-state-local-government';
import 'flatpickr/dist/themes/light.css'; 
import Event from "./Event"
import axios from 'axios';
import moment from 'moment';
import { getLocation,getCategory } from "../service/service";
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBCol, MDBRow, MDBCard,
  MDBCardBody, MDBCardOverlay,MDBCardText,MDBCardTitle  } from 'mdb-react-ui-kit';
  
export default function () {
  const [LocationApiData, setLocationApiData] = useState(null);
  const [CategoryApiData, setCategoryApiData] = useState(null);

  useEffect(() => {
    getLocation()
      .then(response => {
        setLocationApiData(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      getCategory()
      .then(response => {
        setCategoryApiData(response.data.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 

  const [selectedLocation, setSelectedLocation] = useState('');
  const [stateDate, setStateData] = useState({});
  const [searchData, setSearchData] = useState({
         selectedCategory:"",
         selectedLocation:"",
         startDate:"",
         endDate:"",
               });

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = useSpring({
    opacity: showForm ? 1 : 0,
    from: { opacity: 0 },
  });
  const [dateRange, setDateRange] = useState([]);
  const handleDateChange = (dateRange) => {
    setDateRange(dateRange);
    setSearchData({
      ...searchData,
      startDate:  moment(dateRange[0]).format('YYYY-MM-DD'),
      endDate: moment(dateRange[1]).format('YYYY-MM-DD'),
    });
  };
  useEffect(() => {
    setStateData({
      ...searchData,
      date: dateRange,
    });
  }, [searchData, dateRange, setStateData]);
  const handleLocationChange = (e) => {

    const Location = LocationApiData.find(item => item._id == e.target.value);
   
    if (Location) {
      setSearchData({
        ...searchData,
        selectedLocation: {
          id: Location._id,
          name: Location.title
        }
      });
  }
  } 
  const handleCategory=(e)=>{
    const selectedCategory = CategoryApiData.find(item => item._id === e.target.value);
    if (selectedCategory) {
      setSearchData({
        ...searchData,
        selectedCategory: {
          id: selectedCategory._id,
          name: selectedCategory.category_name
        }
      });
  }
  }

  const handleSearch=()=>{
// const apiUrl = 'https://example.com/api/data';
// axios.post(apiUrl, searchData)
//   .then(response => {
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
  }

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
                                      <div className="col-md-4 col-sm-12" >
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">What</div>
                                          <select
                                            className="chosen-select"
                                            name="category"
                                          onChange={(e)=> handleCategory(e)}
                                          value={searchData.selectedCategory._id} 
                                          >
                                            <option value={0}>
                                              Select Category
                                            </option>
                                            {CategoryApiData?.map((item,index) => (
                                              <option value={item._id} key={item._id}>
                                               {item.category_name}
                                              </option>
                                                 ))}
                                          </select>
                                        </div>
                                        {/* End Filter */}
                                      </div>
                                      <div className="col-md-4 col-sm-12" >
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">Where</div>
                                          <select
                                            className="chosen-select"
                                            name="city"
                                            onChange={(e)=>handleLocationChange(e)}
                                            value={searchData.selectedLocation._id} 
                                          >
                                            <option value="">
                                              Select Location
                                            </option>
                                            {LocationApiData?.map((item,index) => (
                                              <option value={item._id} key={item._id}>
                                               {item.title}
                                              </option>
                                                 ))}
                                          </select>
                                        </div>
                                        
                                        {/* End Filter */}
                                      </div>
                                      <div className="col-md-4 col-sm-12" >
                                        
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">When</div>
                                          <Flatpickr
                                           style={{border :'1px solid #999'}}
                                            options={{
                                            mode: 'range',
                                            altInput: true,
                                            altFormat: "F j",
                                            dateFormat: "Y-m-d", 
                                            onClose: handleDateChange 
                                          }}
                                          placeholder="Pick a date"
                                           value={dateRange}/>
                                        </div>
                                        {/* End Filter */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-auto">
                                    <Link
                                      id="submit-search-events"
                                      to="/EventSearch"
                                      state={stateDate}
                                      onClick={handleSearch}
                                      className="btn btn-sm btn-danger fw-500 text-uppercase w-100 mb-20"
                                    >
                                      Search{" "}
                                    </Link>
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
        {/* /container*/}
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
