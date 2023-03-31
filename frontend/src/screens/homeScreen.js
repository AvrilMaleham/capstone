import "./homeScreen.css";

import { MailchimpNewsletter } from "../components/mailchimp";
import { BannerButton, OtherButton } from "../components/buttons";

import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function HomeScreen() {
  return (
    <div>
      <div className="homeBanner">
        <h1 className="homeScreen_title">Home</h1>
        <div className="buttonLayout">
          <BannerButton name="SERVICES" nav="/services"></BannerButton>
          <BannerButton name="PRODUCTS" nav="/products"></BannerButton>
        </div>
      </div>

      <div className="about">
        <h2>
          Who
          <br></br>is
          <br></br>Edify?
        </h2>
        <div className="about-para">
          <p>
            Edify is a bespoke consultancy, offering a holistic approach to
            mentoring, coaching and training to individuals and companies
            working within the residential property management industry.
            <br></br>
            <br></br>
            At Edify your success is what drives us. We are passionate not only
            about residential property management, but we are genuinely
            passionate about you, your team, your business, and your goals and
            aspirations.
            <br></br>
            <br></br>
            We look at your organisation as a whole, while also reviewing and
            analysing how each sub part plays its role towards business success
            and growth.
            <br></br>
            <br></br>
            As well as providing proactive business solutions, we are also
            specialists in tricky situations - one of our strengths is problem
            solving even the most complex of situations, implementing structure,
            policies, procedures, systems and training to bring stability and a
            strong foundation to your business, creating a platform for growth.
            <br></br>
            <br></br>
          </p>
          <BannerButton name="CONTACT US TODAY" nav="/contact"></BannerButton>
        </div>
      </div>

      <h3 className="help-title">How we can help you</h3>

      <div className="help">
        <Card className="help-card">
          <Card.Body>
            <Card.Title>Checklists to Purchase</Card.Title>
            <Card.Text>
              Let us simplify your admin with our easy to use checklists.
            </Card.Text>
            <OtherButton name="BUY NOW" nav="/products"></OtherButton>
          </Card.Body>
        </Card>

        <Card className="help-card">
          <Card.Body>
            <Card.Title>Inspections</Card.Title>
            <Card.Text>
              Let us help you keep up to date with quarterly inspections.
            </Card.Text>
            <OtherButton name="BOOK NOW" nav="/services"></OtherButton>
          </Card.Body>
        </Card>

        <Card className="help-card">
          <Card.Body>
            <Card.Title>Palace Software Training</Card.Title>
            <Card.Text>
              Let us help you get the best out of your Palace software.
            </Card.Text>
            <OtherButton name="FIND OUT MORE" nav="/services"></OtherButton>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Carousel className="carousel">
          <Carousel.Item className="item">
            <p className="d-block w-100"></p>
            <h3 className="quote-l">
              <i className="fa-solid fa-quote-left"></i>
            </h3>
            <p>
              Erin's knowledge of the property management industry was
              impressive, and she was able to provide insights and
              recommendations that we had not previously considered. Her ability
              to think outside the box and provide creative solutions to our
              challenges was truly remarkable. Erin's guidance and support
              helped us to streamline our processes, improve our communication
              with tenants, and ultimately increase our bottom line.
            </p>
            <h3 className="quote-r">
              <i className="fa-solid fa-quote-right"></i>
            </h3>
          </Carousel.Item>

          <Carousel.Item className="item">
            <p className="d-block w-100"></p>
            <h3 className="quote-l">
              <i className="fa-solid fa-quote-left"></i>
            </h3>
            <p>
              The property management checklists that I purchased from Edify
              were comprehensive, easy to use, and incredibly helpful. They
              provided step-by-step guidance for everything from tenant
              screening to move-out inspections, which made managing our
              properties much easier and more efficient. The checklists were
              well-organized and included all the necessary details, making it
              easy for us to stay on top of all our tasks and responsibilities.
            </p>
            <h3 className="quote-r">
              <i className="fa-solid fa-quote-right"></i>
            </h3>
          </Carousel.Item>

          <Carousel.Item className="item">
            <p className="d-block w-100"></p>
            <h3 className="quote-l">
              <i className="fa-solid fa-quote-left"></i>
            </h3>
            <p>
              I would highly recommend Erin to anyone looking for a consultant
              who is knowledgeable, professional, and dedicated to helping their
              clients succeed. Her expertise and commitment to excellence are
              truly outstanding, and we are grateful for the impact she has had
              on our business. Thank you, Erin, for your outstanding work and
              unwavering dedication to our success!
            </p>
            <h3 className="quote-r">
              <i className="fa-solid fa-quote-right"></i>
            </h3>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <MailchimpNewsletter />
      </div>
    </div>
  );
}

export default HomeScreen;
