import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { navigationToggleButton as NavigationToggleButton } from '../NavigationGrafeio/NavigationGrafeio';
import NavigationGrafeio from "../NavigationGrafeio/NavigationGrafeio";
import {getPhotografers,filterPhotografers,getPhotografersAppointments} from '../../../store/actions/Grafeio/photografers';
import { Link } from "react-router-dom";
class PhotografersHeader  extends Component {
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
  componentDidMount(){
       // setTimeout(() => {
       //   if( this.props.customers !=null){
       //        this.props.filterCustomers(this.props.sellers[0].sellername);
       //        this.props.filterAppointments(this.props.sellers[0].sellerCode);
       //        this.props.filterSeller(this.props.sellers[0].sellername);
       //   console.log("mpika");
       //      }
       //    }, 1000);
       this.props.getApointments();
  }
  render(){
    let photografers = [];
    let appointments=[];
    let showSellers = null;
    let customers = [];
    let header=null;
    let noti=null;
    if(this.props.headertoShow ===undefined){
      header = (  <h1>Πωλητες:</h1>)
    }else{

        header = (  <h1>{this.props.headertoShow}:</h1>)
    }
    if (this.props.photografers === null && JSON.parse(localStorage.getItem('photograferID')!=null) && JSON.parse(localStorage.getItem('photograferID')!=undefined) ) {
      // console.log("Get sellers called",this.props.SellerCode);
        const photograferCode =JSON.parse(localStorage.getItem('photograferID'))
        console.log("Get Photografer",photograferCode);
       // this.props.getSellersAppointments();
       // this.props.getCustomers();
       this.props.getPhotografers(photograferCode.toString());


     }else {
       photografers = this.props.photografers;
       // appointments = this.props.appointments;
       // customers=this.props.newCustomers;
       //customers
     }

     console.log("insideSeelers",JSON.parse(localStorage.getItem('officeLogedin')));
     if(  this.props.photografers!=null  ){ //&& appointments!=null
console.log("insideSeelers",JSON.parse(localStorage.getItem('officeLogedin')));

        showSellers = this.props.photografers.map((photografers, index) => (

          <Dropdown key={index} className="center mr-5 " >
            <Dropdown.Toggle variant="secondary">
             {photografers.photografername}
            </Dropdown.Toggle>
            <Dropdown.Menu className="row">
             <Link className="dropdowncss" to="/office/photografers" onClick={() =>{this.props.filterPhotografers(photografers._id)}}>-Ραντεβού</Link>
              <Link className="dropdowncss" to="/office/sellers/Pellates" onClick={() =>{this.props.filterCustomers(photografers.photografername)}}>-Φωτογράφιση</Link>
              <Link className="dropdowncss" to="/office/sellers/NeoiPellates" onClick={() =>{this.props.filterCustomers(photografers.photografername)}}>-Πληρωμή {this.props.newCustomers!=null ? <div className="pl-2 pr-2 ml-2 bg-danger text-white d-inline rounded-circle">{this.props.newCustomers.length}</div>:"" }</Link>
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
    photografers: state.photografers.photografers,
    // appointments:state.sellers.appointments,
    // loading: state.sellers.loading,
    // SellerCode: state.loginGrafeiou.SellerCode,
    // customers:state.sellers.customers,
    // newCustomers:state.sellers.newCustomers,
    // error: state.sellers.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {

    getPhotografers: (formdata) => dispatch(getPhotografers(formdata)),
    filterPhotografers: (id) => dispatch(filterPhotografers(id)),
    getApointments: () => dispatch(getPhotografersAppointments()),

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PhotografersHeader);
