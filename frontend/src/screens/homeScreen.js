import "./homeScreen.css";

import { MailchimpNewsletter } from "../components/mailchimp";
import { BannerButton } from "../components/buttons";
import Button from "react-bootstrap/Button";

function HomeScreen() {
  return (
    <div>
      <div className="homeBanner">
        <h1 className="homeScreen_title">Home</h1>
        <div className="buttonLayout">
<BannerButton name="SERVICES" nav="/services" ></BannerButton>
<BannerButton name="PRODUCTS" nav="/products" ></BannerButton>
        </div>
      </div>
      <div>
        <MailchimpNewsletter />
      </div>
    </div>
  );
}

export default HomeScreen;
