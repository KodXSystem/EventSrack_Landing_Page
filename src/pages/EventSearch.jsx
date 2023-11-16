import React from 'react'

export default function EventFound() {
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
            <form
              id="royaltickets-search-form"
              className="overflow-visible"
              action="#"
              method="GET"
              data-aos="fade-left"
              data-aos-delay={0}
            >
              <div className="bg-light rounded px-6 pt-7 pb-4 overflow-visible events-search-form">
                <div className="form-row">
                  <div className="col-lg mb-3 mb-lg-0">
                    <div className="form-row">
                      <div className="col-lg-3 col-sm-12">
                        {/* Filter */}
                        <div className="position-relative">
                          <div className="title">What</div>
                          <select
                            className="chosen-select"
                            name="category"
                            data-bg-color="#ffffff"
                            data-icon=""
                            data-size-dropdown="large"
                          >
                            <option value={0}>Select Category</option>
                            <option value="arts-theater">
                              Arts &amp; Theater
                            </option>
                            <option value="concerts">Concerts</option>
                            <option value="conference">Conference</option>
                            <option value="family">Family</option>
                            <option value="festivals">Festivals</option>{" "}
                          </select>
                        </div>
                        {/* End Filter */}
                      </div>
                      <div className="col-lg-3 col-sm-12">
                        {/* Filter */}
                        <div className="position-relative">
                          <div className="title">Where</div>
                          <select
                            className="chosen-select"
                            name="city"
                            data-bg-color="#ffffff"
                            data-icon=""
                            data-size-dropdown="large"
                          >
                            <option value="">Select Location</option>
                            <option value="brooklyn">Brooklyn</option>
                            <option value="chicago">Chicago</option>
                            <option value="new-york">New York</option>
                            <option value="san-jose">San Jose</option>{" "}
                          </select>
                        </div>
                        {/* End Filter */}
                      </div>
                      <div className="col-lg-3 col-sm-12">
                        {/* Filter */}
                        <div className="position-relative">
                          <div className="title">When</div>
                          <input
                            className="flatpickr form-control form-control-sm bg-white"
                            name="dates"
                            type="text"
                            placeholder="Date range"
                            data-flatpickr=""
                            data-alt-input="true"
                            data-mode="range"
                            data-date-format="Y-m-d"
                            data-alt-format="F j"
                            data-default-date="2023-11-07 to 2023/11/14"
                          />
                        </div>
                        {/* End Filter */}
                      </div>
                      <div className="col-lg-3 col-sm-12">
                        {/* Filter */}
                        <div className="position-relative">
                          <div className="title">Keyword</div>
                          <input
                            type="text"
                            className="form-control bg-white mb-20"
                            name="keyword"
                            placeholder="..."
                            defaultValue=""
                          />
                        </div>
                        {/* End Filter */}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <a
                      id="submit-search-events"
                      href="#"
                      className="btn btn-sm btn-danger fw-500 text-uppercase w-100 mb-20"
                    >
                      Search{" "}
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}
