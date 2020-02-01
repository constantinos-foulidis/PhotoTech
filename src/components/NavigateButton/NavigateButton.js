import React, { Component } from 'react';
import './Navigatebtn.css';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";

class NavigateButton extends Component {

  handleNewItem = () => {
    this.props.history.push("/products/add");
  }

  render() {
    return (
      <div>
      
      <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleNewItem}>Προσθήκη νέου</Button>
      </div>
    );
  }
}

export default withRouter(NavigateButton);
