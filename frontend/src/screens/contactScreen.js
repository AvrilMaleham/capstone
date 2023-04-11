import "./contactScreen.css";

//components
import {MailchimpNewsletter, MailchimpContactForm} from "../components/mailchimp";

function ContactScreen() {
  return (
    <div>
  <div className="break"> </div>
   <h2 className="contactScreen_title">We dive deeper than just looking at the parts of your business, we look at the whole picture
</h2>
<div className="break"> </div>



<div className="contact-deets">
   <a href="tel:0277788523">027 7788 523</a>
   <a href="mailto:avrilm.1@hotmail.co.uk" target="_top">info@edifypmconsulting.com</a>
</div>




    <MailchimpContactForm></MailchimpContactForm>



    <MailchimpNewsletter></MailchimpNewsletter>


  
    </div>


  )
}

export default ContactScreen