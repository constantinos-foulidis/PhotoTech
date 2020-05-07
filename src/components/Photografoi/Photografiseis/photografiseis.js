import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import Button from "react-bootstrap/Button";

import Calendar from 'react-calendar';
import {getSeller} from '../../../store/actions/Grafeio/sallers';



class Photografiseis extends Component {
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
 if(this.props.appointmentsById!=null){
   showPellates=(this.props.appointmentsById.Appointments.map((appointments,index) => {
     return (
       <tr key={index}>
         <td>{appointments.topothesh}</td>
         <td>{appointments.school}</td>
         <td>{appointments.day}/{appointments.month}/{appointments.year}</td>
       </tr>
     );
   }))
 }
    return (<React.Fragment>

      <div className="container mb-5 ">
        <h1 className="text-center mb-5">Φωτογραφίσεις</h1>
        <div className="row">
            <div className="col-auto">
              <Button  variant="info">Καρτέλες</Button>
            </div>
            <div className="col-auto">
            <Button  variant="info">Συμπλήρωση νεας καρτέλας</Button>
            </div>
            <div className="col offset-3">
              <Button className="mb-1" variant="info">αλφαβητικά</Button>
            </div>
        </div>
        <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Νομός</th>
              <th scope="col">Σχολείο</th>
              <th scope="col">Ημ/νια</th>
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
    getSellers: (formdata) => dispatch(getSeller(formdata))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Photografiseis);
