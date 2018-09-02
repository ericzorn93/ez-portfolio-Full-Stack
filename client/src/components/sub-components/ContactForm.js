import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Progress } from 'reactstrap';

export default class ContactForm extends Component {

  state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      formProgress: 0
  };

  firstNameChange = e => {
    this.setState({
        first_name: e.target.value,
        formProgress: 20
    });
  };

  lastNameChange = e => {
    this.setState({
        last_name: e.target.value,
        formProgress: 40
    });
  };

  emailChange = e => {
    this.setState({
        email: e.target.value,
        formProgress: 60
    });
  };

  phoneNumberChange = e => {
    this.setState({
        phone: e.target.value,
        formProgress: 80
    });
  };

  messageChange = e => {
    this.setState({
        message: e.target.value,
        formProgress: 100
    });
  };

  handleFormReset = e => {
      e.preventDefault();
      this.setState({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
          formProgress: 0
      });
  };

  render() {
    return (
      <div className={"container"}>
          <br/>
          <div className="text-center">Form Progress: {this.state.formProgress}%</div>
          <Progress value={this.state.formProgress} color={"success"} />
          <br/>
          <Form>
              <FormGroup>
                  <Label for="firstName">Enter Your First Name</Label>
                  <Input type="text" name="first_name" id="firstName" placeholder="Please Enter Your First Name" onChange={this.firstNameChange} value={this.state.first_name} />
              </FormGroup>
              <FormGroup>
                  <Label for="lastName">Enter Your Last Name</Label>
                  <Input type="text" name="last_name" id="lastName" placeholder="Please Enter Your Last Name" onChange={this.lastNameChange} value={this.state.last_name} />
              </FormGroup>
              <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Please Enter Your Email" onChange={this.emailChange} value={this.state.email} />
              </FormGroup>
              <FormGroup>
                  <Label for="phoneNumber">Enter Phone Number</Label>
                  <Input type="phone" name="phone" id="phone" placeholder="Please Enter Your Phone Number" onChange={this.phoneNumberChange} value={this.state.phone} />
              </FormGroup>
              <FormGroup>
                  <Label for="message">Enter Your Message</Label>
                  <Input type="textarea" name="message" id="message" placeholder="Please Enter Your Message" onChange={this.messageChange} value={this.state.message} />
              </FormGroup>
              <Button className={"btn btn-success"}>Submit</Button>
              <Button className={"btn btn-danger"} onClick={this.handleFormReset} style={{marginLeft: "10px"}}>Reset Form</Button>
          </Form>
      </div>
    )
  }
}
