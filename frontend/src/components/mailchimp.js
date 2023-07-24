import React from "react";
import Newsletter from "./newsletter";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ContactForm from "./contactForm";

export const MailchimpNewsletter = (props) => {
  const postUrl = `https://edifypmconsulting.us5.list-manage.com/subscribe/post?u=2398b719196b0b2ccde37d6fb&id=1b4cf6ceb2`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export const MailchimpContactForm = (props) => {
  const postUrl = `https://outlook.us21.list-manage.com/subscribe/post?u=0be82fdd5ab574d0cfd70848a&id=205041509b`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe }) => (
          <ContactForm onValidated={(formData) => subscribe(formData)} />
        )}
      />
    </div>
  );
};
