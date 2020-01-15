import React from 'react';
import Button from 'react-bootstrap/Button';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
const UserHandle = (props) => {
    return   (
      <div className="w-50 float-right">
        <NavigationDrawer/>
       <h1 className="text-center mb-5">Χρήστες</h1>
        <Button className=" mb-2 mr-2 float-left" variant="info">Διαχείρηση</Button>
          <Button className=" mb-2 float-left" variant="secondary">Προσθήκη νέου</Button>
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
      <tr>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Διαγραφή</td>
      </tr>
      <tr>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  <Button className=" mb-2 float-right" variant="info">Διαγραφή</Button>
  </div>
 )
};
export default UserHandle;
