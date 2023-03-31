import React, { useState, useEffect } from "react";
import "./contactForm.css"


const ContactForm = ({onValidated}) => {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState("SUBMIT");

  useEffect(() => {
    if(status === "Thanks for getting in touch!") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, email, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Thanks for getting in touch!");
    let result = await response.json();
    onValidated({
      EMAIL: email.value,
      MERGE1: firstName.value,
      MERGE2: lastName.value,
  });
  };


  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      { status === "SUBMIT" ? (
      <div className="center">
        <input placeholder="First Name" className="inputField__field" type="text" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
    <br></br>
        <input placeholder="Last Name" className="inputField__field" type="text" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
        <br></br>
        <input placeholder="Email Address" className="inputField__field" type="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} required />
        <br></br>
        <textarea rows="2" placeholder="How can we help?" className="inputField__field" id="message" value={message}  onChange={(e)=>setMessage(e.target.value)} required />
        <br></br>
        <button className="button" type="submit">{status}</button>
      </div>
       
       ) : <p>Thank you for getting in touch!</p> }
     
     
    </form>
  );
};

export default ContactForm;