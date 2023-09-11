
import React, {useRef} from 'react';
import { useState } from 'react';
import emailjs from "emailjs-com";
import "./contact.css";

const ContactForm = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
    e.preventDefault();

    //Message validation
    const formData = new FormData(form.current);
    const email = formData.get("email");
    const message = formData.get("message");

    if (!isValidEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (message.trim() === "") {
      setError("Message is required.");
      return;
    }
    //Sending email
    alert("Email Sent")
    emailjs.sendForm('service_jm23c0e', 'contact_form', form.current, 'BH6TWE7Hn5Kb79-xH')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
          setError(null);
      }, (error) => {
          console.log(error.text);
          setEmailSent(false);
          setError('Error sending email. Please try again later.');
      });
      e.target.reset()
  };

  const isValidEmail = (email) => {
    // Define a regex pattern for validating email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Test if the provided email matches the pattern
    const isValid = emailPattern.test(email);
  
    // Return true if the email is valid, otherwise, return false
    return isValid;
  };
  


  return (
    <div className="contact">
      <section className="contact-section" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input type="text" placeholder="Full Name" name="name" />
            <input className='email-input' type="email" placeholder="Email Address" name= "email"/>
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Mobile Number" name="number" />
            <input type="text" placeholder="Email Subject" name="subject" />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
          {emailSent && <p className="success-message">Email sent successfully!</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
