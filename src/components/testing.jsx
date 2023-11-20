<div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1584895764298">
<div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-10">
  <div className="vc_column-inner">
    <div className="wpb_wrapper">
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
                    onChange={(e)=>handleLocationChange(e)}
                    value={searchData.selectedLocation._id} 
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
            <Link
              id="submit-search-events"
              to="/EventSearch"
              state={stateDate}
              onClick={handleSearch}
              className="btn btn-sm btn-danger fw-500 text-uppercase w-100 mb-20"
            >
              Search{" "}
            </Link>
          </div>
        </div>
      </animated.form>
    </div>
  </div>
</div>
<div className="wpb_column vc_column_container vc_col-sm-2 vc_col-lg-2 vc_hidden-md vc_hidden-sm vc_hidden-xs">
  <div className="vc_column-inner">
    <div className="wpb_wrapper" />
  </div>
</div>
</div>