import React from "react";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import flatpickr from 'flatpickr';
export default function () {
  const [showForm, setShowForm] = useState(false);

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
                        <div
                          className="col-12"
                          data-aos="fade-left"
                          data-aos-delay={0}
                        >
                          <div className="owl-carousel owl-theme taxonomy-carousel-style-alt">
                            <div className="item" data-favorite-grid={196}>
                              <div className="bg-white rounded overflow-hidden soft-shadow h-100 event-card">
                                <div className="media position-relative h-100">
                                  <a
                                    className="fw-500 w-100"
                                    href="event/vibra-mahou-fest/index.html"
                                  />
                                  <span className="event-card-image">
                                    <img
                                      className="w-100"
                                      src="assets/wp-content/uploads/2019/12/vibra-mahou-fest-1-873x1024.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span
                                    className="position-absolute top-0 left-0 mt-5 mt-lg-7 ml-5 ml-lg-7 cursor-pointer add-to-favorite"
                                    data-id={196}
                                    data-user-id="2400:adc5:152:7500:47f1:8b19:e92f:ab8d"
                                    data-user-type="ip"
                                  >
                                    <i className="far fa-heart" />
                                  </span>
                                  <span className="card-bottom-block position-absolute bottom-0 left-0 right-0 p-5 p-lg-7">
                                    <div className="w-100 text-white mb-2 d-flex align-items-center">
                                      $39 - $1,200{" "}
                                    </div>
                                    <a
                                      className="fw-500 w-100 d-inline-block mb-2 fs-24 lh-32 text-white"
                                      href="event/vibra-mahou-fest/index.html"
                                    >
                                      Vibra Mahou Fest
                                    </a>
                                    <span className="text-white d-inline-block event-place">
                                      <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2" />
                                      Jul 16
                                      <span className="mr-3" />
                                      <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2" />
                                      Grant Park, Chicago{" "}
                                    </span>
                                    <span className="book-ticket-overlay">
                                      Book ticket{" "}
                                      <svg
                                        className="arrow-icon"
                                        width={18}
                                        height={14}
                                        viewBox="0 0 18 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 7H16M16 7L11 1M16 7L11 13"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item" data-favorite-grid={235}>
                              <div className="bg-white rounded overflow-hidden soft-shadow h-100 event-card">
                                <div className="media position-relative h-100">
                                  <a
                                    className="fw-500 w-100"
                                    href="event/kenny-g/index.html"
                                  />
                                  <span className="event-card-image ">
                                    <img
                                      className="w-100"
                                      src="assets/wp-content/uploads/2019/12/kenny-g-873x1024.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span
                                    className="position-absolute top-0 left-0 mt-5 mt-lg-7 ml-5 ml-lg-7 cursor-pointer add-to-favorite"
                                    data-id={235}
                                    data-user-id="2400:adc5:152:7500:47f1:8b19:e92f:ab8d"
                                    data-user-type="ip"
                                  >
                                    <i className="far fa-heart" />
                                  </span>
                                  <span className="card-bottom-block position-absolute bottom-0 left-0 right-0 p-5 p-lg-7">
                                    <div className="w-100 text-white mb-2 d-flex align-items-center">
                                      $120{" "}
                                    </div>
                                    <a
                                      className="fw-500 w-100 d-inline-block mb-2 fs-24 lh-32 text-white"
                                      href="event/kenny-g/index.html"
                                    >
                                      Kenny G
                                    </a>
                                    <span className="text-white d-inline-block event-place">
                                      <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2" />
                                      Aug 28
                                      <span className="mr-3" />
                                      <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2" />
                                      Majestic Theatre{" "}
                                    </span>
                                    <span className="book-ticket-overlay">
                                      Book ticket{" "}
                                      <svg
                                        className="arrow-icon"
                                        width={18}
                                        height={14}
                                        viewBox="0 0 18 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 7H16M16 7L11 1M16 7L11 13"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item" data-favorite-grid={171}>
                              <div className="bg-white rounded overflow-hidden soft-shadow h-100 event-card">
                                <div className="media position-relative h-100">
                                  <a
                                    className="fw-500 w-100"
                                    href="event/sesame-street-live-make-your-magic/index.html"
                                  />
                                  <span className="event-card-image ">
                                    <img
                                      className="w-100"
                                      src="assets/wp-content/uploads/2019/12/sesame-street-live-3-873x1024.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span
                                    className="position-absolute top-0 left-0 mt-5 mt-lg-7 ml-5 ml-lg-7 cursor-pointer add-to-favorite"
                                    data-id={171}
                                    data-user-id="2400:adc5:152:7500:47f1:8b19:e92f:ab8d"
                                    data-user-type="ip"
                                  >
                                    <i className="far fa-heart" />
                                  </span>
                                  <span className="card-bottom-block position-absolute bottom-0 left-0 right-0 p-5 p-lg-7">
                                    <div className="w-100 text-white mb-2 d-flex align-items-center">
                                      $45{" "}
                                    </div>
                                    <a
                                      className="fw-500 w-100 d-inline-block mb-2 fs-24 lh-32 text-white"
                                      href="event/sesame-street-live-make-your-magic/index.html"
                                    >
                                      Sesame Street Live! Make Your Magic
                                    </a>
                                    <span className="text-white d-inline-block event-place">
                                      <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2" />
                                      Sep 26
                                      <span className="mr-3" />
                                      <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2" />
                                      Grand Chapiteau{" "}
                                    </span>
                                    <span className="book-ticket-overlay">
                                      Book ticket{" "}
                                      <svg
                                        className="arrow-icon"
                                        width={18}
                                        height={14}
                                        viewBox="0 0 18 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 7H16M16 7L11 1M16 7L11 13"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item" data-favorite-grid={34}>
                              <div className="bg-white rounded overflow-hidden soft-shadow h-100 event-card">
                                <div className="media position-relative h-100">
                                  <a
                                    className="fw-500 w-100"
                                    href="event/st-petersburg-ballet-the-nutcracker/index.html"
                                  />
                                  <span className="event-card-image ">
                                    <img
                                      className="w-100"
                                      src="assets/wp-content/uploads/2019/10/the-nutcracker-873x1024.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span
                                    className="position-absolute top-0 left-0 mt-5 mt-lg-7 ml-5 ml-lg-7 cursor-pointer add-to-favorite"
                                    data-id={34}
                                    data-user-id="2400:adc5:152:7500:47f1:8b19:e92f:ab8d"
                                    data-user-type="ip"
                                  >
                                    <i className="far fa-heart" />
                                  </span>
                                  <span className="card-bottom-block position-absolute bottom-0 left-0 right-0 p-5 p-lg-7">
                                    <div className="w-100 text-white mb-2 d-flex align-items-center">
                                      $69 - $79{" "}
                                    </div>
                                    <a
                                      className="fw-500 w-100 d-inline-block mb-2 fs-24 lh-32 text-white"
                                      href="event/st-petersburg-ballet-the-nutcracker/index.html"
                                    >
                                      St. Petersburg Ballet – The Nutcracker
                                    </a>
                                    <span className="text-white d-inline-block event-place">
                                      <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2" />
                                      Oct 9<span className="mr-3" />
                                      <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2" />
                                      Majestic Theatre{" "}
                                    </span>
                                    <span className="book-ticket-overlay">
                                      Book ticket{" "}
                                      <svg
                                        className="arrow-icon"
                                        width={18}
                                        height={14}
                                        viewBox="0 0 18 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 7H16M16 7L11 1M16 7L11 13"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item" data-favorite-grid={146}>
                              <div className="bg-white rounded overflow-hidden soft-shadow h-100 event-card">
                                <div className="media position-relative h-100">
                                  <a
                                    className="fw-500 w-100"
                                    href="event/the-phantom-of-the-opera/index.html"
                                  />
                                  <span className="event-card-image ">
                                    <img
                                      className="w-100"
                                      src="assets/wp-content/uploads/2019/12/vlah-dumitru-FvmwloIbCeQ-unsplash-873x1024.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span
                                    className="position-absolute top-0 left-0 mt-5 mt-lg-7 ml-5 ml-lg-7 cursor-pointer add-to-favorite"
                                    data-id={146}
                                    data-user-id="2400:adc5:152:7500:47f1:8b19:e92f:ab8d"
                                    data-user-type="ip"
                                  >
                                    <i className="far fa-heart" />
                                  </span>
                                  <span className="card-bottom-block position-absolute bottom-0 left-0 right-0 p-5 p-lg-7">
                                    <div className="w-100 text-white mb-2 d-flex align-items-center">
                                      $36 - $69{" "}
                                    </div>
                                    <a
                                      className="fw-500 w-100 d-inline-block mb-2 fs-24 lh-32 text-white"
                                      href="event/the-phantom-of-the-opera/index.html"
                                    >
                                      The Phantom of the Opera
                                    </a>
                                    <span className="text-white d-inline-block event-place">
                                      <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2" />
                                      Nov 28
                                      <span className="mr-3" />
                                      <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2" />
                                      Kings Theatre{" "}
                                    </span>
                                    <span className="book-ticket-overlay">
                                      Book ticket{" "}
                                      <svg
                                        className="arrow-icon"
                                        width={18}
                                        height={14}
                                        viewBox="0 0 18 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 7H16M16 7L11 1M16 7L11 13"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item" data-favorite-grid={124}>
                              <div className="bg-white rounded overflow-hidden soft-shadow h-100 event-card">
                                <div className="media position-relative h-100">
                                  <a
                                    className="fw-500 w-100"
                                    href="event/cirque-du-soleil-kurios/index.html"
                                  />
                                  <span className="event-card-image ">
                                    <img
                                      className="w-100"
                                      src="assets/wp-content/uploads/royaltickets-uploads/2019/12/cirque-du-solei-kurios-873x1024.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span
                                    className="position-absolute top-0 left-0 mt-5 mt-lg-7 ml-5 ml-lg-7 cursor-pointer add-to-favorite"
                                    data-id={124}
                                    data-user-id="2400:adc5:152:7500:47f1:8b19:e92f:ab8d"
                                    data-user-type="ip"
                                  >
                                    <i className="far fa-heart" />
                                  </span>
                                  <span className="card-bottom-block position-absolute bottom-0 left-0 right-0 p-5 p-lg-7">
                                    <div className="w-100 text-white mb-2 d-flex align-items-center">
                                      $49{" "}
                                    </div>
                                    <a
                                      className="fw-500 w-100 d-inline-block mb-2 fs-24 lh-32 text-white"
                                      href="event/cirque-du-soleil-kurios/index.html"
                                    >
                                      Cirque du Soleil Kurios
                                    </a>
                                    <span className="text-white d-inline-block event-place">
                                      <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2" />
                                      Dec 26
                                      <span className="mr-3" />
                                      <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2" />
                                      Grand Chapiteau{" "}
                                    </span>
                                    <span className="book-ticket-overlay">
                                      Book ticket{" "}
                                      <svg
                                        className="arrow-icon"
                                        width={18}
                                        height={14}
                                        viewBox="0 0 18 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 7H16M16 7L11 1M16 7L11 13"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item" data-favorite-grid={258}>
                              <div className="bg-white rounded overflow-hidden soft-shadow h-100 event-card">
                                <div className="media position-relative h-100">
                                  <a
                                    className="fw-500 w-100"
                                    href="event/it-conference/index.html"
                                  />
                                  <span className="event-card-image ">
                                    <img
                                      className="w-100"
                                      src="assets/wp-content/uploads/royaltickets-uploads/2020/01/it-conference-cover-873x1024.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span
                                    className="position-absolute top-0 left-0 mt-5 mt-lg-7 ml-5 ml-lg-7 cursor-pointer add-to-favorite"
                                    data-id={258}
                                    data-user-id="2400:adc5:152:7500:47f1:8b19:e92f:ab8d"
                                    data-user-type="ip"
                                  >
                                    <i className="far fa-heart" />
                                  </span>
                                  <span className="card-bottom-block position-absolute bottom-0 left-0 right-0 p-5 p-lg-7">
                                    <div className="w-100 text-white mb-2 d-flex align-items-center">
                                      $149 - $300{" "}
                                    </div>
                                    <a
                                      className="fw-500 w-100 d-inline-block mb-2 fs-24 lh-32 text-white"
                                      href="event/it-conference/index.html"
                                    >
                                      IT Conference
                                    </a>
                                    <span className="text-white d-inline-block event-place">
                                      <i className="fe fe-calendar text-white opacity_60 fs-80 mr-2" />
                                      Apr 17
                                      <span className="mr-3" />
                                      <i className="fe fe-map-pin text-white opacity_60 fs-80 mr-2" />
                                      San Jose Civic{" "}
                                    </span>
                                    <span className="book-ticket-overlay">
                                      Book ticket{" "}
                                      <svg
                                        className="arrow-icon"
                                        width={18}
                                        height={14}
                                        viewBox="0 0 18 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 7H16M16 7L11 1M16 7L11 13"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="vc_row-full-width vc_clearfix" />
            {/* <section
          data-vc-full-width="true"
          data-vc-full-width-init="false"
          className="vc_section vc_custom_1585309823458"
        >
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="d-block w-100  vc_custom_1585645499434 royaltickets_title_6549fbce1093f">
                    <p className="subtitle text-left">
                      All the fun starts here
                    </p>
                    <h3 className="font-weight-bold mb-0 lh-1 text-left">
                      Entertainment Guides
                    </h3>
                  </div>
                  <div className="row   ">
                    <div
                      className="col-12 col-md-6 col-lg-6 mb-30"
                      data-aos="fade-in"
                      data-aos-delay={0}
                    >
                      <a
                        className="royaltickets-category-card d-block rounded overflow-hidden position-relative h-350"
                        href="event-category/arts-theater/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2019/10/theater.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Arts &amp; Theater
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title">
                              <strong>3</strong> Events{" "}
                            </span>
                            <span className="venue-title-overlay">
                              View Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 mb-30"
                      data-aos="fade-in"
                      data-aos-delay={100}
                    >
                      <a
                        className="royaltickets-category-card d-block rounded overflow-hidden position-relative h-350"
                        href="event-category/concerts/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/02/photo-1429962714451-bb934ecdc4ec.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Concerts
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title">
                              <strong>1</strong> Events{" "}
                            </span>
                            <span className="venue-title-overlay">
                              View Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 mb-30"
                      data-aos="fade-in"
                      data-aos-delay={200}
                    >
                      <a
                        className="royaltickets-category-card d-block rounded overflow-hidden position-relative h-350"
                        href="event-category/conference/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/02/it-conference-2.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Conference
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title">
                              <strong>1</strong> Events{" "}
                            </span>
                            <span className="venue-title-overlay">
                              View Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 mb-30"
                      data-aos="fade-in"
                      data-aos-delay={0}
                    >
                      <a
                        className="royaltickets-category-card d-block rounded overflow-hidden position-relative h-350"
                        href="event-category/family/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/02/sesame-street-live-1.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Family
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title">
                              <strong>1</strong> Events{" "}
                            </span>
                            <span className="venue-title-overlay">
                              View Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 mb-30"
                      data-aos="fade-in"
                      data-aos-delay={100}
                    >
                      <a
                        className="royaltickets-category-card d-block rounded overflow-hidden position-relative h-350"
                        href="event-category/festivals/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/02/vibra-mahou-fest-1.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Festivals
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title">
                              <strong>1</strong> Events{" "}
                            </span>
                            <span className="venue-title-overlay">
                              View Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-6 mb-30"
                      data-aos="fade-in"
                      data-aos-delay={200}
                    >
                      <a
                        className="royaltickets-category-card d-block rounded overflow-hidden position-relative h-350"
                        href="event-category/music/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/02/kenny-g-4.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Music
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title">
                              <strong>0</strong> Events{" "}
                            </span>
                            <span className="venue-title-overlay">
                              View Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
            <div className="vc_row-full-width vc_clearfix" />
            {/* <section
          data-vc-full-width="true"
          data-vc-full-width-init="false"
          className="vc_section"
        >
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="d-block w-100  royaltickets_title_6549fbce12e4f">
                    <p className="subtitle text-left">
                      All the fun starts here
                    </p>
                    <h3 className="font-weight-bold mb-0 lh-1 text-left">
                      Discover Venues Around You
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
            <div className="vc_row-full-width vc_clearfix" />
            {/* <section
          data-vc-full-width="true"
          data-vc-full-width-init="false"
          data-vc-stretch-content="true"
          className="vc_section vc_custom_1585309941544"
        >
          <div
            data-vc-full-width="true"
            data-vc-full-width-init="false"
            data-vc-stretch-content="true"
            className="vc_row wpb_row vc_row-fluid dark-background vc_row-no-padding"
          >
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="row gutter-0  ">
                    <div
                      className="col-12 col-md-6 col-lg-6 "
                      data-aos="fade-in"
                      data-aos-delay={0}
                    >
                      <a
                        className="royaltickets-category-card d-block  overflow-hidden position-relative h-450"
                        href="event-venue/blue-note-napa/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/03/petr-sevcovic-fyQr1T3GE34-unsplash-1-scaled.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Blue Note Napa
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title pr-5 pr-lg-7 pr-xl-10 lh-24">
                              1030 Main St, Napa, CA 94559, USA{" "}
                            </span>
                            <span className="venue-title-overlay mb-2">
                              0 Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 "
                      data-aos="fade-in"
                      data-aos-delay={100}
                    >
                      <a
                        className="royaltickets-category-card d-block  overflow-hidden position-relative h-450"
                        href="event-venue/grand-chapiteau/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/03/sierra-bell-_3YSr14-DsI-unsplash-1-scaled.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Grand Chapiteau
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title pr-5 pr-lg-7 pr-xl-10 lh-24">
                              Randalls and Wards Islands, New York, NY, USA{" "}
                            </span>
                            <span className="venue-title-overlay mb-2">
                              2 Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 "
                      data-aos="fade-in"
                      data-aos-delay={200}
                    >
                      <a
                        className="royaltickets-category-card d-block  overflow-hidden position-relative h-450"
                        href="event-venue/grant-park-chicago/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/01/chicago.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Grant Park, Chicago
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title pr-5 pr-lg-7 pr-xl-10 lh-24">
                              Grant Park, 337 E Randolph St, Chicago, IL 60601,
                              USA
                            </span>
                            <span className="venue-title-overlay mb-2">
                              1 Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 "
                      data-aos="fade-in"
                      data-aos-delay={0}
                    >
                      <a
                        className="royaltickets-category-card d-block  overflow-hidden position-relative h-450"
                        href="event-venue/hyatt-regency/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/03/thought-catalog-wyEinDRV88I-unsplash.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Hyatt Regency
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title pr-5 pr-lg-7 pr-xl-10 lh-24">
                              808 Howell St, Seattle, WA 98101, USA{" "}
                            </span>
                            <span className="venue-title-overlay mb-2">
                              0 Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-3 "
                      data-aos="fade-in"
                      data-aos-delay={100}
                    >
                      <a
                        className="royaltickets-category-card d-block  overflow-hidden position-relative h-450"
                        href="event-venue/kings-theatre/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/royaltickets-uploads/2020/03/theater.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Kings Theatre
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title pr-5 pr-lg-7 pr-xl-10 lh-24">
                              1027 Flatbush Ave, Brooklyn, NY 11226, USA{" "}
                            </span>
                            <span className="venue-title-overlay mb-2">
                              1 Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-12 col-md-6 col-lg-6 "
                      data-aos="fade-in"
                      data-aos-delay={200}
                    >
                      <a
                        className="royaltickets-category-card d-block  overflow-hidden position-relative h-450"
                        href="event-venue/majestic-theatre/index.html"
                        style={{
                          backgroundImage:
                            "url(assets/wp-content/uploads/2020/01/majestic.jpg)"
                        }}
                      >
                        <div className="position-absolute card-category-inner">
                          <h4 className="text-capitalize text-white lh-1 mb-0 p-0">
                            Majestic Theatre
                          </h4>
                          <span className="venue-meta position-relative pb-1">
                            <span className="venue-title pr-5 pr-lg-7 pr-xl-10 lh-24">
                              245 W 44th St New York, NY 10036{" "}
                            </span>
                            <span className="venue-title-overlay mb-2">
                              2 Events{" "}
                              <svg
                                className="arrow-icon"
                                width={18}
                                height={14}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7H16M16 7L11 1M16 7L11 13"
                                  strokeWidth={2}
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vc_row-full-width vc_clearfix" />
        </section> */}
            <div className="vc_row-full-width vc_clearfix" />
            {/* <section
          data-vc-full-width="true"
          data-vc-full-width-init="false"
          className="vc_section vc_custom_1585309338110"
        >
          <div className="vc_row wpb_row vc_row-fluid vc_custom_1585239968310 vc_row-o-equal-height vc_row-o-content-bottom vc_row-flex">
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="d-block w-100  royaltickets_title_6549fbce1787b">
                    <p className="subtitle text-left">Latest News</p>
                    <h3 className="font-weight-bold mb-0 lh-1 text-left">
                      From the Blog
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <a
                    href="#"
                    className="btn btn-sm btn-icon-right position-relative royaltickets_button_6549fbce17a05 "
                  >
                    View All{" "}
                    <span className="btn-icon-holder overflow-hidden">
                      <i className="vc-material vc-material-arrow_forward" />{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="d-block w-100 ">
                    <div className="row">
                      <div
                        className="col-12 col-sm-6 col-md-6"
                        data-aos="fade-right"
                        data-aos-delay={0}
                      >
                        <div className="px-6 px-lg-10 py-6 py-lg-10 rounded bg-light">
                          <span className="badge badge-danger text-uppercase mb-4">
                            <a
                              className="text-white"
                              href="category/royaltickets/index.html"
                            >
                              RoyalTickets
                            </a>
                          </span>
                          <div className="row mb-8">
                            <div className="col-12 col-md-10">
                              <h4 className="my-3">
                                <a
                                  className="text-dark"
                                  href="2019/10/23/the-greatest-super-bowl-games-of-all-time/index.html"
                                >
                                  The Greatest Super Bowl Games of All Time
                                </a>
                              </h4>
                              <div className="news-block-content">
                                <p>
                                  Eam tum adesse, cum dolor omnis absit; Et
                                  quidem iure fortasse, sed tamen non
                                  gravissimum est testimonium multitudinis.{" "}
                                </p>
                                <p>
                                  <a
                                    className="more-link"
                                    href="2019/10/23/the-greatest-super-bowl-games-of-all-time/index.html"
                                  >
                                    Read More
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="btn btn-sm btn-dark btn-icon-right btn-dark-shadow lift position-relative"
                            href="2019/10/23/the-greatest-super-bowl-games-of-all-time/index.html"
                          >
                            Read More{" "}
                            <span className="btn-icon-holder overflow-hidden">
                              <i className="fas fa-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6"
                        data-aos="fade-left"
                        data-aos-delay={50}
                      >
                        <div
                          className="h-100 header-bg-real-estate rounded"
                          style={{
                            backgroundImage:
                              "url(assets/wp-content/uploads/2019/10/photo-1518847353400-10362d4e268a-836x517.jpg)"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
            <div className="vc_row-full-width vc_clearfix" />
            <section
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_section dark-background vc_custom_1585326140641 vc_section-has-fill"
            >
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1584117699138">
                <div className="text-white wpb_column vc_column_container vc_col-sm-12 vc_col-lg-12 vc_col-md-12">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="d-block w-100  vc_custom_1585320239781 royaltickets_title_6549fbce18fb0">
                        <h3 className="font-weight-bold mb-0 lh-1 text-center">
                          Our Partners
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="false"
                className="vc_row wpb_row vc_row-fluid"
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="row justify-content-center">
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay={0}
                        >
                          <div className="media position-relative sponsor p-5 mb-6 text-center">
                            <a href="#">
                              <img
                                src="assets/wp-content/uploads/2020/03/brand_1_white.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay={100}
                        >
                          <div className="media position-relative sponsor p-5 mb-6 text-center">
                            <a href="#">
                              <img
                                src="assets/wp-content/uploads/2020/03/brand_2_white.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <div className="media position-relative sponsor p-5 mb-6 text-center">
                            <a href="#">
                              <img
                                src="assets/wp-content/uploads/2020/03/brand_3_white.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay={300}
                        >
                          <div className="media position-relative sponsor p-5 mb-6 text-center">
                            <a href="#">
                              <img
                                src="assets/wp-content/uploads/2020/03/brand_4_white.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay={0}
                        >
                          <div className="media position-relative sponsor p-5 mb-6 text-center">
                            <a href="#">
                              <img
                                src="assets/wp-content/uploads/2020/03/brand_5_white.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay={100}
                        >
                          <div className="media position-relative sponsor p-5 mb-6 text-center">
                            <a href="#">
                              <img
                                src="assets/wp-content/uploads/2020/03/brand_6_white.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <div className="media position-relative sponsor p-5 mb-6 text-center">
                            <a href="#">
                              <img
                                src="assets/wp-content/uploads/2020/03/brand_7_white.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix" />
            </section>
            <div className="vc_row-full-width vc_clearfix" />

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
