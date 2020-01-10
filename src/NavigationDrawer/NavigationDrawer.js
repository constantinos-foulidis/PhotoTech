import React, {Component} from "react";
import './NavigationDrawer.css'
import Dropdawn from '../Dropdawn/Dropdawn';
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
         <h2>Κατηγοριες</h2>
          <a href="#" onClick={this.closeNavClick} className="close-nav">
            &times;
          </a>
            <Dropdawn className="side-dropdown" name="Προιόντα φωτογραφίας"/>
          <a href="#">Προιοντα Φωτογραφιας</a>
          <a href="#">Δωρα</a>
          <a href="#">Υλικα εργαστηρίου</a>
          <a href="#">Προσθήκη νέου</a>
            <Dropdawn name="Προιόντα φωτογραφίας"/>
          <a href="#">Διαχείρηση</a>
          <a href="#">Προσθήκη νέου</a>
        </div>
      </React.Fragment>
    );
  }
}
export default NavigationDrawer;
