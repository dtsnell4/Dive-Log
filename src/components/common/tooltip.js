import React from 'react';

class Tooltip extends React.Component {
	constructor(props) {
    super(props);

    this.state  = {
    	tooltipOpen: false,
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);

	}

	toggleTooltip() {
		// debugger
    this.setState(prevState => ({
      tooltipOpen: !prevState.tooltipOpen
    }));
  }

  render() {
  	return(
	    <span className="mobile-tooltip" onClick={this.toggleTooltip}>
	    	{this.props.children}
	    	{this.state.tooltipOpen &&
	    		<span 
	    			className={`message ${this.props.position ? this.props.position : "top"}`}
	    			style={{width: this.props.width ? this.props.width : "max-content"}}
	    		>
	    			{this.props.message}
	    		</span>
	    	}
	    </span>
	  )
  }
}

export default Tooltip;
