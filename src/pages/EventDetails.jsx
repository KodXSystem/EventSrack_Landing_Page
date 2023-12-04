
import React from 'react';
import './style.css'; // Import your CSS file
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

const EventDetails = () => {
const { state } = useLocation();
const searchData = state?.event;
console.log(searchData);
  return (
    <> 
      <section className="z-index-9 jarallax dark-background single-event-intro has-image-bg">
        <img
          className="jarallax-img"
          src="/assets/wp-content/uploads/2019/12/vibra-mahou-fest-1-873x1024.jpg"
          alt="Vibra Mahou Fest"
        />
        <div className="container px-0">
          <div className="row">
            <div className="col-12 text-center position-relative z-index-9 pb-14 pt-8 pt-lg-12">
              <div className="row justify-content-center">
                <div className="col-md-8 mb-13 mt-8 mt-lg-15">
                  <h1 className="royaltickets-heading mb-4 text-white text-center fw-600 mt-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '56px', color: '#ffffff' }}>
                  {searchData?.event_name}
                  </h1>
             {/* <p className="text-muted-alt text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: '#aaa7ca' }}>
                    by{" "}
                    <a
                      className="text-red text-uppercase"
                      href="../../author/user3/index.html"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: '#d9072a' }}>
                      Soho Events
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post-image-shadow" />
      </section>
      {/* END HEADER */}
      <section className="overflow-visible z-index-9 position-relative">
        <div className="container px-0">
          <div className="bg-light px-4 px-lg-8 py-4 py-lg-6 mt-n15">
            <div className="row gutter-0 bordered-inner text-left">
              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <div
                  className="px-6 py-8 aos-init aos-animate w-100"
                  data-aos="fade-up"
                >
                  <div className="d-inline-block mb-6">
                    <i className="fe fe-calendar text-dark-blue opacity_20 fs-40" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '40px', color: '#161631' }} />
                  </div>
                  <h5 className="text-dark-blue mb-2 fw-400 fs-32" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', color: '#161631' }}>
                   {moment(searchData?.event_start_date).format('DD')}{" "}-{" "}{moment(searchData?.event_end_date).format('DD')}
                  </h5>
                  <h5 className="text-muted fw-300 fs-20 mb-3 pr-lg-10" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '24px', color: '#737373' }}>{moment(searchData?.event_start_date).format('MMM-YYYY')}</h5>

                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <div
                  className="px-6 py-8 aos-init aos-animate w-100"
                  data-aos="fade-up"
                >
                  <div className="d-inline-block mb-6">
                    <i className="fe fe-map-pin text-dark-blue opacity_20 fs-40" />
                  </div>
                  <h5 className="text-dark-blue mb-2 fw-400 fs-32" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', color: '#161631' }}>
                  {searchData?.event_location}
                  </h5>
                  <h5 className="text-muted fw-300 fs-20 mb-1 pr-lg-10" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '24px', color: '#737373' }}>  </h5>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <div
                  className="px-6 py-8 aos-init aos-animate w-100"
                  data-aos="fade-up"
                >
                  <div className="d-inline-block mb-6">
                    <i className="text-dark-blue opacity_20 fs-40" />
                  </div>
                  <h5 className="text-dark-blue mb-1 fw-400 fs-32" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '32px', color: '#161631' }}>
                 NGN {" "} {searchData?.amount}/-
                  </h5>
                  <Link to={`/TicketBook`} state={{ searchData}}>
                  <a
                    className="btn-icon-right btn position-relative btn btn-danger fw-400 mt-3 lift view_tickets py-3"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', color: '#ffffff', backgroundColor: '#d9072a' }}>
                    Book a Ticket{" "}
                    <span className="btn-icon-holder overflow-hidden">
                      <i className="fas fa-ticket-alt" />
                    </span>
                    </a>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 bg-white">
        <div className="container px-0">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="row">
                <div className="col-12 col-md-10">
                  <p className="text-red text-uppercase ls-1 pb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: '#16151a' }}>
                  {searchData?.event_name} 
                  </p>
                </div>
                {/* Event Description */}
                <div className="col-12 col-md-10 mt-6 mb-10">
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: '#16151a' }}>
                  {searchData?.special_request} 
                  </p>
                  {/* <div className='image'>
                    <img
                      className="jarallax-img " style={{ width: '700px', height: '20vh' }}
                      src = {`http://192.168.1.9:3012/media/eventImage/652e3dbe63ab1a0a48096577/${searchData.banner_images[0]}`}
                      // src={`${process.env.REACT_APP_API_ENDPOINT}/media/eventImage/${event_detail?._id}/${item}`}
                      alt="Vibra Mahou Fest"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {searchData?.banner_images.length > 0 ?
        <div className="container px-5"  >
        <div>
        <ImageCarousel images={searchData?.banner_images}/>
        </div>
        </div>
         : "" }
      </section>
      <section className="pb-12" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: '#16151a', marginTop: '-200' }}>
        <div className="container px-0">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="row">
                <div className="col-12 mb-6" style={{ marginTop: '100px' }}>
                  <h3 className="mb-2 text-uppercase lh-1"> {searchData?.event_location}</h3>
                  <h4 className="lh-1- fs-18 text-muted mb-8">
                    <i className="fe fe-map-pin text-dark-blue opacity_30 mr-1 fs-90" />{" "}
                    Grant Park, 337 E Randolph St, Chicago, IL 60601, USA
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
