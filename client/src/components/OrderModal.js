import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class OrderModal extends Component {

  constructor(props) {
      super(props);
      const { orderData } = this.props;
  }

  state = {
      modal: false
  };

  toggle = () => {
      this.setState({modal: !this.state.modal});
  };

  render() {
    return (
        <div>
            <Button color="primary" onClick={this.toggle}>Click for Info</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle} key={this.props.orderData.orderID}>{this.props.orderData.orderName}</ModalHeader>
                <ModalBody>
                    {this.props.orderData.orderInfo}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.toggle}>Exit To Orders</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
  }
}
