import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Moment from 'react-moment';
import Tooltip from './common/tooltip'

const DiveDetails = (props) => {
  const {
    dive,
    isUS,
  } = props;

  return (
    <div className="container py-5 dive-details">
      {Object.keys(dive).length > 0 &&
        <div>
          <Button className="btn-edit" color="success" size="sm">Edit</Button>
          <div className="mb-3">
            <span><label>Dive No.</label> <u>{dive.diveNumber}</u></span>
            <span className="float-right"><label>Date:</label> <u><Moment format="M/D/YYYY" date={dive.diveDate} /></u></span>
          </div>
          <h4><label>Location:</label> <u>{dive.diveLocation}</u></h4>

          <div className="dive-profile">
            <Row className="mt-5">
                <Col xs={5} className="text-right">
                  <Tooltip message="Surface Interval" width="3.9rem">
                    <span className="diagram-box text-center">
                      <label>SI</label>
                      <i className="fa fa-question-circle text-danger"></i>
                      {dive.diveSurfaceInterval}
                    </span>
                  </Tooltip>
                  <Tooltip message="Starting Pressure Group">
                    <span className="diagram-box text-center">
                      <label>PG</label>
                      <i className="fa fa-question-circle text-danger"></i>
                      {dive.diveStartPressureGroup}
                    </span>
                  </Tooltip>
                </Col>
                <Col xs={3}>
                </Col>
                <Col xs={4}>
                  <Tooltip message="Ending Pressure Group" width="8rem">
                    <span className="diagram-box text-center">
                      <label>PG</label>
                      <i className="fa fa-question-circle text-danger"></i>
                      {dive.diveEndPressureGroup}
                    </span>
                  </Tooltip>
                </Col>
            </Row>
            <div className="diagram">
              <Row>
                <Col xs={4} className="first">
                  <div className="max-depth">
                    <div>{dive.diveMaxDepth}{isUS ? "ft" : "m"}</div>
                    <label>Max Depth</label>
                  </div>
                </Col>
                <Col xs={4} className="second">
                  <div className="bottom-time">
                    <div>
                      <div>{dive.diveBottomTime}min</div>
                      <label>Bottom Time</label>
                    </div>
                  </div>
                </Col>
                <Col xs={4} className="third">
                  <div className="safety-stop">
                    <div>{dive.diveSafetyStop ? <span>{dive.diveSafetyStop}</span> : <span>&nbsp;</span>}</div>
                    <label>Safety Stop</label>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="my-4">
              <Col xs={8}>
                <div className="d-inline-block pr-4">
                  <label>Time In:</label> <u><Moment parse="h:mm" format="h:mm a" date={dive.diveTimeIn} /></u>
                </div>
                <div className="d-inline-block">
                  <label>Time Out:</label> <u><Moment parse="h:mm" format="h:mm a" date={dive.diveTimeOut} /></u>
                </div>
              </Col>
              <Col xs={4}>
                <div className="tbt">
                  <div>RNT <span className="float-right">{dive.diveRNT ? dive.diveRNT : "--"}</span></div>
                  <div>ABT+ <span className="float-right">{dive.diveABT ? dive.diveABT : "--"}</span></div>
                  <div>TBT= <span className="float-right">{dive.diveTBT ? dive.diveTBT : "--"}</span></div>
                </div>
              </Col>
            </Row>
          </div>

          <h4>Dive Characteristics</h4>
          <div><label>Environment:</label> <u>{dive.diveEnvironment ? dive.diveEnvironment : "Beach"}</u></div>
          <div className="block">
            <div className="before-block">Dive Type</div>
            <Row>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveTypeBoat ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Boat
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveTypeBeach ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Beach
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveTypeDrift ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Drift
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveTypeDeep ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Deep
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveTypeNight ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Night
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveTypeAltitude ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Altitude
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveTypeIce ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Ice
                </label>
              </Col>
            </Row>
          </div>

          <div className="block">
            <div className="before-block">Activities</div>
            <Row>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivityWreck ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Wreck
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivityReef ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Reef
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivityTraining ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Training
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivityPhotography ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Photo
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivitySpear ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Spearfishing
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivityLobster ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Lobstering
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivitySearch ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Search & Recovery
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveActivityResearch ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Research
                </label>
              </Col>
            </Row>
          </div>

          <div className="block pt-2" id="conditions">
            <div className="before-block">Conditions</div>
            <Row>
              <Col>
                <div><label>Water Type:</label> <u>{dive.diveWaterType}</u></div>
                <div><label>Air Temp:</label> <u>{dive.diveAirTemp}{isUS ? "°F" : "°C"}</u></div>
                <div><label>Surface Temp:</label> <u>{dive.diveSurfaceTemp}{isUS ? "°F" : "°C"}</u></div>
                <div><label>Bottom Temp:</label> <u>{dive.diveBottomTemp}{isUS ? "°F" : "°C"}</u></div>
              </Col>
              <Col>
                <div><label>Visibility:</label> <u>{dive.diveVisibility}{isUS ? "ft" : "m"}</u></div>
                <div><label>Surf/Seas:</label> <u>{dive.diveSurf}{isUS ? "ft" : "m"}</u></div>
                <div><label>Current:</label> <u>{dive.diveCurrent}</u></div>
                <div><label>Surge:</label> <u>{dive.diveSurge}</u></div>
              </Col>
            </Row>
          </div>

          <h4>Equipment</h4>
          <div><label>Weight:</label> <u>{dive.diveWeight}{isUS ? "lbs" : "kg"}</u></div>
          <div className="block">
            <div className="before-block">Tank</div>
            <Row>
              <Col>
                <div><label>Tank Type:</label> <u>{dive.diveTankType ? dive.diveTankType : "Steel"}</u></div>
                <div><label>Tank Size:</label> <u>{dive.diveTankSize}{isUS ? "cu.ft." : "l"}</u></div>
                <div><label>Gas:</label> <u>{dive.diveGasType}</u></div>
              </Col>
              <Col>
                <div><label>Start Pressure:</label> <u>{dive.diveStartPressure}{isUS ? "psi" : "bar"}</u></div>
                <div><label>End Pressure:</label> <u>{dive.diveEndPressure}{isUS ? "psi" : "bar"}</u></div>
                <div><label>Mix:</label> <u>{dive.diveNitroxMix}%</u></div>
              </Col>
            </Row>
          </div>
          <div className="block">
            <div className="before-block">Exposure</div>
            <Row>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureWetsuit ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Wetsuit
                    </label>
                  </Col>
                  <Col>
                    {dive.wetSuitMils && <u>{dive.wetSuitMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureShorty ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Shorty
                    </label>
                  </Col>
                  <Col>
                    {dive.shortyMils && <u>{dive.shortyMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureDrysuit ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Dry suit
                    </label>
                  </Col>
                  <Col>
                    {dive.drySuitMils && <u>{dive.drySuitMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureSkin ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Dive Skin
                    </label>
                  </Col>
                  <Col>
                    {dive.skinDescription && <u>{dive.skinDescription}</u>}
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureBoots ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Boots
                    </label>
                  </Col>
                  <Col>
                    {dive.bootsMils && <u>{dive.bootsMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureGloves ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Gloves
                    </label>
                  </Col>
                  <Col>
                    {dive.glovesMils && <u>{dive.glovesMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureHood ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Hood
                    </label>
                  </Col>
                  <Col>
                    {dive.hoodMils && <u>{dive.hoodMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveExposureVest ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Vest
                    </label>
                  </Col>
                  <Col>
                    {dive.vestMils && <u>{dive.vestMils} mm</u>}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="block"><label>Notes:</label> <p><u>{dive.diveNotes}</u></p></div>

          <div>
            <label>Verification:</label> 
            <div className="signature">
              {dive.signature && <img alt="Signature" src={dive.signature} />}
            </div>
            {dive.diveBuddy}
            <Row>
              <Col xs={4}>
                <label>
                  {dive.diveBuddyType === "Buddy" ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Buddy
                </label>
              </Col>
              <Col xs={4} className="d-block d-sm-none">
                <label>
                  {dive.diveBuddyType === "Divemaster" ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  DM
                </label>
              </Col>
              <Col xs={4} className="d-none d-sm-block">
                <label>
                  {dive.diveBuddyType === "Divemaster" ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Divemaster
                </label>
              </Col>
              <Col xs={4}>
                <label>
                  {dive.diveBuddyType === "Instructor" ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Instructor
                </label>
              </Col>
            </Row>
            <div>Certification No. <u>7938724</u></div>
          </div>


        </div>
      }
    </div>
  );
};

export default DiveDetails
