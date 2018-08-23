import React, { Component } from 'react';
import Axios from 'axios';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

// Custom CSS
import '../Items.css';

export default class Items extends Component {

  state = {
    orders: [],
    modal: false
  };

  componentDidMount() {
    Axios.get('/api/orders')
        .then(data => this.setState({orders: data.data}))
        .catch(error => console.log(error));
  }

  toggleModal = () => {
    this.setState({
        modal: !this.state.modal
    });
  };

  render() {
    const { orders } = this.state;

    return (
      <div className="container card-container">
          {orders.map(order => {
            return (
                <div className={`card-wrap${order.id}`} key={order.id}>
                    <Card>
                        <CardBody>
                            <CardTitle>{order.orderName}</CardTitle>
                            <CardSubtitle>{order.orderInformation}</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="https://source.unsplash.com/user/erondu/318x180" alt={order.name} />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color={"primary"} onClick={this.toggleModal}>Select</Button>
                        </CardBody>
                    </Card>

                    {/* Order Modal */}
                    <OrderModal orderData={this.state.orders} />

                </div>
            );
          })}
      </div>
    )
  }
}
