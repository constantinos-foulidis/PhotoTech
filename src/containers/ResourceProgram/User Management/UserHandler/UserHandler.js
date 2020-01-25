import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import {getUsers,deleteUser} from '../../../../store/actions/users';
import {connect} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import DeleteModal from '../../../../components/DeleteModal/DeleteModal';
class UserHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usernameForDelete:""
    }

  }
  componentDidMount(){
   this.props.getAllusers();
  }
  addnewUser = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/recource/user_management/add",
      //state: {username: this.state.username}
    });
  }
  deleteUser(username) {
    let formData=null;
    formData={
      data:{
      username:username
       }
    }
    this.props.deleteUser(formData);
  }
  //    <td>   <Button className=" mb-2 float-right" onClick={() => this.deleteUser(users.username)} variant="info">Διαγραφή</Button></td>
  render(){
    let users = [];
    if (this.props.users.length > 0) {
      users = this.props.users;
    }

    let spinner = null;
    if (this.props.loading) {
      spinner = (<Spinner animation="border"/>);
    }
  return (
    <div className="w-100">
      {spinner}
      <h1 className="headerCenter mb-4">Χρήστες</h1>
      <Button className=" mb-2 mr-2" variant="info">Διαχείρηση</Button>
      <Button className=" mb-2 " variant="secondary" onClick={this.addnewUser}>Προσθήκη νέου</Button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">όνομα Χρηστη</th>
            <th scope="col">Ονοματεπώνυμο</th>
            <th scope="col">Κωδικος</th>
            <th scope="col">Διαγραφη</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Αναζήτηση</td>
            <td>Αναζήτηση</td>
            <td>Αναζήτηση</td>
            <td></td>
          </tr>
        {users.map((users) => {
           return(
          <tr key={users._id}>
            <td>{users.username}</td>
            <td>{users.fullName}</td>
            <td>{users.password}</td>
            <td>   <Button className=" mb-2 float-right" onClick={() => {this._modal.handleShow()
                this.setState({usernameForDelete:users.username})}} variant="info">Διαγραφή</Button></td>
          </tr>

        );
        })}
          </tbody>
      </table>
      <Button className=" mb-2 float-right" variant="info">Διαγραφή</Button>
      <DeleteModal ref={(modal) => { this._modal = modal;}} onOkey={() => this.deleteUser(this.state.usernameForDelete)} />
    </div>
  )
}
};

const mapStateToProps = (state, props) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
    ...props
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getAllusers: () => dispatch(getUsers()),
    deleteUser: (userName) =>dispatch(deleteUser(userName))
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(UserHandle);
