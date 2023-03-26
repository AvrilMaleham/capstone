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

<div className="about">
  <h2>Who is Edify?</h2>
  <p>Edify is a bespoke consultancy, offering a holistic approach to mentoring, coaching and training to individuals and  companies working within the residential property management industry.

At Edify your success is what drives us. We are passionate not only about residential property management, but we are genuinely passionate about you, your team, your business, and your goals and aspirations.  

We look at your organisation as a whole, while also reviewing and analysing how each sub part plays its role towards business success and growth.

As well as providing proactive business solutions, we are also specialists in tricky situations - one of our strengths is problem solving even the most complex of situations, implementing structure, policies, procedures, systems and training to bring stability and a strong foundation to your business, creating a platform for growth.
</p>
</div>

      <div>
        <MailchimpNewsletter />
      </div>
    </div>
  );
}

export default HomeScreen;
