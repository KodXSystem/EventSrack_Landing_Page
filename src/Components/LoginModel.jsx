import React, { useState,useEffect } from 'react';
import { Modal, Form, Button,Toast  } from 'react-bootstrap';
import {login} from'../service/service'
import { jwtDecode } from "jwt-decode";

const LoginModel = ({ show, handleCloseAlert,email }) => {

  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');
  const [alertMessage, setAlertMessage] = useState({
    message:"",
    color:""
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
  const body = { email, password} 
if(password!==""){
  try {
    const res = await login(body);
    const receivedToken = res.data.data;
    const decodedToken = jwtDecode(receivedToken);
    localStorage.setItem('myToken', receivedToken);
    localStorage.setItem('first_name', decodedToken.user.first_name)
    localStorage.setItem('email', decodedToken.user.email)
    localStorage.setItem('phone_number', decodedToken.user.phone_number)
    window.location.reload();
  if(res.data.error){
    setAlertMessage({
      message:"Incorect Password",
      color:"Danger"
    })
  }else{
    handleCloseAlert()
    setPassword("")
    setAlertMessage({
      message:"Login Successfully!",
      color:"success"
    })
    setShowAlert(true);
  }
   
  } catch (error) {
    console.error(error);
    setError('Incorrect password. Please try again.');
  }
  
}
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      setError('');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [showAlert,error]);

  return (
    <>
        <Toast
           style={{
            position: 'fixed',
            top: '9%',
            left: '86%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
             className="d-inline-block m-1"
             bg={alertMessage.color}  // Note: Use lowercase 'success' for the Bootstrap background color
             show={showAlert}
             delay={3000}
             animation={true}

           >
             <Toast.Body className='text-white'>
             {alertMessage.message} 
             </Toast.Body>
           </Toast>
    <Modal show={show} onHide={handleCloseAlert}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <input
              type="email"
              name="email"
              value={email}
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Password:</Form.Label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>  setPassword(e.target.value)}
              placeholder='Please enter the password to login'
            />
              {error && <p style={{ color: 'red' }}>{error}</p>}
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>{/* Additional footer content */}</Modal.Footer>
    </Modal>
   </> 
  );
};

export default LoginModel;