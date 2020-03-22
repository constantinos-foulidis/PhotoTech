import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { toggleNavigator } from "../../../store/actions/navigator";
import * as actions from "../../../store/actions/products";
class NavigationGrafeio extends Component {
    constructor(props){
      super(props);
    }
handleSellers (){

     this.history.push({
     pathname: " /office/sellers",
   });
}
  render() {
    const { showNav } = this.props;
    let sideNavStyle = { width: showNav ? "250px" : "0" };
    let adminExtras = null;


    return (
      <React.Fragment>
        <div className="row">
          <div name="side-nav" className="side-nav" style={sideNavStyle}>
            <h2 className="mb-5 text-dark">Κατηγορίες</h2>
            <Link to="#" onClick={this.props.closeNav} className="close-nav">
              &times;
            </Link>
            <Dropdown className="mb-3 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"

              >
                Πωλητές

              </Dropdown.Toggle>

              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link
                  to="/office/sellers"

                >
                  -Ραντεβού
                </Link>
                <Link
                  to="/recource/products"
                  onClick={() => {
                    this.filterProducts("Δώρα");
                  }}
                >
                  -Πελάτες
                </Link>
                <Link
                  to="/recource/products"
                  onClick={() => {
                    this.filterProducts("Υλικα Εργαστηρίου");
                  }}
                >
                  -Νεοι Πελάτες
                </Link>
                <Link to="/recource/products/add" className="mb-3">
                  -Πληρωμές Πωλητων
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Προιόντα
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Πελατολόγιο
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/office/pellatologio">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Παραστατικά
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Φωτογράφοι
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Αναφορά παραγγελιών
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Εισπραξεις
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Πελάτες
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Προσφορές
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Επανεκτυπώσεις
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Vouchers
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2 dropdownStylingnav">
              <Dropdown.Toggle
                className="btnwidthdrawer"
                variant="info"
                id="dropdown-basic"
              >
                Αποστολές
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropDownColor spesificDropdown">
                <Link to="/recource/user_management">-Διαχείριση</Link>
                <Link to="/recource/user_management/add">-Προσθήκη νέου</Link>
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
// <h5 className="mb-5">Κατηγορίες</h5>
const toggleButton = props => {
  return (
    <div className="row">
      <span onClick={props.openNav} className="open-nav">
        &#9776;
      </span>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    showNav: state.navigator.open,
    isAdmin: state.login.isAdmin,
    products: state.products.products,
    ...props
  };
};

const handleEscKey = (e, toggleNavigation) => {
  if (e.key === "Escape") {
    document.removeEventListener("keydown", handler);
    toggleNavigation();
  }
};
let handler = null;
const mapDispatchToProps = dispatch => {
  if (handler === null) {
    handler = e => handleEscKey(e, () => dispatch(toggleNavigator()));
  }
  return {
    openNav: e => {
      e.preventDefault();
      document.addEventListener("keydown", handler);
      dispatch(toggleNavigator());
    },
    closeNav: e => {
      e.preventDefault();
      document.removeEventListener("keydown", handler);
      dispatch(toggleNavigator());
    }
  };
};
export const navigationToggleButton = connect(
  (state, props) => ({ ...props }),
  mapDispatchToProps
)(toggleButton);
export default connect(mapStateToProps, mapDispatchToProps)(NavigationGrafeio);
