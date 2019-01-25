import React from 'react';
import LocalForage from 'localforage';
import DiveDetailsPresentational from '../components/diveDetails';

class DiveDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    const {
    	match,
    } = props;
    this.state = {
      dive: {},
    };
    // this.handleSaveData = this.handleSaveData.bind(this);
  	console.log(match);
  }

  componentWillMount() {
  	const that = this;

		LocalForage.getItem(this.props.match.params.divenum).then(function(value) {
		  that.setState({ dive: value }, function () {
	    });
		}).catch(function(err) {
		    // This code runs if there were any errors
	    console.log('Error: ', err);
		});

  }

	render() {
    return <DiveDetailsPresentational {...this.state} />;
  }
}

export default DiveDetailsComponent;
