import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import propTypes from 'prop-types';
// import { reduxForm } from 'redux-form';
import MainPresentational from '../components/main';
// import * as pageOneActions from '../actions/mainActions';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diveData: [],
      loaded: false,
    };

    this.handleSaveData = this.handleSaveData.bind(this);
  }

  componentWillMount() {
    // this.props.initialize({ active: true });
  }

  handleSaveData(state) {
    if (state) {
      // this.props.reset();
      console.log(state);
    }
  }

  render() {
    return <MainPresentational onsubmitData={this.handleSaveData} {...this.props} />;
  }
}

// const mapStateToProps = (completeStore) => // maps state (redux store) to component props
//   ({
//     session: completeStore.session,
//     allCampuses: completeStore.campusList,
//     appName: completeStore.appName,
//   });

// //  injects dispatch to call other actions from the action creators
// const mapDispatchToProps = (dispatch) =>
//   ({
//     sessionActions: bindActionCreators(sessionActions, dispatch),
//     pageOneActions: bindActionCreators(pageOneActions, dispatch),
//   });

// MainComponent.propTypes = {
//   initialize: propTypes.func,
//   reset: propTypes.func,
// };

export default MainContainer;
