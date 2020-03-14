import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import Button from "react-bootstrap/Button";
import {navigationToggleButton as NavigationToggleButton} from '../NavigationGrafeio/NavigationGrafeio';
import NavigationGrafeio from "../NavigationGrafeio/NavigationGrafeio";
import Calendar from 'react-calendar';
import {getSeller} from '../../../store/actions/Grafeio/sallers';
import SellersHeader from "../SellersHeader/sellersHeader";

class Pellates extends Component {
           constructor(props){
             super(props);

             this.state = {
               ShowDetailedCalendar: false,
               date: new Date(),
               Month:null
             }

           }

  render() {
 let showPellates=null;
 if(this.props.sellers!=null){
   showPellates=(this.props.sellers.map((sellers,index) => {
     return (
       <tr key={index}>
         <td>{sellers.sellername}</td>
         <td>{sellers.region}</td>
         <td>{sellers.fullName}</td>
         <td>{sellers.email}</td>
         <td>{sellers.fullName}</td>
       </tr>
     );
   }))
 }
    return (<React.Fragment>
      <SellersHeader headertoShow="Πελάτες"/>
      <div className="container mb-5 offset-3">
        <div className="row">
            <div className="col-3">
              <Button  variant="info">Κανονικοι Πελάτες</Button>
            </div>
            <div className="col-3">
            <Button  variant="info">Ειδικοί Πελάτες</Button>
            </div>
            <div className="col offset-3">
              <Button className="mb-1" variant="info">αλφαβητικά</Button>
            </div>
        </div>
        <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Τοποθεσία</th>
              <th scope="col">Σχολείο</th>
              <th scope="col">Πωλητές</th>
              <th scope="col">Δυναμη</th>
              <th scope="col">Τιμή Πακέτου</th>
            </tr>
          </thead>
          <tbody>
                {showPellates}
          </tbody>
        </table>
</div>
      </div>
    </React.Fragment>)
  };
};
const mapStateToProps = (state, props) => {
  return {
    sellers: state.sellers.filterSellers,
    loading: state.sellers.loading,
    SellerCode: state.loginGrafeiou.SellerCode,
    error: state.sellers.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getSellers: (formdata) => dispatch(getSeller(formdata))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pellates);
