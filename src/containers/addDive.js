import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalForage from 'localforage';
import storeFormData from '../actions/formDataActions';
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
      let nextDive = null;
      if (keys.length) {
        function sortNumber(a,b) {
          return a - b;
        }
        keys.sort(sortNumber);
        const length = keys.length;
        nextDive = parseInt(keys[length - 1]) + 1;
      } else {
        nextDive = 1;
      }
      that.setState({ nextDiveNumber: nextDive });    
    }).catch(function(err) {
      console.log('Error: Cannot find last dive number :', err);
    });
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
      if (value && (parseInt(value.diveData.diveNumber) === parseInt(num))) {
        that.setState({ existingDive: num })
        that.toggleModal();
        // return 'You already have a dive with that number';
      }
    })
  }

  handleValidate = (values) => {
    this.props.storeFormData({values});

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

    return errors;
  }

  handleSaveData = (data, setSubmitting, resetForm) => {
    // See if dive number exisits
    const that = this;
    LocalForage.getItem(data.diveNumber).then(function(value) {
      //Dive Number exists, alert user.
      if (value && value.diveData.diveNumber === data.diveNumber) {
        // debugger
        that.setState({diveNumber: data.diveNumber})
        that.toggleModal();
        return null;
      }
      that.setState({
        diveData: data
      }, () => {
        LocalForage.setItem(that.state.diveData.diveNumber.toString(), that.state).then(function (value) {
          that.props.storeFormData(null);
          resetForm({});
          that.props.history.push(`/mydives`);
        }).catch(function(err) {
          console.log('Saving Error: ',err);
        });
      });
    }).catch(function(err) {
      console.log('Cannot find local storage: ', err);    
    });

  }

  render() {
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
