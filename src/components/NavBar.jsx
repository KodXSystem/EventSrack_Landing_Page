import React from 'react'
import AppLogo from '../assets/logo/AppLogo.png'
export default function NavBar() {
  return (
      <div className="header-main">
    <div className="container-wide">
      <div className="d-flex justify-content-between align-items-center h-100 position-relative px-lg-4">
        <div className="logo-main">
          <a className="logo-wrapper logo-dark" href="/">
            <img
               src={AppLogo}
              alt="Logo"
            />{" "}
          </a>
          {/* <a className="logo-wrapper logo-light" href="../index.html">
            <img
              src={AppLogo}
              alt="Logo"
            />{" "}
          </a> */} 
        </div>
        <div className="royaltickets-menu-wrapper">
          <a
            href="#"
            className="royaltickets-trigger icon-mobile-menu mobile-menu"
          >
            <span className="icon-wrap royaltickets-middle-line" />
            <span className="icon-wrap royaltickets-top-line" />
            <span className="icon-wrap royaltickets-bottom-line" />
          </a>
        </div>
        <div className="main-menu-wrapper">
          <ul className="main-menu">
            <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6094   ft-menu-width-default  ft-menu-position-default ">
              <a
                className="nav-link menu-button-6094"
                href="../contact-us/index.html"
              >
                <span className="">Contact Us</span>
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page   cta-button ft-menu-item-48   ft-menu-width-default  ft-menu-position-default ">
            <li className="menu-login-register-button menu-item ml-4">
                          <a
                            className="login-button"
                            href="/"
                            data-toggle="modal"
                            data-target="#loginRegisterModal"
                          >
                            <i
                              className="fas fa-sign-in-alt"
                              aria-hidden="true"
                            />{" "}
                            Login/Register
                          </a>
                        </li>
                       </li>
            <li className="menu-item">
              <a
                href="#"
                className="sidebarmenu-action-button rounded-menu-button d-inline-flex align-items-center justify-content-center h4 mb-0 fs-20"
              >
                <span className="fe fe-menu align-middle" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
