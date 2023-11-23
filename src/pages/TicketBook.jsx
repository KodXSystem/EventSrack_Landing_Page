import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Paystack from '../assets/logo/Paystack.png'
import moment from 'moment';
import { buyTicket,getAccounts } from "../service/service"
import { PaystackButton } from "react-paystack";
import SweetAlert from 'react-bootstrap-sweetalert';

export default function TicketBook() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const searchData = state?.searchData;
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState([]);
    const [isPaying, setIsPaying] = useState(false);
    const [res, setRes] = useState('')
    const [data1, setData1] = useState('')
    const [selectedPayment, setSelectedPayment] = useState('');

    const [rows, setRows] = useState([
        [
            { id: 1 },
            {
                label: 'Email Address',
                name: 'email',
                id: '2',
                defaultValue: '',
                placeholder: 'Enter your email'
            },
            {
                label: 'Password',
                name: 'password',
                id: '4',
                defaultValue: '',
                placeholder: 'Enter your password'

            },
            {
                label: 'Full Name',
                name: 'first_name',
                id: '1',
                defaultValue: '',
                placeholder: 'Enter your name'
            },
            {
                label: 'Phone Number',
                name: 'phone_number',
                id: '3',
                defaultValue: '',
                placeholder: 'Enter your phone number'

            },
        ]
    ]);

    const increment = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            console.log('New Quantity:', newQuantity);
            return newQuantity;
        });
        setRows(prevRows => {
            const updatedRows = [
                ...prevRows,
                [
                    { id: quantity + 1 },
                    {
                        label: 'Email Address',
                        name: 'email',
                        id: '2',
                        defaultValue: '',
                        placeholder: 'Enter your email'
                    },
                    {
                        label: 'Full Name',
                        name: 'first_name',
                        id: '1',
                        defaultValue: '',
                        placeholder: 'Enter your name'
                    },
                    {
                        label: 'Phone Number',
                        name: 'phone_number',
                        id: '3',
                        defaultValue: '',
                        placeholder: 'Enter your phone number'

                    }
                ]
            ];
            console.log('Updated Rows:', updatedRows);
            return updatedRows;
        });
    };
    const decrement = (index) => {
        console.log(index);
        if (quantity > 1 && rows.length > 1) {
            setQuantity(prevQuantity => {
                const newQuantity = prevQuantity - 1;
                console.log('New Quantity:', newQuantity);
                return newQuantity;
            });

            setRows(prevRows => {
                const updatedRows = [...prevRows]; // Create a copy of the rows array
                updatedRows.pop(); // Remove the last row
                console.log('Updated Rows:', updatedRows);
                return updatedRows;
            });
        }
    };

    const handleInputChange = (id, name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [id]: {
                ...prevData[id],
                [name]: value,
            },
        }));
    };


    const payNowPaystack = async (data) => {
        try {
            data = {
                ...data1,
                data,
                no_of_tickets_sold:quantity
            }

            const res = await buyTicket(data)
            if (res) {
                navigate("/");
            }

        } catch (error) {
            console.log(error)
        }


    };


    const handleSubmit = () => {
        const event_id = searchData?._id;
        const attendenceArr = rows?.map((rowArray) => {
            const rowData = rowArray?.slice(1).reduce((acc, row) => {
                acc[row?.name] = formData[rowArray[0].id][row?.name];
                acc['event_id'] = event_id
                return acc;
            }, {});
            return rowData;
        });
        setRes(attendenceArr)
        const data = {
            attendenceArr, searchData
        }
        console.log('Converted Form Data:', data);
        setData1(data)
    };

    const componentProps = {
        email: res[0]?.email,
        amount: searchData?.amount * quantity * 100,
        currency: "ZAR",
        metadata: {
            name: res[0]?.first_name,
            phone: res[0]?.phone_number,
        },
        publicKey: "pk_test_9602064c9e4c80969049c9d7743ca8d8aee1a2ad",
        text: `Paystack Pay Now`,
        onSuccess: ({ reference }) => {
            setIsPaying(true);
            const data = {
                account_id: "fakeId",
                event_id: searchData?._id,
                payment_id: reference,
                payment_method: "Paystack",
                points_available: searchData?.add_event_point,
                amount: searchData?.amount * quantity,
                currency: "ZAR",
                status: "Approved"
            };
            console.log(data)
            payNowPaystack(data);
        },
        onClose: () => console.log("Wait! don't go!!!!"),
    };


    const handleRemoveRow = (idToRemove) => {
        const updatedRows = rows.filter((row) => row[0].id !== idToRemove);
        setRows(updatedRows);
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
            console.log('New Quantity:', newQuantity);
            return newQuantity;
        });
    };
    console.log(formData[1]?.email,"submited form data is here" );
