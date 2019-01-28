import React from 'react';
import { Button, ModalFooter, Modal, ModalHeader, ModalBody, Row, Col, FormGroup, Label, CustomInput } from 'reactstrap';//, Input, FormGroup, Label, Row, Col, CustomInput
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
// import FormInput from './common/formInput';
import { RadioButtonGroup, RadioButton, Checkbox } from './common/customRadio';
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
    storeForm,
  } = props;

  return (
    <div className="add-dive container mb-5">
{/*      <div className="background-image" style={{backgroundImage: "url(" + Background + ")"}}></div>
*/}      <h3 className="mt-2 text-shadow text-white">Enter Dive Info</h3>
      <Formik
        enableReinitialize
        validateOnChange={false}
        initialValues={storeForm ? storeForm : {diveNumber: nextDiveNumber}}
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
              <Label for="diveNumber">Dive Number</Label>
              {!nextDiveNumber && <input  className="bubble form-control" value="Getting next dive number..." disabled />}
              {nextDiveNumber && <Field className="bubble form-control" validate={validateDiveNumber} type="number" name="diveNumber" id="diveNumber" placeholder="Dive Number" />}
              <ErrorMessage name="diveNumber">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label for="diveDate">Date</Label>
              <Field className="bubble form-control" label="" type="date" name="diveDate" id="diveDate" placeholder="Date" />
              <ErrorMessage name="diveDate">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label for="diveLocation">Location/Site</Label>
              <Field className="bubble form-control" label="" type="text" name="diveLocation" id="diveLocation" placeholder="Dive Site Name" />
              <ErrorMessage name="diveLocation">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label for="diveBuddy">Buddy</Label>
              <Field className="bubble form-control" label="" type="text" name="diveBuddy" id="diveBuddy" placeholder="Dive Buddy Name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveSurfaceInterval">Surface interval</Label>
              <Field className="bubble form-control" type="text" name="diveSurfaceInterval" id="diveSurfaceInterval" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveTimeIn">Time In</Label>
              <Field className="bubble form-control" type="time" name="diveTimeIn" id="diveTimeIn" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveTimeOut">Time Out</Label>
              <Field className="bubble form-control" type="time" name="diveTimeOut" id="diveTimeOut" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveBottomTime">Bottom Time</Label>
              <Field className="bubble form-control" type="time" name="diveBottomTime" id="diveBottomTime" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveSafetyStop">Safety Stop</Label>
              <Field className="bubble form-control" type="time" name="diveSafetyStop" id="diveSafetyStop" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveMaxDepth">Maximum Depth</Label>
              <Field className="bubble form-control" type="number" name="diveMaxDepth" id="diveMaxDepth" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveStartPressure">Start Pressure</Label>
              <Field className="bubble form-control" type="number" name="diveStartPressure" id="diveStartPressure" />
            </FormGroup>
            <FormGroup>
              <Label for="diveStartPressure">End Pressure</Label>
              <Field className="bubble form-control" type="number" name="diveEndPressure" id="diveEndPressure" />
            </FormGroup>
            <FormGroup>
              <Label for="diveVisibility">Visibility</Label>
              <Field className="bubble form-control" label="" type="text" name="diveVisibility" id="diveVisibility" placeholder="Visibility" />
            </FormGroup>
            <FormGroup>
              <Label for="diveAirTemp">Air Temperature</Label>
              <Field className="bubble form-control" type="text" name="diveAirTemp" id="diveAirTemp" placeholder="Air Temperature" />
            </FormGroup>
            <FormGroup>
              <Label for="diveSurfaceTemp">Surface Temperature</Label>
              <Field className="bubble form-control" type="text" name="diveSurfaceTemp" id="diveSurfaceTemp" placeholder="Surface Temperature" />
            </FormGroup>
            <FormGroup>
              <Label for="diveBottomTemp">Bottom Temperature</Label>
              <Field className="bubble form-control" type="text" name="diveBottomTemp" id="diveBottomTemp" placeholder="Bottom Temperature" />
            </FormGroup>


            <FormGroup>
              <h3 className="text-shadow text-white mt-5">Equipment</h3>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureWetsuit">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureWetsuit" name="diveExposureWetsuit" inline />
                    Full suit
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="wetSuitMils" id="wetSuitMils" />
                  <Label xs={4}>mm</Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureShorty">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureExposureShorty" name="diveExposureShorty" inline />
                    Shorty
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="shortyMils" id="shortyMils" />
                  <Label xs={4}>mm</Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureDrysuit">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureDrysuit" name="diveExposureDrysuit" inline />
                    Dry suit
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="drySuitMils" id="drySuitMils" />
                  <Label xs={4}>mm</Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureSkin">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureSkin" name="diveExposureSkin" inline />
                    Dive skin
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="skinDescription" id="skinDescription" placeholder="Description" />
                  <Label xs={4}>&nbsp;</Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureBoots">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureBoots" name="diveExposureBoots" inline />
                    Boots
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="bootsMils" id="bootsMils" />
                  <Label xs={4}>mm</Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureGloves">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureGloves" name="diveExposureGloves" inline />
                    Gloves
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="glovesMils" id="glovesMils" />
                  <Label xs={4}>mm</Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureHood">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureHood" name="diveExposureHood" inline />
                    Hood
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="hoodMils" id="hoodMils" />
                  <Label xs={4}>mm</Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveExposureVest">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveExposureVest" name="diveExposureVest" inline />
                    Vest
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Field className="bubble form-control form-control-mils" type="number" name="vestMils" id="vestMils" />
                  <Label xs={4}>mm</Label>
                </Col>
              </Row>  
            </FormGroup>
            <FormGroup>
              <Label for="diveWeight">Weight</Label>
              <Field className="bubble form-control" type="text" name="diveWeight" id="diveWeight" placeholder="Weight" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveTankSize">Tank Size</Label>
              <Field className="bubble form-control" type="number" name="diveTankSize" id="diveTankSize" />
            </FormGroup>
            <FormGroup>
              <RadioButtonGroup id="diveTankType" label="Tank Type" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup}>
                <Row>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveTankType" id="tankTypeSteel" label="Steel" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveTankType" id="tankTypeAlum" label="Aluminum" />
                  </Col>
                </Row>
              </RadioButtonGroup>
            </FormGroup>
            <FormGroup>
              <RadioButtonGroup id="diveGasType" label="Gas Type" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup}>
                <Row>
                  <Col xs={4} md={3}>
                    <Field component={RadioButton} name="diveGasType" id="diveGasTypeAir" label="Air" />
                  </Col>
                  <Col xs={4} md={3}>
                    <Field component={RadioButton} name="diveGasType" id="diveGasTypeNitrox" label="Nitrox" />
                  </Col>
                  <Col xs={4} md={3} className="diveNitroxMix">
                    <Field className="bubble form-control " type="number" name="diveNitroxMix" id="diveNitroxMix" placeholder="Mix" />
                  </Col>
                </Row>
              </RadioButtonGroup>
            </FormGroup>


            <h3 className="text-shadow text-white mt-5">Conditions</h3>
            <FormGroup>              
              <RadioButtonGroup id="diveWaterType" label="Water Type" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup}>
                <Row>
                <Col xs={6} md={3}>
                  <Field component={RadioButton} name="diveWaterType" id="saltWater" label="Salt" />
                </Col>
                <Col xs={6} md={3}>
                  <Field component={RadioButton} name="diveWaterType" id="freshWater" label="Fresh" />
                </Col>
                </Row>
              </RadioButtonGroup>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="diveSurf">Surf/Wave Height</Label>
              <Field className="bubble form-control" label="Surf/Wave Height" type="number" name="diveSurf" id="diveSurf" />
            </FormGroup>
            <FormGroup>
              <RadioButtonGroup id="diveSurge" label="Surge" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup} >
                <Row>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveSurge" id="surgeNone" label="None" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveSurge" id="surgeMild" label="Mild" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveSurge" id="surgeModerate" label="Moderate" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveSurge" id="surgeStrong" label="Strong" />
                  </Col>
                </Row>
              </RadioButtonGroup>
            </FormGroup>
            <FormGroup>
              <RadioButtonGroup id="diveCurrent" label="Current" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup}>
                <Row>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveCurrent" id="currentNone" label="None" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveCurrent" id="currentMild" label="Mild" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveCurrent" id="currentModerate" label="Moderate" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveCurrent" id="currentStrong" label="Strong" />
                  </Col>
                </Row>
              </RadioButtonGroup>
            </FormGroup>


            <h3 className="text-shadow text-white mt-5">Dive Characteristics</h3>
            <FormGroup>
              <RadioButtonGroup id="diveEnvironment" label="Environment" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup}>
                <Row>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveEnvironment" id="diveEnvOcean" label="Ocean" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveEnvironment" id="diveEnvLake" label="Lake" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveEnvironment" id="diveEnvSpring" label="Spring" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveEnvironment" id="diveEnvRiver" label="River" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveEnvironment" id="diveEnvQuarry" label="Quarry" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveEnvironment" id="diveEnvPool" label="Pool" />
                  </Col>
                  <Col xs={6} md={3}>
                    <Field component={RadioButton} name="diveEnvironment" id="diveEnvIntra" label="Intracoastal" />
                  </Col>
                </Row>
              </RadioButtonGroup>
            </FormGroup>
            <FormGroup>
              <Label>Dive Type</Label>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveTypeBoat">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveTypeBoat" name="diveTypeBoat" inline />
                    Boat
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveTypeBeach">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveTypeBeach" name="diveTypeBeach" inline />
                    Beach
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveTypeDrift">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveTypeDrift" name="diveTypeDrift" inline />
                    Drift
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveTypeDeep">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveTypeDeep" name="diveTypeDeep" inline />
                    Deep
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveTypeNight">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveTypeNight" name="diveTypeNight" inline />
                    Night
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveTypeAltitude">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveTypeAltitude" name="diveTypeAltitude" inline />
                    Altitude
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveTypeIce">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveTypeIce" name="diveTypeIce" inline />
                    Ice
                  </Label>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Label>Activities</Label>
              <Row>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivityWreck">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivityWreck" name="diveActivityWreck" inline />
                    Wreck
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivityReef">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivityReef" name="diveActivityReef" inline />
                    Reef
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivityTraining">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivityTraining" name="diveActivityTraining" inline />
                    Training
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivityPhotography">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivityPhotography" name="diveActivityPhotography" inline />
                    Photo
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivitySpear">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivitySpear" name="diveActivitySpear" inline />
                    Spearfishing
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivityLobster">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivityLobster" name="diveActivyLobster" inline />
                    Lobstering
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivitySearch">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivitySearch" name="diveActivitySearch" inline />
                    Search & Recovery
                  </Label>
                </Col>
                <Col xs={{ size: 6}}>
                  <Label for="diveActivityReasearch">
                    <Field component={Checkbox} className="bubble" type="checkbox" id="diveActivityReasearch" name="diveActivyReasearch" inline />
                    Research
                  </Label>
                </Col>
              </Row>
            </FormGroup>


            <FormGroup>
              <Label for="diveNotes">Notes</Label>
              <Field className="bubble form-control" component="textarea" name="diveNotes" id="diveNotes" placeholder="Add your thoughts about the dive here" rows="6" />
              <ErrorMessage name="diveNumber">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
            </FormGroup>
            
            <div className=" text-center">
              <Button className="save-dive-button bubble mb-3" type="submit" disabled={submitting}><span>Save</span></Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <Modal isOpen={modalOpen} toggle={toggleModal} backdrop >
          <ModalHeader>Duplicate Dive Number</ModalHeader>
          <ModalBody>
            <p>You already have a dive with dive number {existingDive}.  You can only have a dive number once in your log.</p>
            <p>The next dive in your log is #{nextDiveNumber}.</p>
            <p>Would you like to view dive #{existingDive}?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>No</Button>{' '}
            <Link onClick={toggleModal} to={`/divedetails/${existingDive}`} >
              <Button color="primary">Yes</Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    initialValues: state.storeForm
  }
}
export default connect(mapStateToProps)(AddDive);
