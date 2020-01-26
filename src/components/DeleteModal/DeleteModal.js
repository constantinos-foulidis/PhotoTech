import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class DeleteModal extends Component {

     constructor(props){
       super(props);
       this.handleShow = this.handleShow.bind(this);
       this.handleClose = this.handleClose.bind(this);

       this.state = {
         show: false,
         username:""
       };
     }
     handleClose() {
       this.setState({ show: false });
     }

     handleShow(username) {
       this.setState({ show: true,
                    username:username
                   });
     }


  render() {

    return (
      <Modal ref={(modal) => { this._modal = modal; }} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Ακύρωση
            </Button>
            <Button variant="primary" onClick={()=>{this.props.onOkey()
            this.handleClose()}}>
              Διαγραφή
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default DeleteModal;
