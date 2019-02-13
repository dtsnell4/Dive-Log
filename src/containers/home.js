import React from 'react';
import LocalForage from 'localforage';
import HomePresentational from '../components/home';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	settings: {
	    	units: '',
	    	totalBottomTime: '',
	    	nextDiveNumber: '',
	    },
	    lastDive: {
      	date: '',
        timeOut: '',
      	location: '',
      	number: 0,
      }
    };
    const that = this;
    LocalForage.getItem("settings").then(function(settings) {
    	if (settings && settings.units) {
	      that.setState({settings: settings}, function () {
	      });
	    }
    }).catch(function(err) {
      console.log('Error: ', err);
    });

    //Get last dive info
    LocalForage.keys().then(function(keys) {
      let lastDive = null;
      if (keys.length > 1) {
        function sortNumber(a,b) {
          return a - b;
        }
        keys.sort(sortNumber);
        const length = keys.length;
        lastDive = parseInt(keys[length - 1]) + 1;
      }
      const length = keys.length;
      lastDive = parseInt(keys[length - 2]);
      LocalForage.getItem(lastDive.toString()).then(function(value) {
        that.setState({ 
          lastDive: {
          	date: value.diveDate + " " + value.diveTimeOut,
          	location: value.diveLocation,
            last: value.diveTimeOut,
          	number: lastDive - 1,
          }
        });    
      }).catch(function(err) {
        console.log('Error: ', err);
      });

    }).catch(function(err) {
      console.log('Error: Cannot find last dive number :', err);
    });

    this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit = (e) => {
		e.preventDefault();
    const f = new FormData(document.querySelector('form'))

    let units = '';
    for (const pair of f.entries()) {
      units = pair[1];
    }
    const settings = {
      units: units,
      totalBottomTime: '',
	    nextDiveNumber: '',
	  }

  	LocalForage.setItem('settings', settings);
    this.setState(prevState => ({
    	settings: settings,
    }));
	}

  render() {
    return <HomePresentational 
    	onSubmit={this.onSubmit} 
    	units={this.state.settings.units} 
    	totalDives={this.state.settings.nextDiveNumber - 1} 
    	totalBt={this.state.settings.totalBottomTime} 
    	lastDive={this.state.lastDive}
    />;
  }
}

export default Home;
