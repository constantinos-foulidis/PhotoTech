import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './AddNewItem.css';

class NewItem extends Component {

  return = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <div className="Container">
        <div className="row justify-content-start">
          <div className="col">
            <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Χειροκίνητα</Button>
          </div>
          <div className="col">
            <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Ανέβασμα αρχείου</Button>
          </div>
        </div>
        <div className="row ">
          <div className="col ">
            <Form className="border p-4 form">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Περιγραφή προιόντος</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Κωδικός Προιόντος</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Κατηγορία</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Υποκατηγορία</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Διαθεσιμότητα</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Θέση Προιόντος</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Ταξεις</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10 }}>
                  <Form.Label className="mr-3">Φωτογραφία</Form.Label>
                  <Button className="mr-5" variant="info" type="button">Ανεβασμα Φωτογραφιας</Button>
                  <Button className="mr-2" type="button" variant="info" onClick={this.return} >Ακυρωση</Button>
                  <Button type="button" variant="info">Καταχωρηση</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    )
  }


}
export default NewItem;
