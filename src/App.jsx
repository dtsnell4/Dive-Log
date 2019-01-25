// import React, { Component } from 'react';
// import { Form, FormGroup, Label, Input, Row, Col, CustomInput } from 'reactstrap';

// import './style/App.scss';

// class App extends Component {
//   render() {
//     return (
//       <div className="App container">
//         <header>
//           <h3>Enter A Dive</h3>
//           <Form>
//             <FormGroup>
//               <Label for="diveNumber">Dive Number</Label>
//               <Input type="number" name="diveNumber" id="diveNumber" placeholder="Dive Number" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveDate">Date</Label>
//               <Input type="date" name="diveDate" id="diveDate" placeholder="Date" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveLoacation">Location</Label>
//               <Input type="text" name="diveLoacation" id="diveLoacation" placeholder="Location" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveVisibility">Visibility</Label>
//               <Input type="text" name="diveVisibility" id="diveVisibility" placeholder="Visibility" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveAirTemp">Air Temperature</Label>
//               <Input type="text" name="diveAirTemp" id="diveAirTemp" placeholder="Air Temperature" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveSurfaceTemp">Surface Temperature</Label>
//               <Input type="text" name="diveSurfaceTemp" id="diveSurfaceTemp" placeholder="Surface Temperature" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="DiveBottomTemp">Bottom Temperature</Label>
//               <Input type="text" name="DiveBottomTemp" id="DiveBottomTemp" placeholder="Bottom Temperature" />
//             </FormGroup>
//             <Row>
//               <Col xs={{ size: 6 }}>
//                 <FormGroup>
//                   <Label for="diveWeight">Weight</Label>
//                   <Input type="text" name="diveWeight" id="diveWeight" placeholder="Weight" />
//                 </FormGroup>
//               </Col>
//               <Col xs={{ size: 6 }}>
//                 <FormGroup>
//                   <Label for="diveWeightUnits">Units</Label>
//                   <div>
//                     <CustomInput type="radio" name="diveWeightUnits" id="weightLbs" label="lbs" inline />
//                     <CustomInput type="radio" name="diveWeightUnits" id="weightKgs" label="kgs" inline />
//                   </div>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <FormGroup>
//               <Label for="diveExposure">Exposure Protection</Label>
//               <Row>
//                 <Col xs={{ size: 5}}>
//                   <CustomInput type="checkbox" id="diveExposureWetsuit" label="Wet suit" />
//                 </Col>
//                 <Col xs={{ size: 7}}>
//                   <Row>
//                     <Col xs={8}>
//                       <Input type="number" name="wetSuitMils" id="wetSuitMils" bsSize="sm" />
//                     </Col>
//                     <Label xs={4}>mil</Label>
//                   </Row>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs={{ size: 5}}>
//                   <CustomInput type="checkbox" id="diveExposureDrysuit" label="Dry suit" />
//                 </Col>
//                 <Col xs={{ size: 7}}>
//                   <Row>
//                     <Col xs={8}>
//                       <Input type="number" name="drySuitMils" id="drySuitMils" bsSize="sm" />
//                     </Col>
//                     <Label xs={4}>mil</Label>
//                   </Row>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs={{ size: 5}}>
//                   <CustomInput type="checkbox" id="diveExposureBoots" label="Boots" />
//                 </Col>
//                 <Col xs={{ size: 7}}>
//                   <Row>
//                     <Col xs={8}>
//                       <Input type="number" name="bootsMils" id="bootsMils" bsSize="sm" />
//                     </Col>
//                     <Label xs={4}>mil</Label>
//                   </Row>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs={{ size: 5}}>
//                   <CustomInput type="checkbox" id="diveExposureGloves" label="Gloves" />
//                 </Col>
//                 <Col xs={{ size: 7}}>
//                   <Row>
//                     <Col xs={8}>
//                       <Input type="number" name="glovesMils" id="glovesMils" bsSize="sm" />
//                     </Col>
//                     <Label xs={4}>mil</Label>
//                   </Row>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs={{ size: 5}}>
//                   <CustomInput type="checkbox" id="diveExposureHood" label="Hood" />
//                 </Col>
//                 <Col xs={{ size: 7}}>
//                   <Row>
//                     <Col xs={8}>
//                       <Input type="number" name="bootsMils" id="bootsMils" bsSize="sm" />
//                     </Col>
//                     <Label xs={4}>mil</Label>
//                   </Row>
//                 </Col>
//               </Row>
//             </FormGroup>
//             <Label>Conditions</Label>
//             <FormGroup>
//               <Label for="diveWaterType">Water Type</Label>
//               <div>
//                 <CustomInput type="radio" name="diveWaterType" id="saltWater" label="Salt" inline />
//                 <CustomInput type="radio" name="diveWaterType" id="freshWater" label="Fresh" inline />
//               </div>
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveEntry">Entry</Label>
//               <div>
//                 <CustomInput type="radio" name="diveEntry" id="entryShore" label="Beach/Shore" inline />
//                 <CustomInput type="radio" name="diveEntry" id="entryBoat" label="Boat" inline />
//               </div>
//             </FormGroup>
//             <Label for="diveSurf">Surf/Waves</Label>
//             <Row>
//               <Col xs={{ size: 4 }}>
//                 <FormGroup>
//                   <Input type="number" name="diveSurf" id="diveSurf" />
//                 </FormGroup>
//               </Col>
//               <Col xs={{ size: 7 }}>
//                 <FormGroup>
//                   <div>
//                     <CustomInput type="radio" name="diveSurf" id="surfFeet" label="feet" inline />
//                     <CustomInput type="radio" name="diveSurf" id="surfMeters" label="meters" inline />
//                   </div>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <FormGroup>
//               <Label for="diveSurge">Surge</Label>
//               <div>
//                 <CustomInput type="radio" name="diveSurge" id="surgeNone" label="None" inline />
//                 <CustomInput type="radio" name="diveSurge" id="surgeMild" label="Mild" inline />
//                 <CustomInput type="radio" name="diveSurge" id="surgeModerate" label="Moderate" inline />
//                 <CustomInput type="radio" name="diveSurge" id="surgeStrong" label="Strong" inline />
//               </div>
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveCurrent">Current</Label>
//               <div>
//                 <CustomInput type="radio" name="diveCurrent" id="surgeNone" label="None" inline />
//                 <CustomInput type="radio" name="diveCurrent" id="surgeMild" label="Mild" inline />
//                 <CustomInput type="radio" name="diveCurrent" id="surgeModerate" label="Moderate" inline />
//                 <CustomInput type="radio" name="diveCurrent" id="surgeStrong" label="Strong" inline />
//               </div>
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveEnvironment">Environment</Label>
//               <div>
//                 <CustomInput type="radio" name="diveEnvironment" id="" label="Wreck" inline />
//                 <CustomInput type="radio" name="diveEnvironment" id="" label="Reef" inline />
//                 <CustomInput type="radio" name="diveEnvironment" id="" label="Lake" inline />
//                 <CustomInput type="radio" name="diveEnvironment" id="" label="Quarry" inline />
//                 <CustomInput type="radio" name="diveEnvironment" id="" label="Intracoastal" inline />
//                 <CustomInput type="radio" name="diveEnvironment" id="" label="Pool" inline />
//               </div>
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveTimeIn">Time In</Label>
//               <Input type="time" name="diveTimeIn" id="diveTimeIn" placeholder="" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="diveTimeOut">Time Out</Label>
//               <Input type="time" name="diveTimeOut" id="diveTimeOut" placeholder="" />
//             </FormGroup>
//             <Label for="diveTankSize">Tank Size</Label>
//             <Row>
//               <Col xs={{ size: 4 }}>
//                 <FormGroup>
//                   <Input type="number" name="diveTankSize" id="diveTankSize" />
//                 </FormGroup>
//               </Col>
//               <Col xs={{ size: 7 }}>
//                 <FormGroup>
//                   <div>
//                     <CustomInput type="radio" name="tankSize" id="tankSizeCf" label="cf" inline />
//                     <CustomInput type="radio" name="tankSize" id="tankSizeLitres" label="Litres" inline />
//                   </div>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Label for="diveTankSize">Tank Type</Label>
//             <Row>
//               <Col xs={{ size: 4 }}>
//                 <FormGroup>
//                   <Input type="number" name="diveTankType" id="diveTankType" />
//                 </FormGroup>
//               </Col>
//               <Col xs={{ size: 7 }}>
//                 <FormGroup>
//                   <div>
//                     <CustomInput type="radio" name="tankType" id="tankTypeSteel" label="Steel" inline />
//                     <CustomInput type="radio" name="tankType" id="tankTypeAlum" label="Alum" inline />
//                   </div>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Label for="diveStartPressure">Start Pressure</Label>
//             <Row>
//               <Col xs={{ size: 4 }}>
//                 <FormGroup>
//                   <Input type="number" name="diveStartPressure" id="diveStartPressure" />
//                 </FormGroup>
//               </Col>
//               <Col xs={{ size: 7 }}>
//                 <FormGroup>
//                   <div>
//                     <CustomInput type="radio" name="startPressure" id="startPressurePsi" label="PSI" inline />
//                     <CustomInput type="radio" name="startPressure" id="startPressureBar" label="BAR" inline />
//                   </div>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Label for="diveStartPressure">End Pressure</Label>
//             <Row>
//               <Col xs={{ size: 4 }}>
//                 <FormGroup>
//                   <Input type="number" name="diveEndPressure" id="diveEndPressure" />
//                 </FormGroup>
//               </Col>
//               <Col xs={{ size: 7 }}>
//                 <FormGroup>
//                   <div>
//                     <CustomInput type="radio" name="endPressure" id="endPressurePsi" label="PSI" inline />
//                     <CustomInput type="radio" name="endPressure" id="endPressureBar" label="BAR" inline />
//                   </div>
//                 </FormGroup>
//               </Col>
//             </Row>
//           </Form>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
