import React, { useState } from "react";
import toast,{Toaster} from "react-hot-toast";
import "./Contact.css";
import contact from "./contact.jpg";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactHandle = () => {
    if (name && email && message) {
      toast.success('Message Sent Successfully');
      localStorage.setItem("useremail", email);
      setEmail('');
      setName('');
      setMessage('');
      } else {
        toast.error('Please Fill All The Fields');
        
    }
  };

  return (
    <Link className="contact-container" to={'/contact'}>
      <div className="img-container">
        <img src={contact} alt="contact" className="contact-img" />
      </div>
      <div className="contact-details">
        <h1 style={{margin:'20px 0'}}>Contact</h1>
        <h2>
          Feel free to reach out by submitting the form below,
          <br /> and I'll respond as soon as possible.
        </h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Enter your Message"
            className="textarea-box"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="button" onClick={contactHandle}>Submit</button>
        </div>
      </div>
      <Toaster/>
    </Link>
  );
}

export default Contact;
