import React from 'react'
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import NaijaStates from 'naija-state-local-government';
import axios from 'axios';
import 'flatpickr/dist/themes/light.css'; 
import moment from 'moment';
import { useLocation } from 'react-router-dom';
export default function EventFound() {
  let { state } = useLocation();
  const [searchData, setSearchData] = useState({
         selectedCategory:state?.selectedCategory,
         selectedLocation:"",
         startDate:"",
         endDate:""
               });
  const [selectedState, setSelectedState] = useState(state?.selectedLocation);
  const [dateRange, setDateRange] = useState(state?.date);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = useSpring({
    opacity: showForm ? 1 : 0,
    from: { opacity: 0 },
  });

  const handleDateChange = (dateRange) => {
    setDateRange(dateRange);
    setSearchData({
      ...searchData,
      startDate:  moment(dateRange[0]).format('YYYY-MM-DD'),
      endDate: moment(dateRange[1]).format('YYYY-MM-DD'),
    });
  };

  // console.log(searchData);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
      setSearchData({
      ...searchData,
      selectedLocation: event.target.value
    })
  } 
  const handleSearch=()=>{
const apiUrl = 'https://example.com/api/data';
axios.post(apiUrl, searchData)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }
  return (
    <>
    <section className="royaltickets-page-title mt-10">
      <div className="container px-0 d-flex justify-content-between align-items-end">
        <h3 className="mb-0 lh-1 w-auto d-inline-block">Simple Layout</h3>
        <span className="float-right fs-16 text-muted lh-1 mb-0 text-right">
          6 Events found
        </span>
      </div>
    </section>
    <section className="royaltickets-page-title mt-8">
      <div className="container px-0">
        <div className="row mb-8">
          <div className="col-12">
          <animated.form
                                id="royaltickets-search-form"
                                className="overflow-visible"
                                action="https://royaltickets.fantasythemes.net/demo06/simple-layout"
                                method="GET"
                                style={fadeIn}
                              >
                                <div className="form-row shadow bg-white rounded px-6 pt-7 pb-4 overflow-visible events-search-form">
                                  <div className="col-lg mb-3 mb-lg-0">
                                    <div className="form-row">
                                      <div className="col-md-4 col-sm-12" >
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">What</div>
                                          <select
                                            className="chosen-select"
                                            name="category"
                                            value={searchData.selectedCategory}
                                          onChange={(e)=>  setSearchData({
                                            ...searchData,
                                            selectedCategory: e.target.value
                                          })}
                                          >
                                            <option value={0}>
                                              Select Category
                                            </option>
                                            <option value="arts-theater">
                                              Arts &amp; Theater
                                            </option>
                                            <option value="concerts">
                                              Concerts
                                            </option>
                                            <option value="conference">
                                              Conference
                                            </option>
                                            <option value="family">
                                              Family
                                            </option>
                                            <option value="festivals">
                                              Festivals
                                            </option>
                                          </select>
                                        </div>
                                        {/* End Filter */}
                                      </div>
                                      <div className="col-md-4 col-sm-12" >
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">Where</div>
                                          <select
                                            className="chosen-select"
                                            name="city"
                                            value={selectedState} 
                                            onChange={handleStateChange}
                                          >
                                            <option value="">
                                              Select Location
                                            </option>
                                            {NaijaStates.states()?.map((state,index) => (
                                              <option value={state}>
                                               {state}
                                              </option>
                                                 ))}
                                          </select>
                                        </div>
                                        
                                        {/* End Filter */}
                                      </div>
                                      <div className="col-md-4 col-sm-12" >
                                        
                                        {/* Filter */}
                                        <div className="position-relative">
                                          <div className="title">When</div>
                                          <Flatpickr
                                           style={{border :'1px solid #999'}}
                                            options={{
                                            mode: 'range',
                                            altInput: true,
                                            altFormat: "F j",
                                            dateFormat: "Y-m-d", 
                                            onClose: handleDateChange 
                                          }}
                                          placeholder="Pick a date"
                                           value={dateRange}/>
                                        </div>
                                        {/* End Filter */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-auto">
                                    <a
                                      id="submit-search-events"
                                      onClick={handleSearch}
                                      className="btn btn-sm btn-danger fw-500 text-uppercase w-100 mb-20"
                                    >
                                      Search{" "}
                                    </a>
                                  </div>
                                </div>
          </animated.form>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}
