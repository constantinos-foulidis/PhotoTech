import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {navigationToggleButton as NavigationToggleButton} from '../NavigationGrafeio/NavigationGrafeio';
import NavigationGrafeio from "../NavigationGrafeio/NavigationGrafeio";
import Calendar from 'react-calendar';
import {getSeller} from '../../../store/actions/Grafeio/sallers';
import SellersHeader from "../SellersHeader/sellersHeader";
import Button from "react-bootstrap/Button";
import "./SallersContent.css";
import 'react-calendar/dist/Calendar.css';
import Overlay from 'react-bootstrap/Overlay';
import { Popover } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
class SellersContent extends Component {
           constructor(props){
             super(props);

             this.state = {
               ShowDetailedCalendar: false,
               date:[],
               Month:null
             }

           }
  onChange = date => this.setState({ date })
  handleAddnew = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/recource/products/add",
      //state: {username: this.state.username}
    });

  }


  NewAppointmentHandler = () => {

      this.setState({ShowDetailedCalendar:true});
  }
  MonthChangeHandler = event => {
    event.persist();
    console.log(event);
      this.setState({
                      Month:event.target.selectedIndex+1,
                      date:new Date(2020,event.target.selectedIndex,1)
       });
  }
  onClickCalendar = event => {
    event.persist();
    console.log(event);
      // this.setState({
      //                 Month:event.target.selectedIndex+1,
      //                 date:new Date(2020,event.target.selectedIndex,1)
      //  });
  }

  render() {
    let sellers = null;
    let showSellers = null;
    let SpesificView = null;


    if (this.props.sellers != null) {
      showSellers = this.props.sellers.map((sellers, index) => (<div key={index}>
        <p className="smallText">Ονομα:{sellers.sellername}</p>
        <p className="smallText">email: {sellers.email}</p>
        <p className="smallText">Τηλ: 6978492740</p>
        <p className="smallText">Περιοχες: {sellers.region}</p>
        <p className="smallText">username: {sellers.fullName}</p>
      </div>))
    };
    if(this.state.ShowDetailedCalendar){
      const popover = (
      <Popover id="popover-basic arrow">
        <Popover.Content className="popoverWidth_Height detailSailler">
          <div className="smallText detailSailler" > Ημερομηνία : {this.state.date.toLocaleDateString()}</div>
          <div className="smallText detailSailler" > Ωρα :</div>
          <div className="smallText detailSailler" > Σxoleio : </div>
          <div className="smallText detailSailler" > Topothesia : </div>
          <div className="smallText detailSailler" > onoma ipefthinou : </div>
          <div className="smallText detailSailler" > thl ipefthinou : </div>
          <div className="smallText detailSailler" contentEditable="true" suppressContentEditableWarning={true}> email : </div>
          <div>testSomething</div>
        </Popover.Content>
      </Popover>
      );


      SpesificView=(
        <>
        <Calendar
         className="mb-5"
         onChange={this.onChange}
         value={this.state.date}
         onSelect={this.onClickCalendar}
       />

     <div className="row">
       <div className="col ">
     <h5 className="text-center" >{this.state.date.toLocaleDateString()}</h5>
       </div>
       <div className="col">
          {popover}
       </div>
      </div>
      </>
      )
    }else{
      if(this.props.appointments!=null){
      SpesificView=(

          this.props.appointments.map((appointments) => (
            <div>
          <p>{appointments.day}/{appointments.month}/{appointments.year}</p>
          </div>
          ))

      )
    }
    }
    return (<React.Fragment>
      <SellersHeader/>
      <div className="container mb-5 offset-3">
        <div className="row">
          <div className="col-4 mr-5">
            <div className="row">
              <div className="col border detailSailler">
                <h5>Στοιχεία πωλητη:</h5>
                {showSellers}
              </div>
            </div>
            <div className="row">
              <Button className="mb-3 mt-5" variant="info" onClick={this.NewAppointmentHandler}>+Νέο ραντεβού</Button>
            </div>
            <div className="row">
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Ανα/μήνα</Form.Label>
                <Form.Control as="select" custom="custom" onChange={this.MonthChangeHandler}>
                  <option>Ιανουάριος</option>
                  <option>Φεβρουάριος</option>
                  <option>Μαρτιος</option>
                  <option>Απρίλιος</option>
                  <option>Μαιος</option>
                  <option>Ιουνος</option>
                  <option>Ιουλιος</option>
                  <option>Αυγουστος</option>
                  <option>Σεμπτεμβριος</option>
                  <option>Οκτωμβριος</option>
                  <option>Νοεμβριος</option>
                  <option>Δεκεμβριος</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className="col-4 border">
              {SpesificView}
          </div>
          <div className="row">
            <div className="col">
              <Button className="mb-3 mr-2" variant="info">Εξαγωγή pdf</Button>
              <Button className="mb-3" variant="info">Εκτύπωση</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)
  };
};
const mapStateToProps = (state, props) => {
  return {
    sellers: state.sellers.filterSellers,
    appointments: state.sellers.filterAppointments,
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

export default connect(mapStateToProps, mapDispatchToProps)(SellersContent);
