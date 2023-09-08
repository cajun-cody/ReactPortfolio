
import React, {useRef} from 'react';
import emailjs from "emailjs-com";
import "./contact.css";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    alert("Email Sent")
    emailjs.sendForm('service_jm23c0e', 'contact_form', form.current, 'BH6TWE7Hn5Kb79-xH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
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
            <input type="email" placeholder="Email Address" name= "email"/>
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
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
