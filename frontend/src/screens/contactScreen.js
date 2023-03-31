import "./contactScreen.css";

//components
import ContactForm from "../components/contactForm";
import {MailchimpNewsletter, MailchimpContactForm} from "../components/mailchimp";

function ContactScreen() {
  return (
    <div>
   <h2 className="contactScreen_title">We dive deeper than just looking at the parts of your business, we look at the whole picture. 
</h2>
   <a href="tel:0277788523">0277788523</a>
    <MailchimpContactForm></MailchimpContactForm>
    <MailchimpNewsletter></MailchimpNewsletter>
  
    </div>
  )
}

export default ContactScreen