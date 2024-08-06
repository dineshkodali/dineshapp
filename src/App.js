import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwzRX0NbpkxlCAIXHwBqwNl6wA7K1FZaTPfFS9uMkYYnWDFzTsr1wg5ksOpZIQ-Cfpw/exec'; // Replace with your web app URL

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({ name, email, phone }),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors'
      });

      setMessage('Form submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This was Dinesh App Created For Demo in Cyberpanel.
        </p>
        <a
          className="App-link"
          href="https://dineshkodali.github.io/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Dinesh Portfolio
        </a>
      </header>
      

      // Contact Form Section 
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </section>
    </div>
  );
}

export default App;