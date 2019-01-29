import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'reactstrap';

class SignaturePad extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
		  signature: null
		};

	    this.state  = {trimmedDataURL: null};
	    this.sigPad = {}

	    this.clear = this.clear.bind(this);
	}

	clear = () => {
		console.log("Clear")
		this.sigPad.clear()
	}

	trim = () => {
	    this.setState(
	    	{trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png')}, () => {
	    		console.log(this.state)
	    	}
	    )
	}

  	render () {
  		return (
  			<div>
		  		<SignatureCanvas 
		  			canvasProps={{ height: 300, className: 'sigCanvas'}}
		  			ref={(ref) => { this.sigPad = ref }} />
		  		<Button color="danger" size="sm" className="clearButton" onClick={this.clear}>
		          	Screw That
		        </Button>
		        <Button color="success" size="sm" className="saveSig float-right" onClick={this.trim}>
		        	Good Enough
		        </Button>
		        {this.state.trimmedDataURL
			        ? <img className="kk"
			          src={this.state.trimmedDataURL} />
			        : null}
	        </div>
	    )
  	}
}

// ReactDOM.render(
//   <SignatureCanvas penColor='green'
//     canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />,
//   document.getElementById('react-container')
// )

export default SignaturePad;
