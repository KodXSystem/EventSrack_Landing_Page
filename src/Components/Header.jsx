import React from "react";
import NavBar from './NavBar';
const Header = () => {
  const today = new Date();
  // console.log(today)
  return (
    <div>
        <section className="section-header menu-style-default menu-color-default">
          <div id="header" className="sticky-header visible-header">
            <div className="header-top">
              <div className="container-wide">
                <div className="row px-lg-4">
                  <div className="col-12 d-flex justify-content-between">
                    <div className="header-info-left d-inline-flex align-items-center py-3">
                      <span className="d-flex align-items-center fs-14">
                        <i className="fe fe-calendar mr-3 opacity_50 fs-90 align-middle" />
                        <div className="d-none">
                          <div id="offset">0</div>
                          <div id="date-format">F j, Y</div>
                          <div id="time-format">g:i a</div>
                          <div >{Date()}</div>
                          <input type="hidden" id="final_date" />
                        </div>
                        <span className="date_and_time" />
                      </span>
                      <span className="px-4 fs-6 opacity_30 lh-1">
                        <i className="fas fa-circle" />
                      </span>
                      {/*Header office phone*/}
                      <span className="d-flex align-items-center fs-14">
                        <i className="fe fe-phone mr-3 opacity_50 fs-90 align-middle" />
                        <span>
                          <a href="tel:(123)456-7890">(123) 456-7890</a>
                        </span>
                      </span>
                    </div>
                    <div className="d-inline-flex">
                      <ul className="main-menu top-menu ml-auto">
                        <li className="menu-item menu-social-links">
                          <a
                            href="#"
                            className="external align-items-center d-flex"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="menu-item menu-social-links">
                          <a
                            href="#"
                            className="external align-items-center d-flex"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="menu-item menu-social-links">
                          <a
                            href="#"
                            className="external align-items-center d-flex"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="menu-item menu-social-links">
                          <a
                            href="#"
                            className="external align-items-center d-flex"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NavBar/>
          </div>
        </section>
    </div>
  );
};

export default Header;
