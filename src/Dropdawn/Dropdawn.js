import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import '../Dropdawn/Dropdown.css';
const Dropdawn = (props) => {
  return (
    <Dropdown className="mr-2 marginBottomdropdawn">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {props.category.name}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropDownColor" >
        {props.category.subcategories.map((name, index) => (
          <Dropdown.Item key={name} value={name}>{name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
};
export default Dropdawn;
