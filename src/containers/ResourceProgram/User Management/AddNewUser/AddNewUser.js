import React, { Component } from 'react';
//import '../NavigateButton/Navigatebtn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {createUser} from '../../../../store/actions/users';
import {connect} from 'react-redux';

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: '',
        password: '',
        confirmpassword: '',
        fullName: '',
      errors: {},
    }
    this.handleUsername = this.handleUsername.bind(this);
      this.handlefullName = this.handlefullName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
      this.handleconfirmPassword = this.handleconfirmPassword.bind(this);
    //this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleUser = () => {
   console.log(this.props);
   this.props.history.push({
     pathname: "/recource/user_management",
     //state: {username: this.state.username}
   });
 }
 handleUsername(event) {
   this.setState({userName: event.target.value});
 }
 handlefullName(event) {
   this.setState({fullName: event.target.value});
 }
 handleconfirmPassword(event) {
   this.setState({confirmpassword: event.target.value});
 }
 handlePassword(event) {
   this.setState({password: event.target.value});
 }

  handleSubmit(event) {
    event.preventDefault();
   let formdata=null;
    if (this.state.password === this.state.confirmpassword) {
         formdata={
           username:this.state.userName,
           fullName:this.state.fullName,
           password:this.state.password,
           isAdmin:"1"
         }
      this.props.createUser(formdata);

    }
  };

  return = () => {
    this.props.history.goBack();
  }


  render() {
    return (


      <div className="Conteiner">
        <h1 className="headerCenter mb-4">Χρήστες</h1>
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
                <Form.Control required name="userName" type="text" value={this.state.username} onChange={this.handleUsername} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Ονοματεπώνυμο</Form.Label>
                <Form.Control required name="fullName" type="text" value={this.state.fullName} onChange={this.handlefullName} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Κωδικός</Form.Label>
                <Form.Control required name="password" type="password" value={this.state.password} onChange={this.handlePassword} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control required name="confirmpassword" type="password" value={this.state.confirmpassword} onChange={this.handleconfirmPassword} />
              </Form.Group>
              <Form.Group as={Row} className="justify-content-end offset-6">
                <Col sm={{ span: 10 }}>
                  <Button className="mr-2" type="submit" onClick={this.handleSubmit} variant="info">Κατοχήρωση</Button>
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
const mapStateToProps = (state, props) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
    createUser: (formdata) => dispatch(createUser(formdata))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddNewUser);
