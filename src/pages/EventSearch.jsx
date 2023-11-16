import React from 'react'
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import NaijaStates from 'naija-state-local-government';
import axios from 'axios';
import 'flatpickr/dist/themes/light.css';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { getSearch,getLocation,getCategory } from '../service/service';

export default function EventFound() {
  let { state } = useLocation();
  const [searchData, setSearchData] = useState({
    selectedCategory: state?.selectedCategory,
    selectedLocation: "",
    startDate: "",
    endDate: ""
  });
  const [selectedState, setSelectedState] = useState(state?.selectedLocation);
  const [dateRange, setDateRange] = useState(state?.date);
  const [showForm, setShowForm] = useState(false);

  const [LocationApiData, setLocationApiData] = useState(null);
  const [CategoryApiData, setCategoryApiData] = useState(null);

  useEffect(() => {
    getLocation()
      .then(response => {
        setLocationApiData(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      getCategory()
      .then(response => {
        setCategoryApiData(response.data.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 

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
      startDate: moment(dateRange[0]).format('YYYY-MM-DD'),
      endDate: moment(dateRange[1]).format('YYYY-MM-DD'),
    });
  };

  // console.log(searchData);
  const handleStateChange = (e) => {
    const Location = LocationApiData.find(item => item._id == e.target.value);
   
    if (Location) {
      setSearchData({
        ...searchData,
        selectedLocation: {
          id: Location._id,
          name: Location.title
        }
      });
  }
  }
  const handleCategory=(e)=>{
    const selectedCategory = CategoryApiData.find(item => item._id === e.target.value);
    if (selectedCategory) {
      setSearchData({
        ...searchData,
        selectedCategory: {
          id: selectedCategory._id,
          name: selectedCategory.category_name
        }
      });
  }
  }
  const handleSearch = () => {
    getSearch(searchData)
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
                                          onChange={(e)=> handleCategory(e)}
                                          value={searchData.selectedCategory._id} 
                                          >
                                            <option value={0}>
                                              Select Category
                                            </option>
                                            {CategoryApiData?.map((item,index) => (
                                              <option value={item._id} key={item._id}>
                                               {item.category_name}
                                              </option>
                                                 ))}
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
                            value={searchData.selectedLocation._id} 
                            onChange={(e)=>handleStateChange(e)}
                          >
                            <option value="">
                              Select Location
                            </option>
                            {LocationApiData?.map((item,index) => (
                              <option value={item._id} key={item._id}>
                               {item.title}
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
                            style={{ border: '1px solid #999' }}
                            options={{
                              mode: 'range',
                              altInput: true,
                              altFormat: "F j",
                              dateFormat: "Y-m-d",
                              onClose: handleDateChange
                            }}
                            placeholder="Pick a date"
                            value={dateRange} />
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
