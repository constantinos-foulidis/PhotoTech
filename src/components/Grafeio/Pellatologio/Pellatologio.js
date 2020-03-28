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
import {getSeller,getCustomers} from '../../../store/actions/Grafeio/sallers';
import SellersHeader from "../SellersHeader/sellersHeader";
import ExportExcel from '../exportTOExcelPellates/exportTOExcelPellates';



class Pellatologio extends Component {
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
  }
  handleAddNewScool=()=>{
    console.log(this.props);
    this.props.history.push({
      pathname: "/office/addNewScool",
      //state: {username: this.state.username}
    });
  }
  render() {
 let showPellates=null;
 if(this.props.customers!=null){
   showPellates=(this.props.customers.map((customer,index) => {
     return (
       <tr key={index}>
         <td>{customer.nomos}</td>
         <td>{customer.schoolName}</td>
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

      <div className="container mt-5 offset-3">
          <h1 className="offset-3 mb-5">Πελατολόγιο</h1>
        <div className="row mb-4">
            <div className="col-auto">
              <Button  variant="info">Λίστα σχολείων</Button>
            </div>
            <div className="col-auto">
            <Button  variant="info" onClick={this.handleAddNewScool}>Προσθήκη Σχολείου</Button>
            </div>
            <div className="col offset-3">
              <Button className="mb-1" variant="info">αλφαβητικά</Button>
            </div>
        </div>
        <div className="row">
        <div className="col">
          <Button  variant="info">Ολα</Button>
        </div>
        <div className="col">
          <Button  variant="info">Blacklist</Button>
        </div>
        <div className="col">
          <Button  variant="info">Εξαγωγή pdf</Button>
        </div>
        <div className="col">
          <Button  variant="info">Εκτύπωση</Button>
        </div>
        <div className="col">
          <Button  variant="info">Εξαγωγή σε excel</Button>
        </div>
        </div>
        <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Νομός</th>
              <th scope="col">Σχολείο</th>
              <th scope="col">Τηλ Σχολείου</th>
              <th scope="col">Εκπρ Συλλογου</th>
              <th scope="col">Τηλ Εκπρ</th>
              <th scope="col">αφμ</th>
              <th scope="col">δου</th>
              <th scope="col">email</th>
              <th scope="col">fax</th>
              <th scope="col">Διευθηντης</th>
            </tr>
          </thead>
          <tbody>
                {showPellates}
          </tbody>
        </table>
      </div>
      <h5>Στοιχεία σχολείου</h5>
        <div className="row">
          <div className="col-1">
           <p>'Ονομα</p>
          </div>
          <div className="col-3">
          <input  className="h-50" type="text" placeholder="Fullname" value={this.state.fullName} onChange={this.handleFullname}/>
          </div>
         </div>
         <div className="row">
             <div className="col-1">
          <p>'Διεύθυνση</p>
              </div>
              <div className="col-3">
         <input  className="h-50" type="text" placeholder="Fullname" value={this.state.fullName} onChange={this.handleFullname}/>
              </div>
         </div>
       </div>
    </React.Fragment>)
  };
};
const mapStateToProps = (state, props) => {
  return {
    sellers: state.sellers.filterSellers,
    customers: state.sellers.customers,
    loading: state.sellers.loading,
    SellerCode: state.loginGrafeiou.SellerCode,
    error: state.sellers.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
      getCustomers: () => dispatch(getCustomers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pellatologio);
