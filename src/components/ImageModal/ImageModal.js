import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';



class ImageModal extends Component {

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
        <Image src={this.props.image} responsive />
        </Modal>
    );
  }
}

export default ImageModal;
