import React from "react";
import "./col.css";
import { Link } from "react-router-dom";

function CollegesPredictor() {
  return (
    <>
      <Link to="/tools">
        <h2 className="my-6 text-[20px] font-semibold text-center text-[#303030] sm:text-[1.5rem]">
          Percentile Predictor
        </h2>
        <div className="col">
          <h3 className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-[#FCFCFC] text-[20px] w-full p-5 text-center">
            Predict Your Percentile Based On Your Marks
          </h3>
          <h4 className="absolute text-[#FCFCFC] z-10 left-1/2 transform -translate-x-1/2 bottom-3">
            Click Here To Know
          </h4>
        </div>
      </Link>
    </>
  );
}

export default CollegesPredictor;
