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
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.select = this.select.bind(this);
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
	    diveList: [...this.state.diveList.sort(Utilities.sortByParam(sortByParam))],
	  });
	}
  
  componentWillMount() {
  	const that = this;
    const storedDiveData = []; 
		LocalForage.iterate(function(value, key, iterationNumber) {
	    const value2 = {number: parseInt(value.diveData.diveNumber), location: value.diveData.diveLocation, date: value.diveData.diveDate};
	    storedDiveData.push(value2);
		}).then(function() {
      console.log(storedDiveData)
  		storedDiveData.sort(Utilities.sortByParam(that.state.sortBy));
	    that.setState({ diveList: storedDiveData });
		}).catch(function(err) {
	    console.log('Error: ', err);
		});
  }

  // componentHasMounted() {
  //   console.log(this.state, this.props);
  // }
  render() {
    console.log('render: ', this.state);
    return <DiveListPresentational diveList={this.state.diveList} select={this.select} dropdownOpen={this.state.dropdownOpen} toggleDropdown={this.toggleDropdown} />;
  }
}

export default DiveListComponent;
