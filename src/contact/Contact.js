import React, { Component } from 'react';
import './../styles/contact.css';
import emailjs from 'emailjs-com';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={this.state.message}
              onChange={this.handleChange}
              name="message"
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        {this.state.emailSent && <p className="success-message">Email sent successfully!</p>}
      </div>
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      emailSent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
      alert('Please fill in all fields.');
      return;
    }

    const serviceId = 'service_kf6ejw5';
    const templateId = 'template_4sx5t8i';
    const userId = 'GeALaN8yIsykTul9J';

    const templateParams = {
      from_name: this.state.name,
      from_email: this.state.email,
      message: this.state.message
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        this.setState({
          name: '',
          email: '',
          message: '',
          emailSent: true
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
  }
}
