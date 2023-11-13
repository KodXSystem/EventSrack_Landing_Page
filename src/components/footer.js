import React from 'react';

function Footer() {
    return (

        <div className="royaltickets-page-footer">
            <div className="container footer-container mt-12">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 mb-6">
                                <div className="sidebar w-100">
                                    {/* Sidebar */}
                                    <div className="widget widget_text">
                                        <div className="widget-content">
                                            <div className="widget-title-container">
                                                <h5 className="mb-5 text-uppercase ls-1" style={{ fontWeight: '250' }}>About Us</h5>
                                            </div>
                                            <div className="textwidget">
                                                <p>
                                                    RoyalTickets – Premium Ticket Booking WordPress Theme by{" "}
                                                    <a href="https://themeforest.net/user/fantasythemes/portfolio">
                                                        FantasyThemes
                                                    </a>
                                                    .
                                                </p>
                                                <p className="pb-0">
                                                    <i
                                                        className="fe fe-map-pin opacity_60"
                                                        style={{
                                                            width: 15,
                                                            textAlign: "center",
                                                            marginRight: 4,
                                                            color: "#676767"
                                                        }}
                                                    />
                                                    111 Wall Street, USA, New York
                                                </p>
                                                <p>
                                                    <i
                                                        className="fe fe-smartphone opacity_60"
                                                        style={{
                                                            width: 15,
                                                            textAlign: "center",
                                                            marginRight: 4,
                                                            color: "#676767"
                                                        }}
                                                    />
                                                    Phone: (123) 456-7890
                                                </p>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container footer-container">
                <div className="row justify-content-between mt-10 mb-8">
                    <div className="col-12 col-md-6 mb-6">
                        <div className="border-bottom mb-7 pb-4">
                            <a
                                className="external d-inline-block link-dark-alt fs-20 py-4 pr-8"
                                href="#"
                            >
                                <i className="fe fe-facebook" />
                            </a>
                            <a
                                className="external d-inline-block link-dark-alt fs-20 py-4 pr-8"
                                href="#"
                            >
                                <i className="fe fe-twitter" />
                            </a>
                            <a
                                className="external d-inline-block link-dark-alt fs-20 py-4 pr-8"
                                href="#"
                            >
                                <i className="fe fe-youtube" />
                            </a>
                            <a
                                className="external d-inline-block link-dark-alt fs-20 py-4 pr-8"
                                href="#"
                            >
                                <i className="fe fe-instagram" />
                            </a>
                        </div>
                        <p className="text-dark-alt">
                            Proudly powered by <a href="https://wordpress.org/">KOD X System</a> and{" "}
                            <a href="http://themeforest.net/user/fantasythemes/portfolio?ref=fantasythemes">
                                Event Track
                            </a>
                            by{" "}
                            <a href="http://themeforest.net/user/fantasythemes/portfolio?ref=fantasythemes">
                                FantasyThemes
                            </a>
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-6">
                        <div className="sidebar w-100" style={{ marginTop: '-490px' }}>
                            {/* Sidebar */}
                            <div className="widget_text widget widget_custom_html">
                                <div className="widget_text widget-content ">
                                    <div className="widget-title-container" style={{ marginBottom: '-12px' }}>
                                        <h5 className="mb-5 text-uppercase ls-1" style={{ fontWeight: '250' }}>Newsletter</h5>
                                    </div>
                                    <div className="textwidget custom-html-widget">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control no-radius"
                                                style={{ fontWeight: '200' }}
                                                placeholder="Enter Your E-mail"
                                                aria-label="Enter E-mail"
                                                aria-describedby="basic-addon2"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark btn-sm no-radius text-uppercase fs-12 px-5 ls-1"
                                                >
                                                    Subscribe
                                                    <i className="fe fe-arrow-right ml-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
