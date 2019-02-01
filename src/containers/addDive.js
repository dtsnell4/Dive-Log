import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalForage from 'localforage';
import storeFormData from '../actions/formDataActions';
import AddDivePresentational from '../components/addDive';
import moment from 'moment';

// import * as Utilities from '../utilities/utilities';

class AddDiveComponent extends React.Component {
  constructor(props) {
    super(props);
    const now = `${moment().hour()}:${moment().minute()}`;
    this.state = {
      editting: false,
      modalOpen: false,
      collapseOpen: false,
      totalBottomTime: "",
      diveData: {
        diveNumber: "",
        diveTimeIn: now,
        diveTimeOut: now,
      }
    };
    const {
      match,
    } = props;

    //Edit existing dive
    if (match.params.divenum) {
      const that = this;
      LocalForage.getItem(this.props.match.params.divenum).then(function(value) {
        value.editting = match.params.divenum;
        console.log(value)
        that.setState(value, function () {
        });
      }).catch(function(err) {
          // This code runs if there were any errors
        console.log('Error: ', err);
      });
    //Add new dive
    } else {
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

        const lastDive = nextDive - 1;
        LocalForage.getItem(lastDive.toString()).then(function(value) {
          const bttm = value.totalBottomTime;
          that.setState({ 
            nextDiveNumber: nextDive, 
            totalBottomTime: bttm ? bttm : "",
            diveData: {
              diveNumber: nextDive,
            } 
          });    
        }).catch(function(err) {
            // This code runs if there were any errors
          console.log('Error: ', err);
        });

      }).catch(function(err) {
        console.log('Error: Cannot find last dive number :', err);
      });
    }

    // Bind functions
    this.handleSaveData = this.handleSaveData.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.validateDiveNumber = this.validateDiveNumber.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  toggleCollapse() {
    this.setState(prevState => ({
      collapseOpen: !prevState.collapseOpen
    }));
  }

  validateDiveNumber = (num) => {
    if (!num || parseInt(this.state.editting) === parseInt(num)) return;
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

      const x = that.state.totalBottomTime ? that.state.totalBottomTime : 0;
      const newBT = parseInt(data.diveBottomTime) + parseInt(x);

      that.setState({
        diveData: data,
        totalBottomTime: newBT,
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
      collapseOpen={this.state.collapseOpen}
      toggleCollapse={this.toggleCollapse} 
      validateDiveNumber={this.validateDiveNumber}
      editting={this.editting}
      // storeFormData={this.storeFormData}
      {...this.props}
      {...this.state} 
    />;
  }
}

function mapStateToProps(state) {
  return {
    storeForm: state.storeForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    storeFormData: storeFormData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)( AddDiveComponent );
