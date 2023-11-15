import React from 'react'
import { useState } from 'react';
import Footer from '../layout/Footer'

export default function TicketBook() {
    const [quantity, setQuantity] = useState(1);
    const [rows, setRows] = useState([
        [
            { id: 1},
            {
                label: 'Full Name',
                name: 'ticket-name',
                id: '1',
                defaultValue: '',
                placeholder: 'Enter your name'
            },
            {
                label: 'Email Address',
                name: 'ticket-email',
                id: '2',
                defaultValue: '',
                placeholder: 'Enter your email'
            },
            {
                label: 'Phone Number',
                name: 'ticket-phone',
                id: '3',
                defaultValue: '',
                placeholder: 'Enter your phone number'

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
                        name: 'ticket-name',
                        id: '1',
                        defaultValue: '',
                        placeholder: 'Enter your name'
                    },
                    {
                        label: 'Email Address',
                        name: 'ticket-email',
                        id: '2',
                        defaultValue: '',
                        placeholder: 'Enter your email'
                    },
                    {
                        label: 'Phone Number',
                        name: 'ticket-phone',
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
        <div><>
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
                                            <h4 className="mb-0 fw-400 fs-28 lh-1 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '28px', lineHeight: '28px', color: '#16151a' }}>IT Conference</h4>
                                            <p className="text-muted pb-0 fs-16" style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: '#737373' }}>
                                                <i className="fe fe-map-pin text-dark-blue opacity_30 mr-2" />
                                                San Jose Civic{" "}
                                                <i className="fe fe-calendar text-dark-blue opacity_30 ml-3 mr-2" />
                                                17 April 8:00 am
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
                                                    $149
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
                                        <div className="position-relative mb-6 border rounded p-3 " key={index}>
                                          <h3>{index === 0 ? 'Personal Details' : `Atendies ${rowArray[0].id}`}</h3>
                                            {rowArray.slice(1).map((row) => (
                                                <div key={row.id}>
                                                    <label className="form-label text-uppercase font-weight-bold fs-14 mb-2">
                                                        {row.label}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-2 "
                                                        name={row.name}
                                                        id={row.id}
                                                        defaultValue={row.defaultValue}
                                                        placeholder={row.placeholder} // Include placeholder attribute here
                                                    />
                                                </div>
                                            ))}
                                            {index !== 0 && (
                                             <button
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
                                        defaultValue="Stripe"
                                    />
                                    <label
                                        className="w-100 rt-custom-control-label cursor-pointer d-inline-flex px-4 py-4 rounded align-items-center justify-content-center text-muted fw-40 lh-1"
                                        htmlFor="creditCardPayment"
                                    >
                                        <span className="credit-card opacity_40" title="credit-card" />{" "}
                                        Pay Stack{" "}
                                    </label>
                                    <form
                                        name="royaltickets_checkout"
                                        method="post"
                                        className="d-none royaltickets_payment_form"
                                        action="https://royaltickets.fantasythemes.net/demo06/stripe-charge-page/"
                                    >
                                        <div className="payment-method-block stripe-method">
                                            <div className="form-group">
                                                <div className="royaltickets_stripe_simple"></div>
                                                <input
                                                    type="hidden"
                                                    id="order_pay"
                                                    name="order_pay"
                                                    defaultValue={1}
                                                />
                                                <input
                                                    type="hidden"
                                                    name="title"
                                                    className="stripe_title"
                                                    defaultValue="Day 1: Standard Ticket"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="amount"
                                                    className="stripe_amount"
                                                    defaultValue={1}
                                                />
                                                <input
                                                    type="hidden"
                                                    id="buyer_message"
                                                    name="buyer_message"
                                                    defaultValue=""
                                                />
                                                <input type="hidden" name="userID" defaultValue={0} />
                                                <input
                                                    type="hidden"
                                                    id="pay_amount"
                                                    className="stripe_pay_amount"
                                                    name="pay_amount"
                                                    defaultValue={149}
                                                />
                                                <input
                                                    type="hidden"
                                                    id="stripeToken"
                                                    name="stripeToken"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="stripeEmail"
                                                    name="stripeEmail"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="stripeName"
                                                    name="stripeName"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="stripePhone"
                                                    name="stripePhone"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="parentTicketID"
                                                    name="parentTicketID"
                                                    defaultValue={259}
                                                />
                                                <input
                                                    type="hidden"
                                                    id="ticketID"
                                                    name="ticketID"
                                                    defaultValue={260}
                                                />
                                                <input
                                                    type="hidden"
                                                    id="eventID"
                                                    name="eventID"
                                                    defaultValue={258}
                                                />
                                                <input
                                                    type="hidden"
                                                    id="return_link"
                                                    name="return_link"
                                                    defaultValue="https://royaltickets.fantasythemes.net/demo06/ticket/it-conference-april-17-2048-800-am/"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 rt-custom-control custom-radio mb-6">
                                    {/* <input
                  type="radio"
                  id="paypalPayment"
                  name="payment"
                  className="custom-control-input"
                  defaultValue="PayPal"
                />
                <label
                  className="w-100 rt-custom-control-label cursor-pointer d-inline-flex px-4 py-4 rounded align-items-center justify-content-center text-muted fw-40 lh-1"
                  htmlFor="paypalPayment"
                >
                  <span className="paypal" title="PayPal" />
                </label>
                <input
                  type="hidden"
                  name="paypal-security"
                  id="paypal-security"
                  defaultValue="6f2f61a523"
                />
                <input
                  type="hidden"
                  name="title"
                  className="paypal_title"
                  defaultValue="Days 1 - 2: Vip Ticket"
                />
                <input
                  type="hidden"
                  name="amount"
                  className="paypal_amount"
                  defaultValue={1}
                />
                <input
                  type="hidden"
                  id="paypal_amount"
                  className="paypal_pay_amount"
                  name="pay_amount"
                  defaultValue={300}
                />
                <input
                  type="hidden"
                  id="paypal_parentTicketID"
                  name="paypal_parentTicketID"
                  defaultValue={259}
                />
                <input
                  type="hidden"
                  id="paypal_ticketID"
                  name="paypal_ticketID"
                  defaultValue={260}
                />
                <input
                  type="hidden"
                  id="paypal_eventID"
                  name="paypal_eventID"
                  defaultValue={258}
                />
                <input
                  type="hidden"
                  id="paypal_return_link"
                  name="return_link"
                  defaultValue=""
                /> */}
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 rt-custom-control custom-radio mb-6">
                                    {/* <input
                  type="radio"
                  id="payfastPayment"
                  name="payment"
                  className="custom-control-input"
                  defaultValue="PayFast"
                />
                <label
                  className="w-100 rt-custom-control-label cursor-pointer d-inline-flex px-4 py-4 rounded align-items-center justify-content-center text-muted fw-40 lh-1"
                  htmlFor="payfastPayment"
                >
                  <span className="payfast" title="PayFast" />
                </label>
                <form
                  id="payfast-buy-now-form"
                  action="https://sandbox.payfast.co.za/eng/process"
                  method="post"
                >
                  <input
                    name="merchant_id"
                    type="hidden"
                    defaultValue={10010040}
                  />
                  <input
                    name="merchant_key"
                    type="hidden"
                    defaultValue="1vjshc8ss3fdo"
                  />
                  <input
                    name="return_url"
                    type="hidden"
                    defaultValue="https://royaltickets.fantasythemes.net/demo06/ticket/it-conference-april-17-2048-800-am/?payfast=success"
                  />
                  <input
                    name="cancel_url"
                    type="hidden"
                    defaultValue="https://royaltickets.fantasythemes.net/demo06/ticket/it-conference-april-17-2048-800-am/"
                  />
                  <input
                    name="notify_url"
                    type="hidden"
                    defaultValue="https://royaltickets.fantasythemes.net/demo01/wp-content/plugins/royaltickets/functions/payfast-charge.php"
                  />
                  <input name="name_first" type="hidden" defaultValue="FName4" />
                  <input name="name_last" type="hidden" defaultValue="LName4" />
                  <input
                    name="m_payment_id"
                    id="payfast_id"
                    type="hidden"
                    defaultValue={260}
                  />
                  <input
                    name="amount"
                    id="payfast_price"
                    type="hidden"
                    defaultValue={300.0}
                  />
                  <input
                    name="item_name"
                    id="payfast_name"
                    type="hidden"
                    defaultValue="Days 1 - 2: Vip Ticket"
                  />
                  <input name="item_description" type="hidden" defaultValue="" />
                  <input name="custom_int1" type="hidden" defaultValue={259} />
                  <input
                    name="custom_int2"
                    id="payfast_ticketID"
                    type="hidden"
                    defaultValue={260}
                  />
                  <input name="custom_int3" type="hidden" defaultValue={258} />
                  <input
                    name="custom_int4"
                    id="payfast_amount"
                    type="hidden"
                    defaultValue={1}
                  />
                  <input name="custom_int5" type="hidden" defaultValue={0} />
                  <input
                    name="custom_str1"
                    id="payfast_buyer_name"
                    type="hidden"
                    defaultValue=""
                  />
                  <input
                    name="custom_str2"
                    id="payfast_buyer_phone"
                    type="hidden"
                    defaultValue=""
                  />
                  <input
                    name="email_address"
                    id="payfast_buyer_email"
                    type="hidden"
                    defaultValue="user4@user-mail.net"
                  />
                </form> */}
                                </div>
                                <div className="col-12 text-right pt-4 pb-8">
                                    <a
                                        href="#"
                                        id="place-order"
                                        className="btn position-relative btn btn-danger fw-400 mt-3 lift view_tickets py-3 px-10"
                                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '14px', color: '#ffffff', backgroundColor: '#d9072a' }}>

                                        Place Order
                                    </a>
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
