import React, { Component } from 'react';
//import '../NavigateButton/Navigatebtn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userName: '',
        password: '',
        confirmpassword: '',
        fullName: '',
      },
      errors: {},
    }
  }

 handleUser = () => {
   console.log(this.props);
   this.props.history.push({
     pathname: "/products/add",
     //state: {username: this.state.username}
   });
 }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    const { formData, errors } = this.state;
    const { password, confirmpassword } = formData;
    console.log(password);
    console.log(confirmpassword);
    if (password != confirmpassword) {
      this.setState({ // update errors using setState -- never directly modify a component's state
        errors: {
          ...errors,
          password: "Passwords must be the same",
        }
      });

    }
  };

  return = () => {
    this.props.history.goBack();
  }

  handleUserInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      formData: {
        [e.target.name]: e.target.value
      }
    });
  }


  render() {
    return (
      <div className="Conteiner">
        <div className="row justify-content-start">
          <div className="col">
            <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleUser}>Διαχείρηση</Button>
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
                <Form.Control required name="userName" type="text" onChange={(event) => this.handleUserInput(event)} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Ονοματεπώνυμο</Form.Label>
                <Form.Control required name="fullName" type="text" onChange={(event) => this.handleUserInput(event)} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Κωδικός</Form.Label>
                <Form.Control required name="password" type="password" onChange={(event) => this.handleUserInput(event)} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control required name="confirmpassword" type="password" onChange={(event) => this.handleUserInput(event)} />
              </Form.Group>
              <Form.Group as={Row} className="justify-content-end offset-6">
                <Col sm={{ span: 10 }}>
                  <Button className="mr-2" type="submit" variant="info">Κατοχήρωση</Button>
                  <Button type="button" variant="info" onClick={this.return}>Ακυρωση</Button>
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
