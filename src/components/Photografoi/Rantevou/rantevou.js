import React, {Component} from 'react';

import {connect} from 'react-redux';

import Calendar from 'react-calendar';
import {getSeller,createSellersAppointment} from '../../../store/actions/Grafeio/sallers';
import Button from "react-bootstrap/Button";


import 'react-calendar/dist/Calendar.css';
import Overlay from 'react-bootstrap/Overlay';
import { Popover } from 'react-bootstrap';

class Rantevou extends Component {
           constructor(props){
             super(props);
             this.showDetailAppointments = this.showDetailAppointments.bind(this);
             this.handleCloseDetailAppointments = this.handleCloseDetailAppointments.bind(this);
             this.state = {
               ShowPopover: false,
               date:new Date(Date.now()),
               Month:null,
               year:null,
               day:null,
               filteredAppointmets:null,
               name:null,
               time:null,
               schoolName:null,
               email:null,
               nameYpeuthinou:null,
               PhoneYpeuthinou:null,
               topothesia:null,
               showmodalDetail:false
             }


           }
  onChange = (date) => {
    if(this.props.appointmentsById !=null){
      console.log(this.props.appointmentsById);
    let temp=this.props.appointmentsById.Appointments;

    let test=  temp.filter(appointments => new Date(parseInt(appointments.year,10),parseInt(appointments.month,10)-1,parseInt(appointments.day,10)).toLocaleDateString() === date.toLocaleDateString() );
    const year=date.toLocaleDateString().substring(4,9).replace('/','');
    const month=date.toLocaleDateString().substring(0,2).replace('/','');
    const day=date.toLocaleDateString().substring(2,4).replace('/','');
    console.log(test[0]);
    this.setState({ date:date,filteredAppointmets:test,year:year,month:month,day:day});
  }
}

  showDetailAppointments()  {

    this.setState({ ShowPopover: true });
  }
  handleCloseDetailAppointments() {
    this.setState({ showmodalDetail: false });
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
   let appointment=null;
   let popover=null;
   console.log(this.state.filteredAppointmets);
  if(this.state.filteredAppointmets !=null){
   appointment = (
     this.state.filteredAppointmets.map((appointments,index) => (
       <div className="cursorClick"  key={index} onClick={this.showDetailAppointments}>
      <div className="row justify-content-center" >
       <div className="col-1 mr-3">
     <p className="smallText" >{appointments.time}</p>
       </div>
       <div className="col-1">
     <p className="smallText" >{appointments.school}</p>
       </div>
       </div>
     </div>
   )))
 }
 if(this.state.ShowPopover===true){
  popover = (
    this.state.filteredAppointmets.map((appointments,index) => (
 <Popover id="popover-basic arrow" key={index}>
   <Popover.Content className="popoverWidth_Height detailSailler">
     <div className="smallText detailSailler" > Ημερομηνία : {appointments.day}/{appointments.month}/{appointments.year}</div>
     <div className="smallText detailSailler smallFormpop" > Ωρα : {appointments.time} </div>
     <div className="smallText detailSailler smallFormpop" > Σxoleio : {appointments.school}  </div>
     <div className="smallText detailSailler smallFormpop" > Topothesia : {appointments.topothesh} </div>
     <div className="smallText detailSailler smallFormpop" > onoma ipefthinou : {appointments.NameResponse}  </div>
     <div className="smallText detailSailler smallFormpop" > thl ipefthinou :  {appointments.PhoneResponse} </div>
     <div className="smallText detailSailler smallFormpop" > email :  {appointments.email}  </div>
   </Popover.Content>
 </Popover>
)));

}

    return (<React.Fragment>

      <div className="container mb-5">
      <h5 className="text-center">Ραντεβού</h5>
        <div className="row ">
         <div className="col-4 offset-3">
          <Calendar
           className="mb-5 ml-5 "
           onChange={this.onChange}
           value={this.state.date}
           onSelect={this.onClickCalendar}
         />
         </div>
        </div>
        <div className="row">
          <div className="col">
          <h5 className="text-center">{this.state.date.toLocaleDateString()}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-auto offset-5">
            {appointment}
          </div>
          <div className="col-auto">
            {popover}
          </div>
         </div>
      </div>

    </React.Fragment>)
  };
};

const mapStateToProps = (state, props) => {
  return {
    appointmentsById: state.photografers.appointmentsById,
    appointments: state.sellers.filterAppointments,
    loading: state.sellers.loading,
    SellerCode: state.loginGrafeiou.SellerCode,
    error: state.sellers.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getSellers: (formdata) => dispatch(getSeller(formdata)),
    createSellersAppointment:(data) => dispatch(createSellersAppointment(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rantevou);
