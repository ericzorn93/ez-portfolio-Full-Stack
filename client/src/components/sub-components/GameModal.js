import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class GameModal extends Component {

  state = {
      modal: false
  };

  toggle = () => {
      this.setState({modal: !this.state.modal});
  };

  render() {
    return (
        <React.Fragment>
            <Button color="primary" onClick={this.toggle}>Click for Info</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle} key={this.props.orderData.orderID}>{this.props.orderData.orderName}</ModalHeader>
                <ModalBody>
                    {this.props.orderData.orderInfo}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.toggle}>Exit To All Games</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
  }
}
