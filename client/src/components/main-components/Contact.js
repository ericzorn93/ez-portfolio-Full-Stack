import React, { Component } from 'react'
import Navigation from "../sub-components/Navigation";
import '../../assets/css/contact.css';
import { Col, Row, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import MyMapComponent from '../sub-components/Map';

class Contact extends Component {

  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    length: "",
    API_KEY: "AIzaSyBcFWYlKe66cpgbBaJ46G_IVTVf8NJk5TI",
    mapsURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcFWYlKe66cpgbBaJ46G_IVTVf8NJk5TI&callback=initMap`,
    secondMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    formView: "block",
    formConfirm: "none"
  };

  getValidationState = () => {
      const length = this.state.name.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
  };

  handleFormChange = e => {
      this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    const { name, email, phone, message } = this.state;

    if (!name.length) {
        e.preventDefault();
        alert("You Need to Enter Your Name");
    } else if (!email.length) {
        e.preventDefault();
        alert("You Need to Enter Your Email");
    } else if (!phone.length) {
        e.preventDefault();
        alert("You Need to Enter Your Phone Number");
    } else if (!message.length) {
        e.preventDefault();
        alert("You Need to Enter Your Message Below");
    }

    this.setState({
        formView: "none",
        formConfirm: "block"
    });

  };

  render() {
    return (
      <React.Fragment>
          <Navigation sidebarMarginTop={-80} profileImgMarginLeft={5}/>
          <h1 className="contact-header text-center" style={{fontSize: 30}}>Looking Forward To Hearing From You</h1>
          <br/>
          <div className="container">
              <Row>
                  <Col xs={12} md={12}>
                      <h1 style={{display: this.state.formConfirm}} className={"text-center form-submitted"}>Email Submitted, speak to you soon :)</h1>

                      <form className={"form-wrap"} onSubmit={this.handleFormSubmit} style={{display: this.state.formView}} method="POST" action="/mail/send">
                          <FormGroup controlId="formBasicText">
                              <ControlLabel className={"form-label"}>Please Enter Your Name:</ControlLabel>
                              <FormControl type={"text"} value={this.state.name} placeholder={"Enter Name"} onChange={this.handleFormChange} name={"name"}/>
                          </FormGroup>
                          <FormGroup controlId="formBasicText">
                              <ControlLabel className={"form-label"}>Please Enter Your Email:</ControlLabel>
                              <FormControl type={"email"} value={this.state.email} placeholder={"Enter Email"} onChange={this.handleFormChange} name={"email"}/>
                          </FormGroup>
                          <FormGroup controlId="formBasicText">
                              <ControlLabel className={"form-label"}>Please Enter Your Phone Number:</ControlLabel>
                              <FormControl type={"phone"} value={this.state.phone} placeholder={"Enter Phone Number"} onChange={this.handleFormChange} name={"phone"}/>
                          </FormGroup>
                          <FormGroup controlId="formBasicText">
                              <ControlLabel className={"form-label"}>Please Enter Your Message:</ControlLabel>
                              <FormControl type={"text"} value={this.state.message} placeholder={"Enter Message"} onChange={this.handleFormChange} name={"message"}/>
                          </FormGroup>
                          <FormGroup controlId={"formBasic Text"}>
                              <Button bsSize={"large"} bsStyle={"warning"} block type={"submit"}>Submit</Button>
                          </FormGroup>
                      </form>
                  </Col>
              </Row>
          </div>
          <div id="contact-map">
            <MyMapComponent/>
          </div>
      </React.Fragment>
    )
  }
}

export default Contact;
