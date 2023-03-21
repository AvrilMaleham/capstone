import "./contactScreen.css";

//components
import ContactForm from "../components/contactForm";
import {MailchimpNewsletter, MailchimpContactForm} from "../components/mailchimp";

function ContactScreen() {
  return (
    <div>
   <h2 className="contactScreen_title">Contact Us</h2>
   <a href="tel:0277788523">0277788523</a>
    <MailchimpContactForm></MailchimpContactForm>
    <MailchimpNewsletter></MailchimpNewsletter>
  
    </div>
  )
}

export default ContactScreen