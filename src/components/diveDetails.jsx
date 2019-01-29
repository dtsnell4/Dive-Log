import React from 'react';
import { Row, Col} from 'reactstrap';

const DiveDetails = (props) => {
  const {
    dive
  } = props;
  console.log(dive)
  return (
    <div className="container py-3 dive-details">
      {Object.keys(dive).length > 0 &&
        <div>
          <div className="mb-3">
            <span><label>Dive No.</label> <u>{dive.diveData.diveNumber}</u></span>
            <span className="float-right"><label>Date:</label> <u>{dive.diveData.diveDate}</u></span>
          </div>
          
          <h4><label>Location:</label> <u>{dive.diveData.diveLocation}</u></h4>

          <div className="dive-profile">
            <Row className="mt-5">
                <Col xs={5} className="text-right">
                  <span className="diagram-box text-center">
                    <label>SI</label>
                    {dive.diveData.diveSurfaceInterval}
                  </span>
                  <span className="diagram-box text-center">
                    <label>PG</label>
                    {dive.diveData.diveStartPressureGroup}
                  </span>
                </Col>
                <Col xs={3}>
                </Col>
                <Col xs={4}>
                  <span className="diagram-box text-center">
                    <label>PG</label>
                    {dive.diveData.diveEndPressureGroup}
                  </span>
                </Col>
            </Row>
            <div className="diagram">
              <Row>
                <Col xs={4} className="first">
                  <div className="max-depth">
                    <div>{dive.diveData.diveMaxDepth}</div>
                    <label>Max Depth</label>
                  </div>
                </Col>
                <Col xs={4} className="second">
                  <div className="bottom-time">
                    <div>
                      <div>{dive.diveData.diveBottomTime}</div>
                      <label>Bottom Time</label>
                    </div>
                  </div>
                </Col>
                <Col xs={4} className="third">
                  <div className="safety-stop">
                    <div>{dive.diveData.diveSafetyStop}</div>
                    <label>Safety Stop</label>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="my-4">
              <Col xs={8}>
                <div className="d-inline-block pr-4">
                  <label>Time In:</label> <u>{dive.diveData.diveTimeIn}</u>
                </div>
                <div className="d-inline-block">
                  <label>Time Out:</label> <u>{dive.diveData.diveTimeOut}</u>
                </div>
              </Col>
              <Col xs={4}>
                <div className="tbt">
                  <div>RNT <span className="float-right">{dive.diveData.diveRNT ? dive.diveData.diveRNT : "--"}</span></div>
                  <div>ABT+ <span className="float-right">{dive.diveData.diveABT ? dive.diveData.diveABT : "--"}</span></div>
                  <div>TBT= <span className="float-right">{dive.diveData.diveTBT ? dive.diveData.diveTBT : "--"}</span></div>
                </div>
              </Col>
            </Row>
          </div>

          <h4>Dive Characteristics</h4>
          <div><label>Environment:</label> <u>{dive.diveData.diveEnvironment ? dive.diveData.diveEnvironment : "Beach"}</u></div>
          <div className="block">
            <div className="before-block">Dive Type</div>
            <Row>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveTypeBoat ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Boat
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveTypeBeach ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Beach
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveTypeDrift ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Drift
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveTypeDeep ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Deep
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveTypeNight ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Night
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveTypeAltitude ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Altitude
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveTypeIce ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
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
                  {dive.diveData.diveActivityWreck ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Wreck
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveActivityReef ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Reef
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveActivityTraining ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Training
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveActivityPhotography ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Photo
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveActivitySpear ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Spearfishing
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveActivityLobster ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Lobstering
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveActivitySearch ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Search & Recovery
                </label>
              </Col>
              <Col xs={6} md={3}>
                <label>
                  {dive.diveData.diveActivityResearch ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                  Research
                </label>
              </Col>
            </Row>
          </div>

          <div className="block pt-2" id="conditions">
            <div className="before-block">Conditions</div>
            <Row>
              <Col>
                <div><label>Water Type:</label> <u>{dive.diveData.diveWaterType}</u></div>
                <div><label>Air Temp:</label> <u>{dive.diveData.diveAirTemp}</u></div>
                <div><label>Surface Temp:</label> <u>{dive.diveData.diveSurfaceTemp}</u></div>
                <div><label>Bottom Temp:</label> <u>{dive.diveData.diveBottomTemp}</u></div>
              </Col>
              <Col>
                <div><label>Visibility:</label> <u>{dive.diveData.diveVisibility}</u></div>
                <div><label>Surf/Seas:</label> <u>{dive.diveData.diveSurf}</u></div>
                <div><label>Current:</label> <u>{dive.diveData.diveCurrent}</u></div>
                <div><label>Surge:</label> <u>{dive.diveData.diveSurge}</u></div>
              </Col>
            </Row>
          </div>

          <h4>Equipment</h4>
          <div><label>Weight:</label> <u>{dive.diveData.diveWeight}</u></div>
          <div className="block">
            <div className="before-block">Tank</div>
            <Row>
              <Col>
                <div><label>Tank Type:</label> <u>{dive.diveData.diveTankType ? dive.diveData.diveTankType : "Steel"}</u></div>
                <div><label>Tank Size:</label> <u>{dive.diveData.diveTankSize}</u></div>
                <div><label>Gas:</label> <u>{dive.diveData.diveGasType}</u></div>
              </Col>
              <Col>
                <div><label>Start Pressure:</label> <u>{dive.diveData.diveStartPressure}</u></div>
                <div><label>End Pressure:</label> <u>{dive.diveData.diveEndPressure}</u></div>
                <div><label>Mix:</label> <u>{dive.diveData.diveNitroxMix}%</u></div>
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
                      {dive.diveData.diveExposureWetsuit ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Wetsuit
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.wetSuitMils && <u>{dive.diveData.wetSuitMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveData.diveExposureShorty ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Shorty
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.shortyMils && <u>{dive.diveData.shortyMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveData.diveExposureDrysuit ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Dry suit
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.drySuitMils && <u>{dive.diveData.drySuitMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveData.diveExposureSkin ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Dive Skin
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.skinDescription && <u>{dive.diveData.skinDescription}</u>}
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveData.diveExposureBoots ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Boots
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.bootsMils && <u>{dive.diveData.bootsMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveData.diveExposureGloves ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Gloves
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.glovesMils && <u>{dive.diveData.glovesMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveData.diveExposureHood ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Hood
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.hoodMils && <u>{dive.diveData.hoodMils} mm</u>}
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <label>
                      {dive.diveData.diveExposureVest ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
                      Vest
                    </label>
                  </Col>
                  <Col>
                    {dive.diveData.vestMils && <u>{dive.diveData.vestMils} mm</u>}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="block">
            <div><label>Buddy:</label> <u>{dive.diveData.diveBuddy}</u></div>
          </div>

          <div className="block"><label>Notes:</label> <p><u>{dive.diveData.diveNotes}</u></p></div>

        </div>
      }
    </div>
  );
};

export default DiveDetails
