import React, {Component} from 'react';
import '../ProductsRecources/ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import Dropdawn from '../Dropdawn/Dropdawn';
import NewItem from '../AddnewItem/AddNewItem';
import ProductSpecs from '../ProductSpecks/ProductSpecks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavigateButton from '../NavigateButton/NavigateButton';
import {Route} from "react-router-dom";
import Category from '../Data/Category'
class Products extends Component {
  constructor(props) {
    super(props);
    //  if(!this.props.location.state.username){
    //  const state = this.props.location.state.username;
    //  console.log(state);
    //}

  }
  handleAddnew = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/products/add",
      //state: {username: this.state.username}
    });

  }

  render() {

    return (
      <Container className="bg-white">
      <Row>
        <Col className="col-1">
          <NavigationDrawer/>
        </Col>
        <Col>
          <h1>Προιόντα:</h1>
        </Col>
      </Row>
      <Row className="offset-1">
        {Category.map((category, index) => (<Dropdawn key={category.name} category={category}/>))}
        <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Προσθήκη νέου</Button>
      </Row>

      <Row className="offset-1">
        <Route exact path="/products" component={ProductItem}/>
        <Route path="/products/add" component={NewItem}/>
        <Route path="/products/id" component={ProductSpecs}/>
      </Row>

    </Container>);
  }
}

export default Products;
