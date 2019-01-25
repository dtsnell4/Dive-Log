import React from 'react';
import { ListGroup, ListGroupItem,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import Background from '../images/sharks.jpg';


const DiveListComponent = (props) => {
  const {
    diveList,
    toggleDropdown,
    select,
    dropdownOpen,
  } = props;
console.log(diveList)
  return (
    <div className="pl-3 pb-3 pr-3 pt-2 dive-list">
      <div className="background-image" style={{backgroundImage: "url(" + Background + ")"}}></div>
      <h3 className="text-shadow text-white">My Dives 
        <Dropdown size="sm" className="float-right" isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret>
            Sort By
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={select}>Number</DropdownItem>
            <DropdownItem onClick={select}>Location</DropdownItem>
            <DropdownItem onClick={select}>Date</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
                    <span className="font-weight-bold">Dive <Badge color="info">{dive.number}</Badge></span> 
                    <span className="float-right dive-date">{dive.date}</span>
                  </div>
                  <div className="float-left">{dive.location}</div>
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      }
      {diveList && diveList.length <= 0 && 
        <h5 className="text-shadow text-white">You don't have any dives logged yet.  Time to get wet!!!</h5>
      }
    </div>
  );
};

export default DiveListComponent;
