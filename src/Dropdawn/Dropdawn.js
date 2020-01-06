import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import '../Dropdawn/Dropdown.css';
const Dropdawn = () => {
    return   (
      <Dropdown className="mr-2 marginBottomdropdawn">
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      Προιοντα Φωτογραφιας
    </Dropdown.Toggle>

    <Dropdown.Menu className="dropDownColor">
      <Dropdown.Item href="#/action-1">-Προτευον προιον</Dropdown.Item>
      <Dropdown.Item href="#/action-2">-Δευτερευον Προιον</Dropdown.Item>
      <Dropdown.Item href="#/action-3">-Τριτευον προιον</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
 )
};
export default Dropdawn;
