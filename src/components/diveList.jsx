import React from 'react';
import { ListGroup, ListGroupItem,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Background from '../images/sharks.jpg';


const DiveListComponent = (props) => {
  const {
    diveList,
    toggleDropdown,
    select,
    dropdownOpen,
    onSearch,
    listMessage,
  } = props;

  return (
    <div className="px-3 pb-3 mt-5 dive-list">
      <div className="background-image" style={{backgroundImage: "url(" + Background + ")"}}></div>
      <h3 className="text-shadow text-white">My Dives
        <div className="float-right">
          <form className="d-inline-block" id="search" onSubmit={onSearch} autoComplete="off">
            <input className="form-control bg-dark form-control-sm" type="text" name="search" id="sdfs" placeholder="Search location or number" aria-label="Search" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </form>
          <Dropdown size="sm" className="d-inline-block ml-3" isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              Sort By
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={select}>Number</DropdownItem>
              <DropdownItem onClick={select}>Location</DropdownItem>
              <DropdownItem onClick={select}>Date</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </h3>
      {!diveList && 
        <div>We have a problem... there is no diveList defined</div>
      }
      {diveList && diveList.length > 0 &&
        <div>
          <ListGroup>
            {diveList.map((dive) => (
              <ListGroupItem key={`dive-${dive.number}`} className="mb-2">
                <Link to={`/divedetails/${dive.number}`}>
                  <div className="border-bottom">
                    <span className="dive-no">Dive No. {dive.number}</span> 
                    <span className="float-right dive-date"><Moment format="M/D/YYYY" date={dive.date} /></span>
                  </div>
                  <div className="float-left">{dive.location}</div>
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      }
      {diveList && diveList.length <= 0 && 
        <h5 className="text-shadow text-white">{listMessage}</h5>
      }
    </div>
  );
};

export default DiveListComponent;
