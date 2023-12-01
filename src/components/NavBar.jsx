import React from 'react'
import { useState,useEffect } from 'react';
import AppLogo from '../assets/logo/AppLogo.png'
import { Modal, Form, Button,Toast  } from 'react-bootstrap';
export default function NavBar() {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const nam =localStorage.getItem("first_name")
  useEffect(() => {
    setUserName(localStorage.getItem("first_name"))
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => {
 if(localStorage.getItem("first_name")){ 
    setShow(true);
 }
  }
  const handleLogOut =()=>{
    window.localStorage.clear();
    window.location.reload();
    handleClose();
  }
  return (
      <div className="header-main">
      <Modal show={show} onHide={handleClose} animation={true} centered={true}>
        <Modal.Body>Are you sure to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogOut}>
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
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
            <li className="menu-item">
           
            </li>  
            <li className="mt-3">  
            <i
                className="fas fa-user-circle fs-3 pr-2"
                aria-hidden="true"
                onClick={handleShow}
                />              
                {userName}
               {" "}
              
             </li> 
             
                          {/* <a
                            className="login-button"
                            href="/"
                          >
                            <i
                              className="fas fa-sign-in-alt"
                              aria-hidden="true"
                            />{" "}
                            Login
                          </a> */}
                        </li>
                       </li>
       
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
