import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Paystack from '../assets/logo/Paystack.png'
import moment from 'moment';
import { buyTicket } from "../service/service"
import { PaystackButton } from "react-paystack";


export default function TicketBook() {

    const location = useLocation();
    const searchData = location.state?.searchData;
    console.log("Ticket show here------------", searchData);

    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState([]);


    const [rows, setRows] = useState([
        [
            { id: 1 },
            {
                label: 'Full Name',
                name: 'first_name',
                id: '1',
                defaultValue: '',
                placeholder: 'Enter your name'
            },
            {
                label: 'Email Address',
                name: 'email',
                id: '2',
                defaultValue: '',
                placeholder: 'Enter your email'
            },
            {
                label: 'Phone Number',
                name: 'phone_number',
                id: '3',
                defaultValue: '',
                placeholder: 'Enter your phone number'

            },
            {
                label: 'Password',
                name: 'password',
                id: '4',
                defaultValue: '',
                placeholder: 'Enter your password'

            },
            {
                label: 'Confirm Password',
                name: 'confirmPassword',
                id: '5',
                defaultValue: '',
                placeholder: 'Enter your confirm password'

            }
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
                        label: 'Full Name',
                        name: 'first_name',
                        id: '1',
                        defaultValue: '',
                        placeholder: 'Enter your name'
                    },
                    {
                        label: 'Email Address',
                        name: 'email',
                        id: '2',
                        defaultValue: '',
                        placeholder: 'Enter your email'
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
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const event_id = searchData?.[0]._id;
        const parentEmail = "";
        const dataArr = rows.map((rowArray) => {
            const rowData = rowArray.slice(1).reduce((acc, row) => {
                acc[row.name] = formData[rowArray[0].id][row.name];
                acc['event_id'] = event_id
                return acc;
            }, {});
            return rowData;
        });

        console.log(formData)
        console.log(dataArr)

        const data = {
            dataArr, searchData
        }
        console.log('Converted Form Data:', data);


        // buyTicket(data)
        // Add your logic to handle the form data
    };
 

    const componentProps = {
    //     email,
    //     amount: searchData?.[0].amount * quantity,
    //     currency: "ZAR",
    //     metadata: {
    //       name,
    //       phone,
    //     },
    //     publicKey,
    //     className: `${
    //       eventDetail?.joined_customers
    //         ?.map((ite) => ite?.customer_id)
    //         .includes(currentUser?.data?._id)
    //         ? "btn btn-warning"
    //         : "btn btn-primary"
    //     }`,
    //     text: `This amount includes VAT. Click here to Pay Now  ${eventDetail?.amount * (rowsData?.length || 1)} ZAR`,
    //     // ref: (props.type == "customer" ? "c_" : "v_") + props.ref,
    //     onSuccess: ({ reference }) => {
    //       setIsPaying(true);
    //       const data = {
    //         account_id: currentUser?.data?._id,
    //         event_id: eventDetail?._id,
    //         payment_id: reference,
    //         payment_method: "Paystack",
    //         points_available: eventDetail?.add_event_point,
    //         amount: eventDetail?.amount * (rowsData?.length || 1),
    //         currency: "ZAR",
    //         status: UserRequestEventStatuses(
    //           eventDetail?.joined_customers?.filter(
    //             (item) =>
    //               item?.customer_id?.user_detail?.account_id ===
    //               currentUser?.data?._id
    //           )?.[0]?.event_status || "Pending For Payment"
    //         ),
    //       };
    //       payNowPaystack(data);
    //     },
    //     onClose: () => console.log("Wait! don't go!!!!"),
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

    return (
        <div>
            <>
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
                                                <h4 className="mb-0 fw-400 fs-28 lh-1 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '28px', lineHeight: '28px', color: '#16151a' }}>{searchData?.[0].event_name}</h4>
                                                <p className="text-muted pb-0 fs-16" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: '#737373' }}>
                                                    <i className="fe fe-map-pin text-dark-blue opacity_30 mr-2" />
                                                    {" "}{searchData?.[0].event_location}
                                                    <i className="fe fe-calendar text-dark-blue opacity_30 ml-3 mr-2" />
                                                    {moment(searchData?.[0].event_start_date).format('DD-MMM')}
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-4 align-items-center- d-flex justify-content-end payment-wrapper">
                                            </div>
                                            <div className="col-12 col-md-2 align-items-center d-flex justify-content-end payment-wrapper">
                                                <div className="royaltickets-qty d-flex align-items-center justify-content-end">
                                                    <span className="minus" onClick={decrement}>-</span>
                                                    <input
                                                        type="number"
                                                        className="count mb-0"
                                                        name="ticket-amount"
                                                        value={quantity}
                                                        readOnly
                                                    />
                                                    <span className="plus" onClick={increment} >+</span>
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
                                                        NGN {searchData?.[0].amount * quantity}/-
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
                                        <form onSubmit={handleSubmit}>
                                            {rows.map((rowArray, index) => (
                                                <div className="position-relative mb-6 border rounded p-3" key={index}>
                                                    <h3>{index === 0 ? 'Personal Details' : `Attendees ${rowArray[0].id}`}</h3>
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
                                        </form>
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
                                        defaultValue="Stripe"
                                    />
                                        <label
                                            className="w-50 rt-custom-control-label cursor-pointer d-inline-flex px-6 py-2 rounded align-items-center justify-content-center text-muted fw-40 lh-1"
                                            htmlFor="creditCardPayment"
                                        >
                                        <PaystackButton {...componentProps} />
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
                                            className="btn position-relative btn btn-danger fw-400 mt-3 lift view_tickets py-3 px-10"
                                            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', color: '#ffffff', backgroundColor: '#d9072a' }}
                                            onClick={handleSubmit}>

                                            Place Order
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
