import React, { Component } from 'react';
import ContactForm from '../sub-components/ContactForm';
import ContactInformation from '../sub-components/ContactInformation';
import "../../css/ContactForm.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center contact-form-title">Please Stay in Touch!</h1>
        <ContactForm />
        <ContactInformation/>
      </div>
    )
  }
}
