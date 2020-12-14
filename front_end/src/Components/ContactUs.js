import React, { Component } from 'react'


class ContactUs extends Component {
    state = {  }
    render() {
        return (
            <div className="contactInfo showcase">
      <span className="contactTitle"><h3>Contact Us</h3></span>
      <div className="contactForm">
       <p> Contact us and we will respond within 24 hours.</p>
        <p><input type="text" placeholder="Email"/></p>
        <p><textarea row="40" cols="30" placeholder="Message"/></p>
        <button>Submit</button>
      </div>
    </div>
        );
    }
}

export default ContactUs;
