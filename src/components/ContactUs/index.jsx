import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: username,
      from_email: email,
      message: message,
    };
    try {
      setLoading(true);
      emailjs.send('service_55l16km', 'template_r4co8xi', templateParams, '3KCvggYariQDOVSS8')
      
      toast.success(
        'Thank you for your message. We will get back to you as soon as possible.'
      );
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      setEmail('');
      setUsername('');
      setMessage('');
    }
  };
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          disabled={loading}
          className="rounded bg-transparent border-2 border-yellow-600 pl-2 py-2"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          disabled={loading}
          className="rounded bg-transparent border-2 border-yellow-600 pl-2 py-2"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          disabled={loading}
          rows={5}
          className="rounded bg-transparent border-2 border-yellow-600 pl-2 py-2"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-yellow-600 rounded text-white py-2" type="submit">
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
