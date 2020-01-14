import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import '../Dropdawn/Dropdown.css';
const Dropdawn = (props) => {
  console.log(props.subcategory);
    return   (
      <Dropdown className="mr-2 marginBottomdropdawn">
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      {props.name}
    </Dropdown.Toggle>

    <Dropdown.Menu className="dropDownColor">
      {props.subcategory.map((name, index)=>(
        <Dropdown.Item value={name}>{name}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
 )
};
export default Dropdawn;
