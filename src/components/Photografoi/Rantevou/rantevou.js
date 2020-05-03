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
    let temp=this.props.appointments;

  let test=  temp.filter(appointments => new Date(parseInt(appointments.year,10),parseInt(appointments.month,10)-1,parseInt(appointments.day,10)).toLocaleDateString() === date.toLocaleDateString() );
    const year=date.toLocaleDateString().substring(4,9).replace('/','');
    const month=date.toLocaleDateString().substring(0,2).replace('/','');
    const day=date.toLocaleDateString().substring(2,4).replace('/','');
    this.setState({ date:date,filteredAppointmets:test,year:year,month:month,day:day});
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


    return (<React.Fragment>

      <div className="container mb-5">
      <h5 className="text-center">Ραντεβού</h5>
        <div className="row">
          <Calendar
           className="mb-5 ml-5"
           onChange={this.onChange}
           value={this.state.date}
           onSelect={this.onClickCalendar}
         />
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
    getSellers: (formdata) => dispatch(getSeller(formdata)),
    createSellersAppointment:(data) => dispatch(createSellersAppointment(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rantevou);
