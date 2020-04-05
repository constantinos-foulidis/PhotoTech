import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { toggleNavigator } from "../../../store/actions/navigator";
class NavigationGrafeio extends Component {
  handleSellers() {
    this.history.push({
      pathname: " /office/sellers"
    });
  }
  render() {
    const { showNav } = this.props;
    let sideNavStyle = { width: showNav ? "250px" : "0" };
    // let adminExtras = null;

    return (
      <React.Fragment>
        <div className="row">
          <div name="side-nav" className="side-nav" style={sideNavStyle}>
            <h2 className="mb-5 text-dark">Κατηγορίες</h2>
            <Link to="#" onClick={this.props.closeNav} className="close-nav">
              &times;
            </Link>
            <Link className="linkItemForDrawer mb-3"  to="/office/sellers">Πωλητές</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/ProductsGrafeiou">Προιόντα</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/pellatologio">Πελατολόγιο</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/pellatologio">Παραστατικά</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/Photografers">Φωτογράφοι</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/pellatologio">Αναφορά παραγγελιών</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/pellatologio">Εισπραξεις</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/PellatesGrafeiou">Πελάτες</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/PellatesGrafeiou">Προσφορές</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/PellatesGrafeiou">Επανεκτυπώσεις</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/PellatesGrafeiou">Vouchers</Link>
            <Link className="linkItemForDrawer mb-3" to="/office/PellatesGrafeiou">Αποστολές</Link>

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
