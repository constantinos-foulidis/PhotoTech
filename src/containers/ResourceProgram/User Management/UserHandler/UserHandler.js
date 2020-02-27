import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import {
  getUsers,
  deleteUser,
  filterUsers,
  getCachedUsers,
  filterUsersFullname
} from "../../../../store/actions/users";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import DeleteModal from "../../../../components/DeleteModal/DeleteModal";
import "./userHandler.css";
class UserHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullname: "",
      users: [],
      usernameForDelete: ""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handleFullname = this.handleFullname.bind(this);
  }
  componentDidMount() {
    this.props.getAllusers();
  }
  handleUsername(event) {
    console.log("checkthis out", event.target.value);
    this.setState({ username: event.target.value });
    this.props.filterUsers(event.target.value);
    if (event.target.value === "") {
      console.log("im inside if");
      this.props.getCachedUsers();
    }
  }
  handleFullname(event) {
    console.log("checkthis out", event.target.value);
    this.setState({ fullname: event.target.value });
    this.props.filterFullname(event.target.value);
    if (event.target.value === "") {
      console.log("im inside if");
      this.props.getCachedUsers();
    }
  }
  addnewUser = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/recource/user_management/add"
      //state: {username: this.state.username}
    });
  };
  deleteUser(username) {
    let formData = null;
    formData = {
      data: {
        username: username
      }
    };
    this.props.deleteUser(formData);
  }
  //    <td>   <Button className=" mb-2 float-right" onClick={() => this.deleteUser(users.username)} variant="info">Διαγραφή</Button></td>
  render() {
    let users = [];
    if (this.props.users.length > 0) {
      users = this.props.users;
    }

    let spinner = null;
    if (this.props.loading) {
      spinner = <Spinner animation="border" />;
    }
    return (
      <div className="w-100 offset-2">
        {spinner}
        <h1 className="headerCenter mb-4">Χρήστες</h1>
        <Button className=" mb-2 mr-2" variant="info">
          Διαχείριση
        </Button>
        <Button
          className=" mb-2 "
          variant="secondary"
          onClick={this.addnewUser}
        >
          Προσθήκη νέου
        </Button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Όνομα Χρήστη</th>
              <th scope="col">Ονοματεπώνυμο</th>
              <th scope="col">Κωδικός</th>
              <th scope="col">Διαγραφή</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <input
                  className="inputStyleWidth"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
              </td>
              <td>
                <input
                  className="inputStyleWidth"
                  type="text"
                  placeholder="Fullname"
                  value={this.state.fullName}
                  onChange={this.handleFullname}
                />
              </td>
              <td></td>
              <td></td>
            </tr>
            {users.map(users => {
              return (
                <tr key={users._id}>
                  <td>{users.username}</td>
                  <td>{users.fullName}</td>
                  <td>{users.password}</td>
                  <td>
                    {" "}
                    <Button
                      className=" mb-2 float-right"
                      onClick={() => {
                        this._modal.handleShow();
                        this.setState({ usernameForDelete: users.username });
                      }}
                      variant="info"
                    >
                      Διαγραφή
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <DeleteModal
          ref={modal => {
            this._modal = modal;
          }}
          onOkey={() => this.deleteUser(this.state.usernameForDelete)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
    ...props
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllusers: () => dispatch(getUsers()),
    deleteUser: userName => dispatch(deleteUser(userName)),
    filterUsers: Name => dispatch(filterUsers(Name)),
    getCachedUsers: () => dispatch(getCachedUsers()),
    filterFullname: fullname => dispatch(filterUsersFullname(fullname))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserHandle);
