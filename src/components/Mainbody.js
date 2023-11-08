import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Mainbody() {
    return (
        <section
            data-vc-full-width="true"
            data-vc-full-width-init="false"
            className="vc_section vc_custom_1585309849019"
        >
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                            <div className="d-block w-100  vc_custom_1585645531235 royaltickets_title_6549fbce1ab27">
                                <p className="subtitle text-left">Testimonials</p>
                                <h3 className="font-weight-bold mb-0 lh-1 text-left">
                                    Hear From Our Organizers
                                </h3>
                            </div>
                            <div className="row ">
                                <div className="col-12" data-aos="fade-left" data-aos-delay={0}>
                                    <div className="owl-carousel owl-theme testimonials-carousel-alt">
                                        <div className="item rounded">
                                            <div
                                                className="px-6 py-8 rounded bg-light"
                                                data-aos="fade-up"
                                            >
                                                <h5 className="mb-4 lh-1">Great Features</h5>
                                                <p className="pb-0 fs-16">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Sed bibendum venenatis neque eget tristique!
                                                </p>
                                                <div className="media align-items-center mt-6">
                                                    <div className="avatar avatar-xl mr-4">
                                                        <img
                                                            className="img-fluid rounded-circle"
                                                            src="wp-content/uploads/2020/02/user-1-150x150.jpg"
                                                            alt="Great Features"
                                                        />
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="d-block fs-90 text-warning">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <h5 className="fs-18 mb-0 lh-1 py-2 fw-400">
                                                            Brittney BARTON
                                                        </h5>
                                                        <p className="small pb-0 text-muted">02/15/2020</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item rounded">
                                            <div
                                                className="px-6 py-8 rounded bg-light"
                                                data-aos="fade-up"
                                            >
                                                <h5 className="mb-4 lh-1">Awesome Support!</h5>
                                                <p className="pb-0 fs-16">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Sed bibendum venenatis neque eget tristique!
                                                </p>
                                                <div className="media align-items-center mt-6">
                                                    <div className="avatar avatar-xl mr-4">
                                                        <img
                                                            className="img-fluid rounded-circle"
                                                            src="wp-content/uploads/2020/02/user-2-150x150.jpg"
                                                            alt="Awesome Support!"
                                                        />
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="d-block fs-90 text-warning">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <h5 className="fs-18 mb-0 lh-1 py-2 fw-400">
                                                            Alex MCQUEEN
                                                        </h5>
                                                        <p className="small pb-0 text-muted">02/15/2020</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <OwlCarousel className='owl-theme' loop margin={10} nav>
                                            <div className="item rounded">
                                                <div
                                                    className="px-6 py-8 rounded bg-light"
                                                    data-aos="fade-up"
                                                >
                                                    <h5 className="mb-4 lh-1">Unique Features!</h5>
                                                    <p className="pb-0 fs-16">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Sed bibendum venenatis neque eget tristique!
                                                    </p>
                                                    <div className="media align-items-center mt-6">
                                                        <div className="avatar avatar-xl mr-4">
                                                            <img
                                                                className="img-fluid rounded-circle"
                                                                src="wp-content/uploads/2020/02/user-3-150x150.jpg"
                                                                alt="Unique Features!"
                                                            />
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="d-block fs-90 text-warning">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <h5 className="fs-18 mb-0 lh-1 py-2 fw-400">
                                                                John DOE
                                                            </h5>
                                                            <p className="small pb-0 text-muted">02/15/2020</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item rounded">
                                                <div
                                                    className="px-6 py-8 rounded bg-light"
                                                    data-aos="fade-up"
                                                >
                                                    <h5 className="mb-4 lh-1">Great Service</h5>
                                                    <p className="pb-0 fs-16">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Sed bibendum venenatis neque eget tristique!
                                                    </p>
                                                    <div className="media align-items-center mt-6">
                                                        <div className="avatar avatar-xl mr-4">
                                                            <img
                                                                className="img-fluid rounded-circle"
                                                                src="wp-content/uploads/2020/02/user-7-100x100-1.jpg"
                                                                alt="Great Service"
                                                            />
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="d-block fs-90 text-warning">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <h5 className="fs-18 mb-0 lh-1 py-2 fw-400">
                                                                Michael MOORE
                                                            </h5>
                                                            <p className="small pb-0 text-muted">02/15/2020</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item rounded">
                                                <div
                                                    className="px-6 py-8 rounded bg-light"
                                                    data-aos="fade-up"
                                                >
                                                    <h5 className="mb-4 lh-1">Awesome Support!</h5>
                                                    <p className="pb-0 fs-16">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Sed bibendum venenatis neque eget tristique!
                                                    </p>
                                                    <div className="media align-items-center mt-6">
                                                        <div className="avatar avatar-xl mr-4">
                                                            <img
                                                                className="img-fluid rounded-circle"
                                                                src="wp-content/uploads/2020/02/user-2-150x150.jpg"
                                                                alt="Awesome Support!"
                                                            />
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="d-block fs-90 text-warning">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <h5 className="fs-18 mb-0 lh-1 py-2 fw-400">
                                                                Alex MCQUEEN
                                                            </h5>
                                                            <p className="small pb-0 text-muted">02/15/2020</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Mainbody;
