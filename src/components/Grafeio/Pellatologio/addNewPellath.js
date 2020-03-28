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
import ExportExcel from '../exportTOExcelPellates/exportTOExcelPellates';
import {getCustomers} from '../../../store/actions/Grafeio/sallers';


class AddNewPellath extends Component {
           constructor(props){
             super(props);

             this.state = {
               ShowDetailedCalendar: false,
               date: new Date(),
               Month:null
             }

           }
           handleAddNewScool=()=>{
             console.log(this.props);
             this.props.history.push({
               pathname: "/office/pellatologio",
               //state: {username: this.state.username}
             });
           }
  render() {

    return (<React.Fragment>
      <NavigationGrafeio/>
     <NavigationToggleButton/>
      <div className="container mt-5 offset-3">
          <h1 className="offset-3 mb-5">Πελατολόγιο</h1>
        <div className="row mb-4">
            <div className="col-auto">
              <Button  variant="info" onClick={this.handleAddNewScool}>Λίστα σχολείων</Button>
            </div>
            <div className="col-auto">
            <Button  variant="info">Προσθήκη Σχολείου</Button>
            </div>
        </div>
          <Form className="border p-3 form offset-3 ">
          <div className="row mb-2">
           <h5>Στοιχεία Σχολείου</h5>
          </div>
        <div className="row">
         <div className="col-auto">
          <Form.Group controlId="exampleForm.ControlInput1" >
            <Form.Label>Όνομα Σχολείου</Form.Label>
            <Form.Control
              required
              name="ονομα σχολειου"
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
              style={{height: "50%",width: "100%"}}
            />
            </Form.Group>
            </div>
            <div className="col-auto">
             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>Τμήματα</Form.Label>
               <Form.Control
                 required
                 name="ονομα σχολειου"
                 type="text"
                 value={this.state.username}
                 onChange={this.handleUsername}
                   style={{height: "50%",width: "100%"}}
               />
               </Form.Group>
             </div>
       </div>
       <div className="row">
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>Διευθηνση</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
               style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>Δυναμη</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
               style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
       </div>
       <div className="row">
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>Τηλέφωνο Σχολείου</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
             style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>ΦΑΞ</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
               style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
       </div>
       <div className="row">
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>Διευθηνση</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
             style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>Δυναμη</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
             style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
       </div>
       <div className="row mb-2">
        <h5>Στοιχεία Συλλόγου</h5>
       </div>
       <div className="row">
       <div className="col-auto">
       <Form.Group controlId="exampleForm.ControlInput1">
         <Form.Label>Εκπρόσωπος Συλλόγου</Form.Label>
         <Form.Control
           required
           name="ονομα σχολειου"
           type="text"
           value={this.state.username}
           onChange={this.handleUsername}
           style={{height: "50%",width: "100%"}}
         />
         </Form.Group>
       </div>
       <div className="col-auto">
       <Form.Group controlId="exampleForm.ControlInput1">
         <Form.Label>Τηλέφωνο</Form.Label>
         <Form.Control
           required
           name="ονομα σχολειου"
           type="text"
           value={this.state.username}
           onChange={this.handleUsername}
           style={{height: "50%",width: "100%"}}
         />
         </Form.Group>
       </div>
       <div className="col-auto">
       <Form.Group controlId="exampleForm.ControlInput1">
         <Form.Label>E-mail</Form.Label>
         <Form.Control
           required
           name="ονομα σχολειου"
           type="text"
           value={this.state.username}
           onChange={this.handleUsername}
           style={{height: "50%",width: "100%"}}
         />
         </Form.Group>
       </div>
       </div>
       <div className="row mb-2">
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>ΑΦΜ</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
             style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
         <div className="col-auto">
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>ΔΟΥ</Form.Label>
           <Form.Control
             required
             name="ονομα σχολειου"
             type="text"
             value={this.state.username}
             onChange={this.handleUsername}
             style={{height: "50%",width: "100%"}}
           />
           </Form.Group>
         </div>
       </div>
       <div className="row">
         <div className="col">
         <Form.Group className="offset-6">
             <Button
               className="mr-2"
               type="submit"
               onClick={this.handleSubmit}
               variant="info"
             >
               Καταχώρηση
             </Button>
             <Button type="button" variant="info" onClick={this.return}>
               Ακύρωση
             </Button>
         </Form.Group>
         </div>
       </div>
        </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPellath);
