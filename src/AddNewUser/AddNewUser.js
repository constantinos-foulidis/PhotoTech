import React, { Component } from 'react';
//import '../NavigateButton/Navigatebtn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AddNewUser extends Component {
  constructor(props){
    super(props);
  }

  handleNewItem = () => {
    console.log(this.props);
     this.props.history.push("/products/add");
  }

  render () {
    return (
        <div className="Conteiner">
          <div className="row justify-content-start">
          <div className="col">
             <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Διαχείρηση</Button>
          </div>
          <div className="col">
             <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Προσθήκη Νέου</Button>
          </div>
          </div>
          <div className="row ">
          <div className="col">
           <Form className="border p-3 form">
           <Form.Group controlId="exampleForm.ControlInput1">
             <Form.Label>Όνομα χρήστη</Form.Label>
             <Form.Control type="text"  />
           </Form.Group>
           <Form.Group controlId="exampleForm.ControlInput1">
             <Form.Label>Ονοματεπώνυμο</Form.Label>
             <Form.Control type="text"  />
           </Form.Group>
           <Form.Group controlId="exampleForm.ControlInput1">
             <Form.Label>Κωδικός</Form.Label>
             <Form.Control type="text"  />
           </Form.Group>
           <Form.Group controlId="exampleForm.ControlInput1">
             <Form.Control type="text"  />
           </Form.Group>
           <Form.Group as={Row}>
        <Col sm={{ span: 10}}>
          <Button className="mr-2" type="button" variant="info">Κατοχήρωση</Button>
          <Button type="button" variant="info">Ακυρωση</Button>
        </Col>
      </Form.Group>
           </Form>
          </div>
          </div>
        </div>
    );
  }
}

export default AddNewUser;
