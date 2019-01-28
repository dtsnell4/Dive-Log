import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectContact from '../actions/selectContactActions'
import ContactActive from './contactActive'
import {bindActionCreators} from 'redux'

class ContactList extends Component {

  handleContact = (contact) => {
    debugger;
    this.props.selectContact(contact);
  }

  renderList() {
    return this.props.contacts.map((contact) => {
      return (
        <li
          key={contact.phone}
          //onClick={() => this.props.selectContact(contact)}
          onClick={() => this.handleContact(contact)}

          className='list-group-item'>{contact.name}</li>
      );
    });
  }


  render() {
    console.log(this);
    return (
      <div>
        <ul className = 'list-group col-sm-4'>
          {this.renderList()}
        </ul>
        <ContactActive/>
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  // console.log(state)
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectContact: selectContact
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
