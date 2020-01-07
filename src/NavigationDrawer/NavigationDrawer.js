import React, { Component } from "react";
import './NavigationDrawer.css'
class NavigationDrawer extends Component {
  state = {
    state: {
      showNav: false
    }
  };

  openNavClick = e => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = e => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true
    });

    document.addEventListener("keydown", this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false
    });

    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };

  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "250px" : "0" };

    return (
      <React.Fragment>
        <span onClick={this.openNavClick} className="open-nav">
          &#9776;
        </span>
        <div onClick={this.navCoverClick} className="nav-cover" style={navCoverStyle} />
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <a href="#" onClick={this.closeNavClick} className="close-nav">
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </React.Fragment>
    );
  }
}
export default NavigationDrawer;
