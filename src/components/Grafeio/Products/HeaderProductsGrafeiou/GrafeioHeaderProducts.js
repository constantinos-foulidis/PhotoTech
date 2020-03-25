import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import CategoryGrafeio from '../../../../Data/CategoryGrafeioProducts';
import DropdownProductsGrafeio from '../DropdownProductsGrafeio/DropdownProductsGrafeio';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { navigationToggleButton as NavigationToggleButton} from '../../NavigationGrafeio/NavigationGrafeio';
import NavigationGrafeio from '../../NavigationGrafeio/NavigationGrafeio';

class ProductHeaderGrafeiou  extends Component {

  handleAddnew = () => {

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
        {CategoryGrafeio.map((category, index) => (<DropdownProductsGrafeio  key={category.name} category={category}/>))}
        <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Νέα Παραγγελία</Button>
        </Row>
      </Col>
      </Container>
      </React.Fragment>
 )
}
};
export default withRouter(ProductHeaderGrafeiou);
