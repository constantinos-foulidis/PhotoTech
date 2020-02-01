import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Category from '../../Data/Category'
import Dropdawn from '../Dropdawn/Dropdawn';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { navigationToggleButton as NavigationToggleButton } from '../NavigationDrawer/NavigationDrawer'
class ProductHeader  extends Component {

  handleAddnew = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/recource/products/add",
      //state: {username: this.state.username}
    });

  }
  render(){
    return   (
  <React.Fragment>
   <Container className="mb-5">
   <div className="headerCenter mb-4">
    <h1>Προιόντα:</h1>
    </div>

        <Row sm={4}>
  <NavigationToggleButton/>
       </Row>
        <Col className="justify-content-start offset-3">
       <Row md={10} >
        {Category.map((category, index) => (<Dropdawn  key={category.name} category={category}/>))}
        <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Προσθήκη νέου</Button>
        </Row>
      </Col>
      </Container>
      </React.Fragment>
 )
}
};
export default withRouter(ProductHeader);
