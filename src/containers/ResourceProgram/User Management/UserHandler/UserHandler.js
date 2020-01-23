import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import {getUsers} from '../../../../store/actions/users';
import {connect} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
class UserHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
props.getAllusers();
  }

  render(){
    let users = [];
    if (this.props.users) {
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
      <Button className=" mb-2 " variant="secondary">Προσθήκη νέου</Button>
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
            <td>Διαγραφή</td>
          </tr>

        );
        })}
          </tbody>
      </table>
      <Button className=" mb-2 float-right" variant="info">Διαγραφή</Button>
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
    getAllusers: () => dispatch(getUsers())
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(UserHandle);
