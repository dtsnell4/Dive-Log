import React from 'react';

const DiveDetails = (props) => {
  const {
    dive
  } = props;
  console.log("l", dive);
  
  return (
    <div className="container py-3 dive-details">
      {Object.keys(dive).length > 0 &&
        <div>
          <div className="mb-3">
            <span><label>Dive No.</label> <u>{dive.diveData.diveNumber}</u></span>
            <span className="float-right"><label>Date:</label> <u>{dive.diveData.diveDate}</u></span>
          </div>
          
          <h4><label>Location:</label> <u>{dive.diveData.diveLocation}</u></h4>

          <div><label>Notes:</label> <u>{dive.diveData.diveNotes}</u></div>

          <div className="block">
            <div><label>Time In:</label> <u>{dive.diveData.diveTimeIn}</u></div>
            <div><label>Time Out:</label> <u>{dive.diveData.diveTimeOut}</u></div>
            <div><label>Total:</label> <u>{dive.diveData.diveTimeOut - dive.diveData.diveTimeOut}</u></div>
          </div>
          
          <div className="block">
            <div><label>Environment:</label> <u>{dive.diveData.diveEnvironment ? dive.diveData.diveEnvironment : "Beach Dive Baby!"}</u></div>
            <div><label>Visibility:</label> <u>{dive.diveData.diveVisibility}</u></div>
            <div><label>Surf/Seas:</label> <u>{dive.diveData.diveSurf}</u></div>
            <div><label>Current:</label> <u>{dive.diveData.diveCurrent}</u></div>
            <div><label>Surge:</label> <u>{dive.diveData.diveSurge}</u></div>
          </div>

          <div className="block">
            <div><label>Air Temp:</label> <u>{dive.diveData.diveAirTemp}</u></div>
            <div><label>Surface Temp:</label> <u>{dive.diveData.diveSurfaceTemp}</u></div>
            <div><label>Bottom Temp:</label> <u>{dive.diveData.diveBottomTemp}</u></div>
          </div>

          <div className="block">
            <div><label>Tank Type:</label> <u>{dive.diveData.diveTankType ? dive.diveData.diveTankType : "Steel, Bitches"}</u></div>
            <div><label>Tank Size:</label> <u>{dive.diveData.diveTankSize}</u></div>
            <div><label>Start Pressure:</label> <u>{dive.diveData.diveStartPressure}</u></div>
            <div><label>End Pressure:</label> <u>{dive.diveData.diveEndPressure}</u></div>
          </div>
          <div className="block">
            <div><label>Weight:</label> <u>{dive.diveData.diveWeight}</u></div>
          </div>
        </div>
      }
    </div>
  );
};

export default DiveDetails
