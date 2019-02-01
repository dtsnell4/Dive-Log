import React from 'react';

class TimePicker extends React.Component {
	constructor(props) {
    super(props);

    const d = new Date(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    let h = d.getHours(),
    mer = 'AM';

    if (h > 11) {
    	mer = 'PM';
    }
    if (h > 12) {
    	h = h - 12;
    } else if (h === 0) {
    	h = 12;
    }

    this.state  = {
    	hours: h,
    	minutes: m,
    	meridiem: mer,
    };
	}


	changeHours = (e) => {
		const target = e;
		let input = e.target.value;

		if (parseInt(input) < 0) {
			input = 0;
		} else if (parseInt(input) > 12) {
			input = "12";
		}
		this.setState((prevState, props) => ({
				hours: input
			}), () => {
				console.log(input, this.state);
				this.saveField();
    	}
    );
	}

	changeMinutes = (e) => {
		const target = e.target;
		let input = e.target.value;

		if (!input || (input === '')) {
				input = '00';
		}

		if (parseInt(input) >= 0 && parseInt(input) <= 59) {
			if (input.length > 2) {
				input = input.substring(1);
				console.log(input, input.substring(1))
			}
			
			if ((input < 10) && (input.length < 2)) {
				console.log(input, typeof input);
				input = '0' + input.toString();
			}

			this.setState((prevState, props) => ({
					minutes: input
				}), () => {
					console.log(input, this.state);
	    	}
	    );
		} else {
			console.log('no', this.state.hours)
			input = input.substring(1);
			this.setState((prevState, props) => ({
					minutes: prevState.minutes
				}), () => {
					console.log(input, this.state);
					this.saveField();
	    	}
	    );
		}
	}

	changeMeridiem = (e) => {
		const mer = 'AM';
		if (e.keyCode === 80 ) {
			mer = 'PM'
		}
		this.setState((prevState, props) => ({
				meridiem: 'AM'
			}), () => {
				console.log(this.state);
				this.saveField();
    	}
    )
	}

	timeBlur = (e) => {
		console.log(e, typeof e)
		if (e.target.id === "hours") {
			const val = e.target.value.toString();

			if (!val || (val === '0' || '')) {
				this.setState((prevState, props) => ({
					hours: "12"
				}), () => {
						console.log(this.state);
		    	}
		    );
			}
		}
		// this.saveField();
	}

	saveField = () => {
		const time = `${this.state.hours}:${this.state.minutes} ${this.state.meridiem}`;
		this.props.form.setFieldValue(this.props.field.name, time);
		console.log(this.props)
	}
  
  render() {
  	return(
	    <div className="timepicker">
	    	<input className="bubble form-control" disabled />
    		<div className="position-absolute">
		    	<input autoComplete="off" onBlur={this.timeBlur} id="hours" type="number" onChange={this.changeHours} value={this.state.hours}/>
		    	<span>:</span>
		    	<input autoComplete="off" onBlur={this.timeBlur} id="minutes" type="number" onChange={this.changeMinutes} value={this.state.minutes} />&nbsp;
		    	<input autoComplete="off" id="meridiem" onKeyDown={this.changeMeridiem} onBlur={this.timeBlur} value={this.state.meridiem} />
		    </div>
	    </div>
	  )
  }
}

export default TimePicker;
