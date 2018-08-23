import React, { Component } from 'react';
import Axios from 'axios';
import OrderModal from './OrderModal';
import { Card, CardBody, CardTitle} from 'reactstrap';

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
                        </CardBody>
                        <img width="100%" src="https://source.unsplash.com/user/erondu/318x180" alt={order.name} />
                        <CardBody>
                            {/* Order Modal */}
                            <OrderModal orderData={{orderID: order.id, orderName: order.orderName, orderInfo: order.orderInformation}} />
                        </CardBody>
                    </Card>

                </div>
            );
          })}
      </div>
    )
  }
}
