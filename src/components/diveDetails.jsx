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

          <div><label>Notes:</label> <p><u>{dive.diveData.diveNotes}</u></p></div>

          <div className="block">
            <div><label>Time In:</label> <u>{dive.diveData.diveTimeIn}</u></div>
            <div><label>Time Out:</label> <u>{dive.diveData.diveTimeOut}</u></div>
            <div><label>Total:</label> <u>{dive.diveData.diveTimeOut - dive.diveData.diveTimeOut}</u></div>
          </div>

          <h3>Dive Characteristics</h3>
          <div><label>Environment:</label> <u>{dive.diveData.diveEnvironment ? dive.diveData.diveEnvironment : "Beach"}</u></div>
          <div className="block pt-2" id="conditions">
            <div className="before-block">Conditions</div>
            <Row>
              <Col>
                <div><label>Water Type:</label> <u>{dive.diveData.diveWaterType}</u></div>
                <div><label>Visibility:</label> <u>{dive.diveData.diveVisibility}</u></div>
              </Col>
              <Col>
                <div><label>Surf/Seas:</label> <u>{dive.diveData.diveSurf}</u></div>
                <div><label>Current:</label> <u>{dive.diveData.diveCurrent}</u></div>
                <div><label>Surge:</label> <u>{dive.diveData.diveSurge}</u></div>
              </Col>
            </Row>
          </div>

          <div className="block">
            <div><label>Air Temp:</label> <u>{dive.diveData.diveAirTemp}</u></div>
            <div><label>Surface Temp:</label> <u>{dive.diveData.diveSurfaceTemp}</u></div>
            <div><label>Bottom Temp:</label> <u>{dive.diveData.diveBottomTemp}</u></div>
          </div>

          <h3>Equipment</h3>
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
                      {dive.diveData.diveExposureWetsuit && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
                      {dive.diveData.diveExposureShorty && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
                      {dive.diveData.diveExposureDrysuit && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
                      {dive.diveData.diveExposureSkin && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
                      {dive.diveData.diveExposureBoots && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
                      {dive.diveData.diveExposureGloves && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
                      {dive.diveData.diveExposureHood && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
                      {dive.diveData.diveExposureVest && <i className="fa fa-check-square-o"></i> || <i className="fa fa-square-o"></i>}
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
        </div>
      }
    </div>
  );
};

export default DiveDetails
