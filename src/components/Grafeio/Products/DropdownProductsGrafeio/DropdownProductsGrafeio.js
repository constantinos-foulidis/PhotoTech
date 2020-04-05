import React,{Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/products';
import { withRouter } from "react-router-dom";
class DropdownProductsGrafeio extends Component {
   constructor(props){
     super(props);
  this.handleProducts = this.handleProducts.bind(this);
   }
   handleProducts(event) {
     this.props.filterProducts(event);
   }
  render(){
  return (
    
    <Dropdown className="mr-2 marginBottomdropdawn">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {this.props.category.name}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropDownColor" >
        {this.props.category.subcategories.map((name, index) => (
          <Dropdown.Item key={name} value={name} onClick={() =>this.props.filterProducts(name)}>{name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
}

const mapDispatchToProps = dispatch => {
  return {
  filterProducts: (subcategoryName) => dispatch(actions.filterProductsSubcategory(subcategoryName))
  }
}
export default withRouter(connect(null,mapDispatchToProps)(DropdownProductsGrafeio));
