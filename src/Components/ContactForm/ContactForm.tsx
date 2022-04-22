import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";
import { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hc0dezl', 'template_ezwm2gd', formRef.current, 'RyWIC8C2HtkR98Xm2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <motion.div className="contact-form">
      <motion.form ref={ formRef } onSubmit={ handleSubmit }>
        <label>Name</label>
        <input type="text" className="name-field contact-form-component" name="user_name"/>
        <label>Email</label>
        <input type="email" className="email-field contact-form-component" name="user_email"/>
        <label>Message</label>
        <textarea className="message-field contact-form-component" name="message"/>
        <input type="submit" className="submit-btn contact-form-component"/>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
