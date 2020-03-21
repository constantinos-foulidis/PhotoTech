import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from "react-bootstrap/Button";
import {getSeller} from '../../../store/actions/Grafeio/sallers';
import SellersHeader from "../SellersHeader/sellersHeader";



class PliromesPoliton extends Component {
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
 if(this.props.customers!=null){
   showPellates=(this.props.customers.map((customer,index) => {
     return (
       <tr key={index}>
         <td>{customer.nomos}</td>
         <td>{customer.schoolName}</td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
       </tr>
     );
   }))
 }
    return (<React.Fragment>
      <SellersHeader headertoShow="Πληρωμές Πωλητών"/>
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
              <th scope="col">ΝΟΜΟΣ</th>
              <th scope="col">ΣΧΟΛΕΙΟ</th>
              <th scope="col">ΣΥΜΦΩΝΗΘΕΝΤΑ</th>
              <th scope="col">ΑΠΟΣΤΑΛΕΝΤΑ</th>
              <th scope="col">ΕΚΚΡΕΜΟΤΗΤΕΣ</th>
              <th scope="col">ΕΠΙΣΤΡΟΦΕΣ</th>
              <th scope="col">ΔΩΡΕΕΣ</th>
              <th scope="col">ΧΑΜΕΝΑ</th>
              <th scope="col">ΠΩΛΗΘΕΝΤΑ</th>
              <th scope="col">ΤΙΜΗ</th>
              <th scope="col">Χ 10 %</th>
            </tr>
          </thead>
          <tbody>
                {showPellates}
          </tbody>
        </table>
        <div className="row offset-8">
        <div className="col-5 mr-4" >
         <Button variant="info" onClick={this.NewAppointmentcall}>Αποθήκευση αλλαγών</Button>
        </div>
        <div className="col-auto border">
           <h5>Σύνολο</h5>
           <p>300</p>
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
    customers: state.sellers.filterCustomers,
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

export default connect(mapStateToProps, mapDispatchToProps)(PliromesPoliton);
