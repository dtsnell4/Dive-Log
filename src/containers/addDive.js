import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalForage from 'localforage';
import storeFormData from '../actions/formDataActions';
import selectContact from '../actions/selectContactActions'

import AddDivePresentational from '../components/addDive';
// import * as Utilities from '../utilities/utilities';

class AddDiveComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diveData: {},
      modalOpen: false,
    };

    this.handleSaveData = this.handleSaveData.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.validateDiveNumber = this.validateDiveNumber.bind(this);
    
    const that = this;
    LocalForage.keys().then(function(keys) {
      function sortNumber(a,b) {
        return a - b;
      }
      keys.sort(sortNumber);
      const length = keys.length;
      const nextDive = parseInt(keys[length - 1]) + 1;
      that.setState({ nextDiveNumber: nextDive });    
    }).catch(function(err) {
      console.log('Error: Cannot find last dive number :', err);
    });

    console.log(this)
  }

  toggleModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  validateDiveNumber = (num) => {
    if (!num) return;
    const that = this;
    num = num.toString();
    LocalForage.getItem(num).then(function(value) {
      //Dive Number exists, alert user.
      if (value && (value.diveData.diveNumber === num)) {
        that.setState({ existingDive: num })
        that.toggleModal();
        // return 'You already have a dive with that number';
      }
    })
  }

  handleValidate = (values) => {
    console.log(values)
    storeFormData({values});

    let errors = {};
    if (!values.diveNumber) {
      errors.diveNumber = 'The dive number is Required';
    }
    if (!values.diveLocation) {
      errors.diveLocation = 'The location is Required';
    }
    if (!values.diveDate) {
      errors.diveDate = 'A date is Required';
    }

    console.log(this)
    return errors;
  }

  handleSaveData = (data) => {
    // See if dive number exisits
    const that = this;
    LocalForage.getItem(data.diveNumber).then(function(value) {
      //Dive Number exists, alert user.
      if (value && value.diveNumber === data.diveNumber) {
        that.setState({diveNumber: data.diveNumber})
        that.toggleModal();
        return null;
      }
      that.setState({
        diveData: data
      }, () => {
        LocalForage.setItem(that.state.diveData.diveNumber, that.state).then(function (value) {
          that.props.history.push(`/`);
        }).catch(function(err) {
          console.log('Saving Error: ',err);
        });
      });
    }).catch(function(err) {
      console.log('Cannot find local storage: ', err);    
    });

  }

  render() {
    // console.log(this);
    return <AddDivePresentational 
      handleSaveData={this.handleSaveData}
      handleValidate={this.handleValidate} 
      nextDiveNumber={this.state.nextDiveNumber}
      existingDive={this.state.existingDive}
      modalOpen={this.state.modalOpen} 
      toggleModal={this.toggleModal} 
      validateDiveNumber={this.validateDiveNumber}
      // storeFormData={this.storeFormData}
      {...this.props} 
    />;
  }
}

// const asyncValidate = Utilities.asyncValidate;

// const asyncValidate = (values /*, dispatch */) => {
//   console.log('async: ', values)
//     if ([1, 2, 3, 4].includes(values.diveNumber)) {
//       throw { diveNumber: 'That username is taken' }
//     }
// }

// const mapStateToProps = (state) => {
//   // console.log('l', state);
//   return {
//     formData: state.formData
//   };
// }
function mapStateToProps(state) {
  console.log(state)
  return {
    storeForm: state.storeForm
  };
}
// const mapDispatchToProps = (dispatch) =>
// ({
//   storeFormData: bindActionCreators(storeFormData, dispatch),
// });


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    storeFormData: storeFormData
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)( AddDiveComponent );


// export default AddDiveComponent;