console.log(formData,"submited form data is here" );

 const handleEmailConfirm= (name,value) => {
   if(name==="email"){
    try {
        const res = getAccounts(value)
    } catch (error) {
        console.log(error)
    }
    setShow(true)
    }
  };
  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };
 const handleCloseAlert = () => {
    setShow(false)
  };


    return (
        <div>
            <>
            <SweetAlert
            warning
          show={show}
          confirmBtnBsStyle="danger"
          title="Your email already exist!"
          text="Your Email Already Exist!"
          onConfirm={handleCloseAlert}
          onCancel={handleCloseAlert}
                />
                <section className="z-index-9 jarallax has-image-bg">
                    <img
                        className="jarallax-img"
                        src="/assets/wp-content/uploads/2019/12/vibra-mahou-fest-1-873x1024.jpg"
                    />
                    <div className="container px-0">
                        <div className="row">
                            <div className="col-12 position-relative z-index-9">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 my-11">
                                        <h2 className="royaltickets-heading mb-4 text-white text-center fw-600" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 600, fontSize: '40px', lineHeight: '56px', color: '#ffffff' }}>
                                            Complete Your Purchase
                                        </h2>
                                    </div>
                                </div>
                                <div className=" bg-light-darkened mb-n11">
                                    <div className="w-100 py-9 px-10">
                                        <div className="row">
                                            <div id="message-wrapper" className="col-12"></div>
                                            <div className="col-12 col-md-6">
                                                <h4 className="mb-0 fw-400 fs-28 lh-1 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '28px', lineHeight: '28px', color: '#16151a' }}>{searchData?.event_name}</h4>
                                                <p className="text-muted pb-0 fs-16" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: '#737373' }}>
                                                    <i className="fe fe-map-pin text-dark-blue opacity_30 mr-2" />
                                                    {" "}{searchData?.event_location}
                                                    <i className="fe fe-calendar text-dark-blue opacity_30 ml-3 mr-2" />
                                                    {moment(searchData?.event_start_date).format('DD-MMM')}
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-4 align-items-center- d-flex justify-content-end payment-wrapper">
                                            </div>
                                            <div className="col-12 col-md-2 align-items-center d-flex justify-content-end payment-wrapper" >
                                                <div className="royaltickets-qty d-flex align-items-center justify-content-end">
                                                    <button className="minus" onClick={decrement} >-</button>
                                                    <input
                                                        type="number"
                                                        className="count mb-0"
                                                        name="ticket-amount"
                                                        value={quantity}
                                                        readOnly
                                                    />
                                                    <button className="plus" onClick={increment}   disabled={formData[1]?.email=== "" ||formData?.length === 0  ? true: false}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-wrapper w-100 border-top border-dark py-7 px-11">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="w-100 text-right">
                                                    <p className="text-muted pb-0 fs-16 text-right lh-1 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '16px', lineHeight: '16px', color: '#737373' }}>
                                                        Subtotal
                                                    </p>
                                                    <h4
                                                        id="ticket-subtotal"
                                                        className="mb-0 fw-500 text-right lh-1"
                                                        style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 500, fontSize: '30px', lineHeight: '30px', color: '#16151a' }}
                                                    >
                                                        NGN {searchData?.amount * quantity}/-
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-image-shadow" />
                </section>
                {/* END HEADER */}
                {/* INTRO & TICKETS */}
                <section className="pt-14 pb-12">
                    <div className="container px-0 pt-3">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8">
                                <div className="row mb-3">
                                    <div>
                                        {rows.map((rowArray, index) => (
                                            <div className="position-relative mb-6 border rounded p-3" key={index}>
                                                <h3>{index === 0 ? 'Personal Details' : `Attendees ${rowArray[0].id-1}`}</h3>
                                                {rowArray.slice(1).map((row) => (
                                                    <div key={row.id}>
                                                        <label className="form-label text-uppercase font-weight-bold fs-14 mb-2">
                                                            {row.label}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control mb-2"
                                                            name={row.name}
                                                            id={row.id}
                                                            defaultValue={row.defaultValue}
                                                            placeholder={row.placeholder}
                                                            onChange={(e) => handleInputChange(rowArray[0].id, row.name, e.target.value)}
                                                            onBlur={(e)=>handleEmailConfirm(row.name, e.target.value)}
                                                        />
                                                    </div>
                                                ))}
                                                {index !== 0 && (
                                                    <button
                                                        type="button"
                                                        className="close p-3"
                                                        onClick={() => handleRemoveRow(rowArray[0].id)}
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                )}
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div>
                                </div>
                                <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 500, fontSize: '30px', lineHeight: '36px', color: '#16151a' }}>Payment Method</h4>
                                <div className="row payment-types pt-4 payment-wrapper justify-content-end">
                                    <div className="col-12 col-md-6 col-lg-4 rt-custom-control custom-radio mb-6">
                                        <input
                                            type="radio"
                                            id="creditCardPayment"
                                            name="payment"
                                            className="custom-control-input"
                                            defaultChecked=""
                                            value="Stripe"
                                            checked={selectedPayment === 'Stripe'}
                                            onChange={handlePaymentChange}
                                        />
                                        <label
                                            className="w-50 rt-custom-control-label cursor-pointer d-inline-flex px-6 py-2 rounded align-items-center justify-content-center text-muted fw-40 lh-1"
                                            htmlFor="creditCardPayment"
                                        >

                                            <img src={Paystack}
                                                alt="Logo" />

                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 rt-custom-control custom-radio mb-6">
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 rt-custom-control custom-radio mb-6">
                                    </div>
                                    <div className="col-12 text-right pt-4 pb-8">
                                        <button
                                            id="place-order"
                                            className="btn position-relative btn btn-danger fw-400 mt-3 lift view_tickets py-1 px-1"
                                            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', color: '#ffffff', backgroundColor: '#d9072a' }}
                                            onClick={handleSubmit}
                                            disabled={formData[1]?.email=== "" ||formData?.length === 0 || selectedPayment!=="Stripe"  ? true: false}
                                        >
                                            <PaystackButton className="paystack-button py-3 px-10" {...componentProps} />
                                        </button>
                                    </div>
                                </div>
                                <div className="row mt-10">
                                    <div className="col-12">
                                        <div
                                            className="bordered px-6 py-5 mb-6 d-inline-block w-100"
                                            role="alert"
                                        >
                                            <h5 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 500, fontSize: '22px', lineHeight: '26px', color: '#16151a' }}>
                                                <i className="fe fe-lock opacity_60 mr-3 fs-90" />
                                                Your Information is Safe
                                            </h5>
                                            <p className="opacity_70 fs-16 pb-0" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: '#16151a' }}>
                                                We respect your privacy and do not tolerate spam and will
                                                never sell, rent, lease or give away your information to any
                                                third party. Nor will we send you unsolicited email.
                                            </p>{" "}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div
                                            className="bordered px-6 py-5 md-inline-block w-100"
                                            role="alert"
                                        >
                                            <h5 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 500, fontSize: '22px', lineHeight: '26px', color: '#16151a' }}>
                                                <i className="fe fe-shield opacity_60 mr-3 fs-90" />
                                                Secure Checkout
                                            </h5>
                                            <p className="opacity_70 fs-16 pb-0" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: '#16151a' }}>
                                                All information is encrypted and transmitted without risk
                                                using a Secure Sockets Layer protocol. You can trust us!
                                            </p>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}
