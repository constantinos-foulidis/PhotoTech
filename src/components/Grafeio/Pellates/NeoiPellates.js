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

class NeoiPellates extends Component {
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
      <SellersHeader headertoShow="Νέοι Πελάτες"/>
      <div className="container mb-5 offset-3">
        <div className="row">
            <div className="col-auto">
              <Button  variant="info">Κανονικοι Πελάτες</Button>
            </div>
            <div className="col-auto">
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
        <div className="row">
          <div className="col-auto border text-center p-4 dropDownColor offset-2">
          <h5 className="mb-5">Συμβόλαιο</h5>
          <div className="row">
          <div className="col">
        <Button  variant="info">Απόριψη</Button>
        </div>
        <div className="col">
      <Button  variant="info">Αποθήκευση</Button>
      </div>
      <div className="col">
    <Button  variant="info">Ανάγνωση</Button>
    </div>
        </div>
        </div>
        <div className="col-auto">
      <Button  variant="info">Εξαγωγη pdf</Button>
      </div>
      <div className="col">
    <Button  variant="info">Εκτύπωση</Button>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NeoiPellates);
