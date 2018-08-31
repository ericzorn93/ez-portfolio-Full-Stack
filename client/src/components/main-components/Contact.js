import React, { Component } from 'react';
import ContactForm from '../sub-components/ContactForm';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Stay in Touch!</h1>
        <ContactForm />
      </div>
    )
  }
}
