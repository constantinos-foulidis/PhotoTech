import React from "react";
import { Switch, Route } from "react-router-dom";
import UserManagement from "./UserHandler/UserHandler";
import AddNewUser from './AddNewUser/AddNewUser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavigationDrawer from '../../../components/NavigationDrawer/NavigationDrawer';
import {navigationToggleButton as NtogleButton} from '../../../components/NavigationDrawer/NavigationDrawer';

const userManagment = props => {
  console.log(props);

  return (
    <Container className="bg-white">
    <Row className="mb-4">
        <NavigationDrawer/>
        <NtogleButton/>
    </Row>

    <Row>
    <Switch>
      <Route exact path={props.match.url} component={UserManagement} />
      <Route path={props.match.url + "/add"} component={AddNewUser} />
      <Route component={(props) => <p>Page Not Found</p>} />
    </Switch>
    </Row>

  </Container>
  );
};
export default userManagment;
