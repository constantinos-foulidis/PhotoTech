import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      username: ""
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow(username) {
    this.setState({ show: true, username: username });
  }

  render() {
    return (
      <Modal
        ref={modal => {
          this._modal = modal;
        }}
        show={this.state.show}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Διαγραφή</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Είστε σίγουρος ότι θέλετε να προχωρήσετε στην διαγραφή ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Ακύρωση
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              this.props.onOkey();
              this.handleClose();
            }}
          >
            Διαγραφή
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DeleteModal;
