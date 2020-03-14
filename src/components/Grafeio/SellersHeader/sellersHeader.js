import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { navigationToggleButton as NavigationToggleButton } from '../NavigationGrafeio/NavigationGrafeio';
import NavigationGrafeio from "../NavigationGrafeio/NavigationGrafeio";
import {getSeller,filterSeller} from '../../../store/actions/Grafeio/sallers';
import { Link } from "react-router-dom";
class SellersHeader  extends Component {
    constructor(props){
      super(props);
    }
  handleAddnew = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/recource/products/add",
      //state: {username: this.state.username}
    });

  }
  render(){
    let sellers = [];
    let showSellers = null;
    let header=null;
    if(this.props.headertoShow ===undefined){
      header = (  <h1>Πωλητες:</h1>)
    }else{
    
        header = (  <h1>{this.props.headertoShow}:</h1>)
    }
    if (this.props.sellers === null && JSON.parse(localStorage.getItem('sellerID')!=null)) {
       console.log("Get sellers called",this.props.SellerCode);
        const sellerCode =JSON.parse(localStorage.getItem('sellerID'))
        console.log("Get sellers called",sellerCode);
       this.props.getSellers(sellerCode.toString());
     }else {
       sellers = this.props.sellers;
     }
     console.log("insideSeelers",JSON.parse(localStorage.getItem('officeLogedin')));
     if( sellers!=null){
console.log("insideSeelers",JSON.parse(localStorage.getItem('officeLogedin')));
        showSellers = sellers.map((sellers, index) => (
          <Dropdown key={index} className="center mr-5 " >
            <Dropdown.Toggle variant="secondary">
             {sellers.sellername}
            </Dropdown.Toggle>
            <Dropdown.Menu className="row">
             <Link className="dropdowncss" to="/office/sellers" onClick={() =>{this.props.filterSeller(sellers.sellername)}}>-Ραντεβού</Link>
              <Link className="dropdowncss" to="/office/sellers/Pellates" onClick={() =>{this.props.filterSeller(sellers.sellername)}}>-Πελάτες</Link>
              <Link className="dropdowncss" to="#/action-1">-Νέοι Πελάτες</Link>
              <Link className="dropdowncss" to="/office" onClick={() =>{ this.props.logout()}}  >-Πληρωμές Πωλητών</Link>
            </Dropdown.Menu>
          </Dropdown>

        ))
        console.log(showSellers);
     }

    return   (
  <React.Fragment>
   <Container className="mb-5">
   <div className="headerCenter mb-4">
  {header}
    </div>

        <Row sm={4}>
        <NavigationGrafeio/>
       <NavigationToggleButton/>
       </Row>
        <Col className="justify-content-start offset-3">
       <Row md={10} >
         {showSellers}
        </Row>
      </Col>
      </Container>
      </React.Fragment>
 )
}
};
const mapStateToProps = (state, props) => {
  return {
    sellers: state.sellers.sellers,
    loading: state.sellers.loading,
    SellerCode: state.loginGrafeiou.SellerCode,
    error: state.sellers.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getSellers: (formdata) => dispatch(getSeller(formdata)),
    filterSeller:(sellername) => dispatch(filterSeller(sellername)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SellersHeader);
