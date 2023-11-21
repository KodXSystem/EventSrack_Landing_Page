import React from 'react'
import { useLocation } from 'react-router-dom';
import Search from "../components/Search"
import Event from '../components/Event';

export default function EventFound() {

  const { state } = useLocation();
  const searchData = state?.searchData;
  console.log("searchData is here now in event search-----", searchData);

  return (
    <>
      <section className="royaltickets-page-title mt-10">
        <div className="container px-0 d-flex justify-content-between align-items-end">
          <h3 className="mb-0 lh-1 w-auto d-inline-block">Simple Layout</h3>
          <span className="float-right fs-16 text-muted lh-1 mb-0 text-right">
            {state.res.length} Events found
          </span>
        </div>
      </section>

      <Search searchData={searchData} />

      <div style={{ marginTop: '170px', marginLeft: "100px" }}>
        {state.res.length > 0 ? <>
          <h4>Result</h4>
          <Event Events={state?.res } />
        </> : <h4>No Event Found</h4>}
      </div>

    </>

  )
}
