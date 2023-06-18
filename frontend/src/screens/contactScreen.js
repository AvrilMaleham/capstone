import "./contactScreen.css";
import { useEffect } from "react";

//components
import {MailchimpNewsletter, MailchimpContactForm} from "../components/mailchimp";

function ContactScreen() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
  <div className="break"> </div>
   <h2 className="contactScreen_title">We dive deeper than just looking at the parts of your business, we look at the whole picture
</h2>
<div className="break"> </div>



<div className="contact-deets">
   <a href="tel:021888462">021 888 462</a>
   <a href="mailto:info@edifypmconsulting.com" target="_top">info@edifypmconsulting.com</a>
</div>




    <MailchimpContactForm></MailchimpContactForm>



    <MailchimpNewsletter></MailchimpNewsletter>


  
    </div>


  )
}

export default ContactScreen