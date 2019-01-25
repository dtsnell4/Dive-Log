import React from 'react';
import { Button, ModalFooter, Modal, ModalHeader, ModalBody, Row, Col, FormGroup, Label } from 'reactstrap';//, Input, FormGroup, Label, Row, Col, CustomInput
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
// import FormInput from './common/formInput';
// import CustomInput from './common/customInput';
// import Background from '../images/fish.jpg';

// import * as Utilities from '../utilities/utilities';
import { connect } from 'react-redux'

const AddDive = (props) => {
  const {
    handleSaveData,
    handleValidate,
    submitting,
    toggleModal,
    modalOpen,
    nextDiveNumber,
    existingDive,
    validateDiveNumber,
  } = props;

  // console.log(props)
  return (
    <div className="add-dive container mb-5">
{/*      <div className="background-image" style={{backgroundImage: "url(" + Background + ")"}}></div>
*/}      <h3 className="mt-2 text-shadow text-white">Enter A Dive</h3>
      <Formik
        enableReinitialize
        validateOnChange={false}
        initialValues={{ 
          diveNumber: nextDiveNumber,
        }}
        validate={values => {
          return handleValidate(values);
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSaveData(values, setSubmitting, resetForm);
        }}
      >
        {({ 
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          isValidating
        }) => (
          <Form>
            <FormGroup>
              <Label className="text-shadow" for="diveNumber">Dive Number</Label>
              <Field className="bubble form-control" validate={validateDiveNumber} type="number" name="diveNumber" id="diveNumber" placeholder="Dive Number" />
              <ErrorMessage name="diveNumber">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label className="text-shadow" for="diveDate">Date</Label>
              <Field className="bubble form-control" label="" type="date" name="diveDate" id="diveDate" placeholder="Date" />
              <ErrorMessage name="diveDate">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label className="text-shadow" for="diveLocation">Location</Label>
              <Field className="bubble form-control" label="" type="text" name="diveLocation" id="diveLocation" placeholder="Dive Site Name" />
              <ErrorMessage name="diveLocation">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label className="text-shadow" for="diveVisibility">Visibility</Label>
              <Field className="bubble form-control" label="" type="text" name="diveVisibility" id="diveVisibility" placeholder="Visibility" />
              <ErrorMessage name="diveVisibility">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label className="text-shadow" for="diveAirTemp">Air Temperature</Label>
              <Field className="bubble form-control" label="" type="text" name="diveAirTemp" id="diveAirTemp" placeholder="Air Temperature" />
              <ErrorMessage name="diveAirTemp">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label className="text-shadow" for="diveSurfaceTemp">Surface Temperature</Label>
              <Field className="bubble form-control" label="" type="text" name="diveSurfaceTemp" id="diveSurfaceTemp" placeholder="Surface Temperature" />
              <ErrorMessage name="diveSurfaceTemp">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label className="text-shadow" for="diveBottomTemp">Bottom Temperature</Label>
              <Field className="bubble form-control" label="" type="text" name="diveBottomTemp" id="diveBottomTemp" placeholder="Bottom Temperature" />
              <ErrorMessage name="diveBottomTemp">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
{/*            <Row>
              <Col xs={{ size: 5 }}>
                <Field className="bubble" label="Weight" type="text" name="diveWeight" id="diveWeight" placeholder="Weight" component={FormInput} />
              </Col>
              <Col xs={{ size: 7 }}>
                <FormGroup>
                  <Label className="text-shadow" for="diveWeightUnits">Units</Label>
                  <div>
                    <Field className="bubble" type="radio" name="diveWeightUnits" id="weightLbs" label="lb" inline component={CustomInput} />
                    <Field className="bubble" type="radio" name="diveWeightUnits" id="weightKgs" label="kg" inline component={CustomInput} />
                  </div>
                </FormGroup>
              </Col>
            </Row>*/}
    {/*        <FormGroup>
              <Label for="diveExposure">Exposure Protection</Label>
              <Row>
                <Col xs={{ size: 5}}>
                  <CustomInput type="checkbox" id="diveExposureWetsuit" label="Wet suit" />
                </Col>
                <Col xs={{ size: 7}}>
                  <Row>
                    <Col xs={8}>
                      <Input type="number" name="wetSuitMils" id="wetSuitMils" bsSize="sm" />
                    </Col>
                    <Label xs={4}>mil</Label>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 5}}>
                  <CustomInput type="checkbox" id="diveExposureDrysuit" label="Dry suit" />
                </Col>
                <Col xs={{ size: 7}}>
                  <Row>
                    <Col xs={8}>
                      <Input type="number" name="drySuitMils" id="drySuitMils" bsSize="sm" />
                    </Col>
                    <Label xs={4}>mil</Label>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 5}}>
                  <CustomInput type="checkbox" id="diveExposureBoots" label="Boots" />
                </Col>
                <Col xs={{ size: 7}}>
                  <Row>
                    <Col xs={8}>
                      <Input type="number" name="bootsMils" id="bootsMils" bsSize="sm" />
                    </Col>
                    <Label xs={4}>mil</Label>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 5}}>
                  <CustomInput type="checkbox" id="diveExposureGloves" label="Gloves" />
                </Col>
                <Col xs={{ size: 7}}>
                  <Row>
                    <Col xs={8}>
                      <Input type="number" name="glovesMils" id="glovesMils" bsSize="sm" />
                    </Col>
                    <Label xs={4}>mil</Label>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 5}}>
                  <CustomInput type="checkbox" id="diveExposureHood" label="Hood" />
                </Col>
                <Col xs={{ size: 7}}>
                  <Row>
                    <Col xs={8}>
                      <Input type="number" name="bootsMils" id="bootsMils" bsSize="sm" />
                    </Col>
                    <Label xs={4}>mil</Label>
                  </Row>
                </Col>
              </Row>
            </FormGroup>*/}
    {/*        <Label className="text-shadow">Conditions</Label>
            <FormGroup>
              <Label for="diveWaterType">Water Type</Label>
              <div>
                <Field className="bubble" type="radio" name="diveWaterType" id="saltWater" label="Salt" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveWaterType" id="freshWater" label="Fresh" inline component={CustomInput} />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="diveEntry">Entry</Label>
              <div>
                <Field type="radio" name="diveEntry" id="entryShore" label="Beach/Shore" inline component={CustomInput} />
                <Field type="radio" name="diveEntry" id="entryBoat" label="Boat" inline component={CustomInput} />
              </div>
            </FormGroup>
            <Label for="diveSurf">Surf/Wave Height</Label>
            <Row>
              <Col xs={{ size: 4 }}>
                <Field className="bubble" type="number" name="diveSurf" id="diveSurf" component={FormInput} />
              </Col>
              <Col xs={{ size: 7 }}>
                  <div>
                    <Field className="bubble" type="radio" name="diveSurf" id="surfFeet" label="ft" inline component={CustomInput} />
                    <Field className="bubble" type="radio" name="diveSurf" id="surfMeters" label="m" inline component={CustomInput} />
                  </div>
              </Col>
            </Row>
            <FormGroup>
              <Label for="diveSurge">Surge</Label>
              <div>
                <Field className="bubble" type="radio" name="diveSurge" id="surgeNone" label="None" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveSurge" id="surgeMild" label="Mild" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveSurge" id="surgeModerate" label="Moderate" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveSurge" id="surgeStrong" label="Strong" inline component={CustomInput} />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="diveCurrent">Current</Label>
              <div>
                <Field className="bubble" type="radio" name="diveCurrent" id="currentNone" label="None" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveCurrent" id="currentMild" label="Mild" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveCurrent" id="currentModerate" label="Moderate" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveCurrent" id="currentStrong" label="Strong" inline component={CustomInput} />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="diveEnvironment">Environment</Label>
              <div>
                <Field className="bubble" type="radio" name="diveEnvironment" id="diveEnvironment" label="Wreck" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveEnvironment" id="diveEnvironment" label="Reef" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveEnvironment" id="diveEnvironment" label="Lake" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveEnvironment" id="diveEnvironment" label="River" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveEnvironment" id="diveEnvironment" label="Quarry" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveEnvironment" id="diveEnvironment" label="Intracoastal" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveEnvironment" id="diveEnvironment" label="Pool" inline component={CustomInput} />
              </div>
            </FormGroup>
            <FormGroup>
              <Field className="bubble" type="time" name="diveTimeIn" id="diveTimeIn" label="Time In" component={FormInput} />
            </FormGroup>
            <FormGroup>
              <Field className="bubble" type="time" name="diveTimeOut" id="diveTimeOut" label="Time Out" component={FormInput} />
            </FormGroup>
            <Label for="diveTankSize">Tank Size</Label>
            <Row>
              <Col xs={{ size: 4 }}>
                <FormGroup>
                  <Field className="bubble" type="number" name="diveTankSize" id="diveTankSize" component={FormInput} />
                </FormGroup>
              </Col>
              <Col xs={{ size: 8 }}>
                <div>
                  <Field className="bubble" type="radio" name="tankSize" id="tankSizeCf" label="cf" inline component={CustomInput} />
                  <Field className="bubble" type="radio" name="tankSize" id="tankSizeLitres" label="Liters" inline component={CustomInput} />
                </div>
              </Col>
            </Row>
            <Label for="diveTankSize">Tank Type</Label>
            <FormGroup>
              <div>
                <Field className="bubble" type="radio" name="diveTankSize" id="tankTypeSteel" label="Steel" inline component={CustomInput} />
                <Field className="bubble" type="radio" name="diveTankSize" id="tankTypeAlum" label="Alum" inline component={CustomInput} />
              </div>
            </FormGroup>
            <Label for="diveStartPressure">Start Pressure</Label>
            <Row>
              <Col xs={{ size: 4 }}>
                  <Field className="bubble" type="number" name="diveStartPressure" id="diveStartPressure" component={FormInput} />
              </Col>
              <Col xs={{ size: 8 }}>
                <FormGroup>
                  <div>
                    <Field className="bubble" type="radio" name="startPressure" id="startPressurePsi" label="PSI" inline component={CustomInput} />
                    <Field className="bubble" type="radio" name="startPressure" id="startPressureBar" label="BAR" inline component={CustomInput} />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Label for="diveStartPressure">End Pressure</Label>
            <Row>
              <Col xs={{ size: 4 }}>
                  <Field className="bubble" type="number" name="diveEndPressure" id="diveEndPressure" component={FormInput} />
              </Col>
              <Col xs={{ size: 8 }}>
                  <div>
                    <Field className="bubble" type="radio" name="endPressure" id="endPressurePsi" label="PSI" inline component={CustomInput} />
                    <Field className="bubble" type="radio" name="endPressure" id="endPressureBar" label="BAR" inline component={CustomInput} />
                  </div>
              </Col>
            </Row>
            <Field className="bubble" label="Notes" type="textarea" name="diveNotes" id="diveNotes" placeholder="Add your thoughts about the dive here" component={FormInput} />
    */}
            {/*<Input type="submit" value="Save Dive" color="primary" disabled={submitting} />*/}
            <div className=" text-center">
              <Button className="save-dive-button bubble mb-3" type="submit" disabled={submitting}><span>Save</span></Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <Modal isOpen={modalOpen} toggle={toggleModal} backdrop >
          <ModalHeader>Dive Number exists</ModalHeader>
          <ModalBody>
            You already have a dive with dive number {existingDive}.  Would you like to view it?
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>No</Button>{' '}
            <Link to={`/divedetails/${existingDive}`} >
              <Button color="primary">Yes</Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

// export default AddDive;

function mapStateToProps(state) {
    // console.log(state)

  return {
    initialValues: state.storeForm
  }
}
export default connect(mapStateToProps)(AddDive);
