import React, { useState } from 'react';
import CustomTextArea from '../../../components/CustomTextArea/CustomTextArea';
import EmailInput from '../../../components/EmailInput/EmailInput';
import TextInput from '../../../components/TextInput/TextInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import photoBg from '../../../assets/images/Foto-7.jpg';
import './Contact.css';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submitted = {};

  const handleSubmit = e => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError('All the fields are required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Invalid email address');
    } else {
      setError('');
      submitted.name = name;
      submitted.email = email;
      submitted.message = message;
      createContact(name, email, message);
    }
  };
  const createContact = async (name, email, message) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/contacts`,
        {
          name,
          email,
          message,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      setError('Error, try again');
    }
  };

  return (
    <main className="page">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <section
            className="clean-block clean-hero bg"
            style={{
              backgroundImage: `url(${photoBg})`,
              color: 'rgba(250, 250, 136, 0.85)',
            }}
          >
            <div className="text">
              <h1 className="display-2 welcome-text">Contact Us</h1>
              <p className="text-justify welcome-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                molestiae unde reprehenderit maiores natus alias, blanditiis
                necessitatibus molestias maxime placeat neque, explicabo
                assumenda at nulla distinctio itaque tempora modi. Vitae.
              </p>
            </div>
          </section>
        </div>
        <div className="col-sm-12 col-lg-6">
          <section
            style={{
              paddingTop: '150px',
            }}
            className="clean-block clean-form"
          >
            <h2 className="text-info">Contact Us Here!</h2>
            <form className="d-flex flex-column mt-5">
              <TextInput
                onChange={e => setName(e.target.value)}
                value={name}
                label="Username"
                placeholder="Name"
              />
              <EmailInput
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <CustomTextArea
                value={message}
                label="Message"
                placeholder="Enter your message..."
                onChange={e => setMessage(e.target.value)}
              />
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <CustomButton onClick={handleSubmit}>Submit</CustomButton>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;
