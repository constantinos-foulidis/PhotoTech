import React, {Component} from "react";
import './NavigationDrawer.css'
import Dropdawn from '../Dropdawn/Dropdawn';
import {Link} from "react-router-dom";
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
          <Link to="#" onClick={this.closeNavClick} className="close-nav">
            &times;
          </Link>
            <Dropdawn className="side-dropdown" name="Προιόντα φωτογραφίας" subcategory={[]}/>
          <Link to="#">Προιοντα Φωτογραφιας</Link>
          <Link to="#">Δωρα</Link>
          <Link to="#">Υλικα εργαστηρίου</Link>
          <Link to="#">Προσθήκη νέου</Link>
            <Dropdawn name="Προιόντα φωτογραφίας" subcategory={[]}/>
          <Link to="/products/handleuser">Διαχείρηση</Link>
          <Link to="/products/adduser">Προσθήκη νέου</Link>
        </div>
      </React.Fragment>
    );
  }
}
export default NavigationDrawer;
