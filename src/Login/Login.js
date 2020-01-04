import React, { Component } from 'react';
import '../Login/Login.css';
import { Checkbox } from '@material-ui/core';

class Login extends Component{
constructor(props){
  super(props);
  this.state = {
               username:'',
               password:'',
               isLogin:true
         }
this.handleUsername=this.handleUsername.bind(this);
this.handlePassword=this.handlePassword.bind(this);
  //this.handleChange= this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleUsername(event) {
   this.setState({username: event.target.value});
 }
 handlePassword(event) {
    this.setState({password: event.target.value});
  }

 handleSubmit(event) {
  // alert('A name was submitted: ' + this.state.username+this.state.password);
  //dad event.preventDefault();
   console.log(event.preventDefault());
    this.props.history.push({
    pathname : "/products",
    state: {username: this.state.username}  
    });
 }

  render(){
    return( <form  onSubmit={this.handleSubmit}>
          <div className="Container background_form">
             <div className="row mb-5">
               <div className="col ">
              <input  type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsername} />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
              <input  type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
              </div>
            </div>
              <div className="row">
                <div className="col ">
                  <Checkbox
               defaultChecked
               color="default"
               value="default"
               inputProps={{ 'aria-label': 'checkbox with default color' }}
             />
                   <label >
                    Να Παράμεινω Συνδεμενος
                   </label>
                     </div>
                     <div className="col-5">
                   <input type="submit" value="Συνδεση" />
                     </div>
             </div>
        </div>
    </form>
  )
  };
}

export default Login;
