import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBTypography,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody
} from "mdb-react-ui-kit";
import "./style.css"
export default function Testimonials() {
    return (

        <MDBContainer className="py-10 " style={{ marginBottom: "-140px", }}>
            <MDBCarousel showControls >
                <div className="d-block w-100 mt-10 vc_custom_1585645531235 royaltickets_title_6549fbce1ab27" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '35px', lineHeight: '35px' }}>
                    <p className="subtitle text-left">Testimonials</p>
                    <h3 className="font-weight-bold mb-0 lh-1 text-left">
                        Hear From Our Organizers
                    </h3>
                </div>
                <MDBCarouselItem className="active" >
                    <MDBContainer style={{marginLeft:'-18px'}}>
                        <MDBRow className="text-start  ">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0">
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBContainer style={{marginLeft:'-18px'}}>
                        <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBContainer style={{marginLeft:'-18px'}}>
                        <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                                <MDBCard bg="black" shadow="0" >
                                    <MDBCardBody className="gray-card d-flex flex-column justify-content-center align-items-center" style={{ height: '300px', width: '400px', borderRadius: '4px' }}>

                                        <h5 className="font-normal mt-4 " style={{ marginLeft: "-140px", fontFamily: "Montserrat, sans-serif", }}>Awesome Support!</h5>
                                        <p className="mb-3 " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', lineHeight: '26px', marginLeft: "-80px" }}>
                                            Lorem ipsum dolor sit amet, consectetur<br /> adipisicing  elit. Quod eos id officiis hic tequ<br />
                                            ae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <div className="d-flex inline-flex" style={{ marginLeft: "-160px", }}>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle custom-image" // Apply the custom class
                                                alt="Anna Deynah"
                                            /><div className="ml-4" style={{ marginTop: "-10px", }}>
                                                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0" style={{ marginLeft: "-27px", }}>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                    <li>
                                                        <MDBIcon
                                                            fas
                                                            icon="star"
                                                            size="sm"
                                                            className="text-warning"
                                                        />
                                                    </li>
                                                </MDBTypography>
                                                <h6 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Anna Deynah</h6>
                                                <p className="small text-muted mb-0" style={{ fontFamily: "Montserrat, sans-serif", }}>02/15/2020</p></div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCarouselItem>
            </MDBCarousel>
            </MDBContainer>
    );
}