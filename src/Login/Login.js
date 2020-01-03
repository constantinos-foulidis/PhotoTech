import React, { Component } from 'react';


class Login extends Component{
constructor(props){
  super(props);
  this.state = {value: ''};

  this.handleChange= this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
 }

  render(){
    return( <form onSubmit={this.handleSubmit}>

              <input className="col-7 mb-5" type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange} />

              <input className="col-10 mb-3" type="text" placeholder="PassWord" value={this.state.value} onChange={this.handleChange} />

              <input className=" form-check-input" type="checkbox" id="gridCheck"/>
                   <label className= "col-3 form-check-label" for="gridCheck">
                     Check me out
                   </label>


            <input className="col-7"type="submit" value="Submit" />
    </form>
  )
  };
}

export default Login;
