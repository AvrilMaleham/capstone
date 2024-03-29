import React, { useState, useEffect } from "react";
import "./newsletter.css";

import NewsletterInputField from "./newsletterInputField.js";

const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">
        {status === "success"
          ? "Success"
          : "Join our email list for future updates"}
      </h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="mc__field-container">
          <NewsletterInputField
            className="newsletin"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="First Name"
            isRequired
          />

          <NewsletterInputField
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Last Name"
            isRequired
          />

          <NewsletterInputField
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="Email Address"
            isRequired
          />
        </div>
      ) : null}

      {status === "success" ? null : (
        <NewsletterInputField
          label="Subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      )}
    </form>
  );
};

export default Newsletter;
