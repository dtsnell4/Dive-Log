import React from 'react';
import LocalForage from 'localforage';
import DiveListPresentational from '../components/diveList';
import * as Utilities from '../utilities/utilities';

class DiveListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diveList: [],
      dropdownOpen: false,
      sortBy: 'number',
      listMessage: '',
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.select = this.select.bind(this);
    this.onSearch = this.onSearch.bind(this);
    }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  select(event) {
    const sortBy = event.target.innerText;
    const sortByParam = sortBy.toLowerCase();
    this.setState({
      sortBy,
      diveList: [...this.state.diveList.sort(Utilities.sortByParam(sortByParam, "asc"))],
    });
  }

  onSearch = (e) => {
    e.preventDefault();
    const f = new FormData(document.querySelector('form'))

    let term = "";
    for (var pair of f.entries()) {
      term = pair[1];
    }
    // Search for dive number
    const that = this;
    if (isNaN(parseInt(term))) {
      // Search for location name
      const storedDiveData = []; 
      LocalForage.iterate(function(value, key, iterationNumber) {
        if (!value.diveLocation) return;
        const location = value.diveLocation.toLowerCase()
        if (location.includes(term.toLowerCase())) {
          const value2 = {number: parseInt(value.diveNumber), location: value.diveLocation, date: value.diveDate};
          storedDiveData.push(value2);
        }
      }).then(function() {
        if (storedDiveData.length === 0) {
          that.setState({ 
            listMessage: `You don't have any dives logged with "${term}" in the location name.`,
            diveList: storedDiveData
          });
        } else {
          storedDiveData.sort(Utilities.sortByParam(that.state.sortBy));
          that.setState({ 
            diveList: storedDiveData,
          });
        }
      }).catch(function(err) {
        console.log('Error: ', err);
      });
    } else {
      LocalForage.getItem(term).then(function(value) {
        if (value) {
          const value2 = {number: parseInt(value.diveNumber), location: value.diveLocation, date: value.diveDate};
          that.setState({ diveList: [value2] });
        } else {
          that.setState({ 
            listMessage: `You don't have any dives logged with number "${term}".`,
            diveList: []
          });
        }
      }).catch(function(err) {
        console.log('Error: ', err);
      });      
    }
  }
  
  componentWillMount() {
  	const that = this;
    const storedDiveData = []; 
		LocalForage.iterate(function(value, key, iterationNumber) {
      if (!value.diveNumber) return;
	    const value2 = {number: parseInt(value.diveNumber), location: value.diveLocation, date: value.diveDate};
	    storedDiveData.push(value2);
		}).then(function() {
  		storedDiveData.sort(Utilities.sortByParam(that.state.sortBy));
	    that.setState({ 
        diveList: storedDiveData,
        listMessage: `You don't have any dives logged yet.  Time to get wet!!!`
      });
		}).catch(function(err) {
	    console.log('Error: ', err);
		});
  }

  render() {
    return <DiveListPresentational listMessage={this.state.listMessage} diveList={this.state.diveList} onSearch={this.onSearch} select={this.select} dropdownOpen={this.state.dropdownOpen} toggleDropdown={this.toggleDropdown} />;
  }
}

export default DiveListComponent;
