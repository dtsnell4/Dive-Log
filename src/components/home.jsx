import React from 'react';
import { FormGroup, CustomInput, Button } from 'reactstrap';
import Moment from 'react-moment';

const HomeComponent = (props) => {
  const {
  	onChange,
  	onSubmit,
  	units,
  	totalBt,
  	totalDives,
  	lastDive,
  	now = new Date(),
  } = props;
  console.log(props)
	return (
	  <div className="container text-shadow text-white mt-5">
	    <h2 className="mt-3">Welcome to the My Dive Log App</h2>
	    {!units && 
	    	<div className="get-units">
			    <p>To get started, select the units of measurement you want to use for recording your info.</p>
				  <form onSubmit={onSubmit}>
				  	<FormGroup>
				  		<CustomInput
					      name="units"
					      id="unitsUS"
					      value="US"
					      type="radio"
					      onChange={onChange}
					      className="bubble"
					      label="US (ft, psi, farenheit...)"
					      inline
				      />
			      </FormGroup>
			      <FormGroup>
				      <CustomInput
					      name="units"
					      id="unitsMetric"
					      value="metric"
					      type="radio"
					      onChange={onChange}
					      className="bubble"
					      label="Metric (meters, bar, celcius...)"
					      inline
				      />
				  	</FormGroup>
				  	<Button color="primary" type="submit">Let's Go</Button>
				  </form>
		  		<p>You can change this at any time in "<i className="fa fa-gear"></i> Settings"</p>
		  	</div>
		  }
  		{units &&
  			<div className="mt-5">
	  			<div className="pt-5">Number of Dives Logged: {totalDives}</div>
	  			<div>Total Bottom Time Logged: {totalBt}</div>
	  			<div>Current Surface Interval: <Moment fromNow>{lastDive.date}</Moment></div>
	  			<h6 className="mt-5">Last Dive:</h6>
	  			<div>Number: {lastDive.number}</div>
	  			<div>Date: <Moment parse="YYY/MM/DD" format="M/D/YYYY" date={lastDive.date} /></div>
	  			<div>Location: {lastDive.location}</div>
  			</div>
  		}
  		<div id="background-wrap">
		    <div class="bubble x1"></div>
		    <div class="bubble x2"></div>
		    <div class="bubble x3"></div>
		    <div class="bubble x4"></div>
		    <div class="bubble x5"></div>
{/*		    <div class="bubble x6"></div>
		    <div class="bubble x7"></div>
		    <div class="bubble x8"></div>
		    <div class="bubble x9"></div>
		    <div class="bubble x10"></div>*/}
		</div>
	  </div>
	)
};

export default HomeComponent;
