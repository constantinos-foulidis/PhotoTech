import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cards from '../../../components/Card/Card';
import UserManagement from '../User Management/UserHandler/UserHandler';
import Products from '../Product Management/ProductsRecources/ProductRecources';
import Login from '../../../components/Login/Login';
const ResourceProgramMenu = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <Route path={props.match.url} exact render={() => (
        <div className="Container">
          <h2 className="mb-5 text-center">Επιλέξτε Κατηγορία</h2>
          <div className="row justify-content-center">
            <Cards refe={props.match.url + "/admin_user"} name="Διαχηρηστής Αποθήκης" />
            <Cards refe={props.match.url + "/simple_user"} name="Χρήστης Αποθήκης" />
          </div>
        </div>
      )} />
      <Route path={props.match.url + "/simple_user"} component={Login} />
      <Route path={props.match.url + "/user_management"}  component={UserManagement} />
      <Route path={props.match.url + "/products"}  component={Products} />
    </React.Fragment>
  )
};
export default ResourceProgramMenu;
