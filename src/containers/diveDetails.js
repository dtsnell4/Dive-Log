import React from 'react';
import LocalForage from 'localforage';
import DiveDetailsPresentational from '../components/diveDetails';

class DiveDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    // const {
    // } = props;
    this.state = {
      dive: {},
    };
  }

  componentWillMount() {
  	const that = this;
		LocalForage.getItem(this.props.match.params.divenum).then(function(value) {
		  that.setState({ dive: value }, function () {
	    });
		}).catch(function(err) {
	    console.log('Error: ', err);
		});
    LocalForage.getItem('settings').then(function(value) {
      that.setState({ isUS: value.units === 'US' });
    }).catch(function(err) {
      console.log('Error: ', err);
    });
  }

	render() {
    return <DiveDetailsPresentational units={this.state.isUS} {...this.state} />;
  }
}

export default DiveDetailsComponent;
