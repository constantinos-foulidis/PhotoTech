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
import {getSeller,getCustomers,filterCustomersByYear} from '../../../store/actions/Grafeio/sallers';
import SellersHeader from "../SellersHeader/sellersHeader";
import ExportExcel from '../exportTOExcelPellates/exportTOExcelPellates';


class PellatesGrafeiou extends Component {
           constructor(props){
             super(props);

             this.state = {
               ShowDetailedCalendar: false,
               date: new Date(),
               Month:null
             }

           }
           componentDidMount(){
             this.props.getCustomers();

             setTimeout(() => {
               this.props.filterCustomersByYear();
                }, 1000);
           }

  render() {
 let showPellates=null;
 if(this.props.customers!=null){
   showPellates=(this.props.customers.map((customer,index) => {
     return (
       <tr key={index}>
         <td>{customer.nomos}</td>
         <td>{customer.schoolName}</td>
         <td>{customer.sellerName}</td>
         <td>{customer.dinami}</td>
         <td>{customer.packetCost}</td>
         <td>{customer.tmhmata}</td>
         <td>{customer.mobilePhone}</td>
         <td>{customer.schoolPhone}</td>
         <td>{customer.afm}</td>
         <td>{customer.doy}</td>
         <td>{customer.email}</td>
         <td>{customer.fax}</td>
         <td>{customer.ekprosopos_sillogou}</td>
         <td>{customer.headTeacher}</td>
       </tr>
     );
   }))
 }
    return (<React.Fragment>
      <NavigationGrafeio/>
     <NavigationToggleButton/>
      <div className="container mb-5 offset-3">
          <h1 className="offset-3 mb-5">Πελάτες</h1>
        <div className="row">
            <div className="col-auto">
              <Button  variant="info">Κανονικοι Πελάτες</Button>
            </div>
            <div className="col-auto">
            <Button  variant="info">Ειδικοί Πελάτες</Button>
            </div>
            <div className="col-auto">
              <Button className="mb-1" variant="info">Συμβολαια που απορριφθηκαν</Button>
            </div>
        </div>
        <div className="row offset-3">
           <Button className="mb-1" variant="info">αλφαβητικά</Button>
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
              <th scope="col">Τμηματα</th>
              <th scope="col">κινητο τηλεφωνο </th>
              <th scope="col">τηλ σχολειου</th>
              <th scope="col">αφμ</th>
              <th scope="col">δου</th>
              <th scope="col">email</th>
              <th scope="col">fax</th>
              <th scope="col">εκπροσοπος συλλογου</th>
              <th scope="col">Διευθηντης</th>
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
        </div>
        </div>
        <div className="col-auto">
    <ExportExcel  product={this.props.customers} />
      </div>
      <div className="col offset-2">
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
    customers: state.sellers.customersByYear,
    loading: state.sellers.loading,
    SellerCode: state.loginGrafeiou.SellerCode,
    error: state.sellers.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getCustomers: () => dispatch(getCustomers()),
    filterCustomersByYear:() => dispatch(filterCustomersByYear())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PellatesGrafeiou);
