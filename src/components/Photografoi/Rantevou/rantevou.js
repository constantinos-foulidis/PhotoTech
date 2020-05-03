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
               ShowDetailedCalendar: false,
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
    console.log("mpika sto modal");
    this.setState({ showmodalDetail: true });
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
   console.log(this.state.filteredAppointmets);
  if(this.state.filteredAppointmets !=null){
   appointment = (
     this.state.filteredAppointmets.map((appointments,index) => (
       <div  key={index} onClick={this.showDetailAppointments}>
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
         {appointment}
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
