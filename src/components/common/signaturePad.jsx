import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'reactstrap';

class SignaturePad extends React.Component {
	constructor(props) {
	    super(props);

	    this.state  = {trimmedDataURL: null};
	    this.sigPad = {}

	    this.clear = this.clear.bind(this);
	    this.trim = this.trim.bind(this);
	    console.log(this)
	}

	clear = () => {
		this.sigPad.clear()
	}

	trim = () => {
	    this.setState(
	    	{trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/svg+xml')}, () => {
      		this.props.form.setFieldValue('signature', this.state.trimmedDataURL);
	    	}
	    )
	}



  	render () {
  		return (
  			<div>
  				{!this.state.trimmedDataURL &&
				  	<div className="mb-3">
				  		<SignatureCanvas 
				  			canvasProps={{ height: 400, className: 'sigCanvas'}}
				  			ref={(ref) => { this.sigPad = ref }} />
				  		<Button color="danger" size="sm" className="clearButton" onClick={this.clear}>
				          Ugh, Undo!
				        </Button>
				        <Button color="success" size="sm" className="saveSig float-right" onClick={this.trim}>
				        	Good Enough
				        </Button>
			        </div>
			    }
		        {this.props.field.value
			        ? <div className="bubble signature-image"><img alt="Signature" src={this.props.field.value} /></div>
			        : null
			    }
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
