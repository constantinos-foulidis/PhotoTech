import React, {Component} from 'react';
import {logout} from '../../../store/actions/LoginPolites/loginPolites';
import {filterProductsBySearchBar} from '../../../store/actions/products';
import Dropdown from 'react-bootstrap/Dropdown';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class PolitesHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  // componentDidMount() {
  //   setTimeout(()=> {
  //    this.signOut();
  // }, 90000);
  //
  //  }
  //    signOut() {
  //      localStorage.clear();
  //    }
  handleSearch(event) {
    this.setState({search: event.target.value});
    //this.props.filterProductsBySearchBar(event.target.value);
  }
  cartHandler= () => {
    this.props.history.push({
    pathname: "/office/ProductsGrafeiou/cart",

  });
  }

  render() {
    let user = null;
    let profile = null;
    let cart=null;
    let index=null;

    if (JSON.parse(localStorage.getItem('isLogedIn')) === true) {
      user = (<input className="appHeaderInput mr-5 w-100" type="text" placeholder="Search" value={this.state.search} onChange={this.handleSearch}/>)
      console.log(this.props);
      profile = (<Dropdown className="center">
        <Dropdown.Toggle >
          <img className="appheaderProfile" variant="secondary" alt="logo" src="/profile.png"/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{JSON.parse(localStorage.getItem('userName'))}</Dropdown.Item>
          <Dropdown.Item href="/" onClick={() =>{ this.props.logout()}}  >Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>)
       if(this.props.location.pathname === "/office/ProductsGrafeiou"){
         if(this.props.cart.length>0){
            index=( <p className="pl-2 pr-2 ml-2 bg-danger text-white d-inline rounded-circle">{this.props.cart.length}</p>)
         }
       cart= (
        <div>
        <img alt="logo" style={{width:"20%",textAlign:"left",top:"55%"}} onClick={this.cartHandler} src="/shop.png" />
        {index}
         </div>
    )
  }
    }

    return (<header className="App-header shadow p-3 mb-2 ">
      <div className="Container">
        <div className="row align-middle">
          <div className="col">
            <a href="/sellers/greetings">
            <img alt="logo" className="headerpic" src="/PhotoSc.png" />
            </a>
          </div>
          <div className="col">
            {user}
          </div>
          <div className="col">
            {profile}
          </div>
          <div className="col">
            {cart}
          </div>
        </div>
      </div>
    </header>)
  }
};
const mapStateToProps = (state, props) => {
  return {
    userName: state.loginPolites.userName,
    cart: state.products.cart,
    isLogedIn: state.loginPolites.isLogedInPOLITES,
    loading: state.loginPolites.loading,
    error: state.loginPolites.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {

    logout: () => dispatch(logout()),
   filterProductsBySearchBar: (productCategory) => dispatch(filterProductsBySearchBar(productCategory))
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PolitesHeader));
