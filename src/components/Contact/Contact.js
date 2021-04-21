import React, { useState } from "react";
import CustomTextArea from "../../components/CustomTextArea/CustomTextArea";
import EmailInput from "../../components/EmailInput/EmailInput";
import TextInput from "../../components/TextInput/TextInput";
import CustomButton from "../CustomButton/CustomButton";

import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitted = {};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError("All the fields are required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError("Invalid email address");
    } else {
      setError("");
      submitted.name = name;
      submitted.email = email;
      submitted.message = message;
      createContact(name, email, message);
    }
  };
  const createContact = async (name, email, message) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/contacts`, {
        name,
        email,
        message,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      setError("Error, try again");
    }
  };

  return (
    <div className="container-md mt-4">
      <div className="row no-gutters d-flex justify-content-center">
        <div className="col-sm-3 mx-3">
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            iste quisquam, sequi maiores dolor molestiae deleniti enim, omnis
            similique, dolorum id aut sapiente temporibus perspiciatis
            voluptatem debitis mollitia velit quia?
          </p>
        </div>
        <div className="col col-sm-6 mx-3">
          <form className="d-flex flex-column">
            <TextInput
              onChange={(e) => setName(e.target.value)}
              value={name}
              label="Username"
              placeholder="Name"
            />
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextArea
              value={message}
              label="Message"
              placeholder="Enter your message..."
              onChange={(e) => setMessage(e.target.value)}
            />
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <CustomButton onClick={handleSubmit}>Submit</CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
