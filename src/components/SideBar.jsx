import React from 'react'

export default function SideBar() {
  return (
 <>
        {/* ========== SIDEMENU ========== */}
        <div id="side-menu-controller" className="side-menu-panel">
          <div className="side-menu-panel-header mb-4 pt-10 px-8">
            <i className="close" />
          </div>
          <div id="side-menu-wrapper" className="pb-8 px-8 pt-6">
            <div className="row">
              <div className="col-12">
                <div className="sidebar w-100">
                  {/* Sidebar */}
                  <div className="widget widget_nav_menu mb-8">
                    <div className="widget-content">
                      <div className="widget-title-container">
                        <h5 className="mb-5 text-uppercase ls-1">Menu</h5>
                      </div>
                      <div className="side-menu-separator mb-6" />
                      <div className="menu-about-us-container">
                        <ul id="menu-about-us" className="menu">
                          <li
                            id="menu-item-6374"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6374"
                          >
                            <a href="#">Become Organizer</a>
                          </li>
                          <li
                            id="menu-item-348"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-348"
                          >
                            <a href="#">Who We Are</a>
                          </li>
                          <li
                            id="menu-item-350"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-350"
                          >
                            <a href="#">Ticketing 101</a>
                          </li>
                          <li
                            id="menu-item-349"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-349"
                          >
                            <a href="#">Our Blog</a>
                          </li>
                          <li
                            id="menu-item-352"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-352"
                          >
                            <a href="#">Work With Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  <div className="widget widget_text mb-8">
                    <div className="widget-content">
                      <div className="widget-title-container">
                        <h5 className="mb-5 text-uppercase ls-1">
                          Social Network
                        </h5>
                      </div>
                      <div className="side-menu-separator mb-6" />{" "}
                      <div className="textwidget">
                        <p>
                          <a className="d-inline-block pr-6 pb-3" href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a className="d-inline-block pr-6 pb-3" href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a className="d-inline-block pr-6 pb-3" href="#">
                            <i className="fab fa-instagram" />
                          </a>
                          <a className="d-inline-block pr-6 pb-3" href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  <div className="widget widget_text mb-8">
                    <div className="widget-content">
                      {" "}
                      <div className="textwidget">
                        <p>
                          <small className="text-muted">
                            2020 Copyright © RoyalTickets – Events Booking
                            WordPress Theme. Made with{" "}
                            <i className="fas fa-heart fs-12 text-hearth" /> by{" "}
                            <a
                              className="fw-500"
                              href="https://themeforest.net/user/fantasythemes/portfolio"
                              target="_blank"
                              rel="noopener"
                            >
                              FantasyThemes
                            </a>
                            . Powered by{" "}
                            <a className="fw-500" href="#">
                              WordPress
                            </a>
                            .
                          </small>
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
        {/* ========== END SIDEMENU ========== */}
 </>
  )
}
