import React, {Component} from 'react';
import {login} from '../../store/actions/loginAuth';
import Dropdown from 'react-bootstrap/Dropdown';
import {connect} from 'react-redux';
import './Appheader.css';
class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({search: event.target.value});
  }
  mainProducts() {

  }

  render() {
    let user = null;
    let profile = null;
    if (this.props.isLogedIn === true) {
      user = (<input className="appHeaderInput mr-5" type="text" placeholder="Search" value={this.state.search} onChange={this.handleSearch}/>)

      profile = (<Dropdown className="center">
        <Dropdown.Toggle >
          <img className="appheaderProfile" variant="secondary" alt="logo" src="/profile.png"/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{this.props.userName}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>)
    }

    return (<header className="App-header shadow p-3 mb-2 ">
      <div className="Container">
        <div className="row align-middle">
          <div className="col">
            <a href="/recource/products"> 
            <img alt="logo" className="headerpic" src="/PhotoSc.png" />
            </a>
          </div>
          <div className="col">
            {user}
          </div>
          <div className="col">
            {profile}
          </div>
        </div>
      </div>
    </header>)
  }
};
const mapStateToProps = (state, props) => {
  return {
    userName: state.login.userName,
    isAdmin: state.login.isAdmin,
    isLogedIn: state.login.isLogedIn,
    loading: state.login.loading,
    error: state.login.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (formdata) => dispatch(login(formdata))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
