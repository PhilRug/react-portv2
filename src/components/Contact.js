import React, { useState } from 'react';
import '../styles/Pages.css';
import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    setEmailError('');

    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="body">
      <h2 className="title">Contact Me</h2>
      <div className='contactform'>
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className='subTitle'>Name</h3>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <h3 className='subTitle'>Email</h3>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div>
            <h3 className='subTitle'>Message</h3>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
