import "./individualServiceScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopupButton } from "react-calendly";
import { Link } from "react-router-dom";

//Actions
import { getServiceDetails } from "../redux/actions/serviceActions";

import { useParams, useNavigate } from "react-router-dom";

const IndividualServiceScreen = () => {
  const [book, setBook] = useState(false);

  const [check, setCheck] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const serviceDetails = useSelector((state) => state.getServiceDetails);
  const { loading, error, service } = serviceDetails;

  useEffect(() => {
    if (service && id) {
      dispatch(getServiceDetails(id));
    }
  }, []);

  const bookButtonHandler = () => {
    service.name === "Inspections" ? setBook(true) : setBook(false);
    service.name === "Business Health Check" ? setCheck(true) : setCheck(false);
  };


  return (
    <div>
      <div className="break"> </div>
      <div className="individualServiceScreen" onLoad={bookButtonHandler}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="individualServiceScreen_left">
              <div className="left_image">
                <img src={service.imageUrl} alt={service.name}></img>
              </div>

              <div className="left_info">
                <p className="left_name">{service.name}</p>
                <p>{service.paraone} </p>
                <p>{service.paratwo} </p>
                <p>{service.parathree} </p>
                <p>{service.parafour} </p>
              </div>

              <div className="bcheck">
                {check ? (
                  <div>
                    <br></br>
                    <h5>What’s included:</h5>
                    <p>
                      We will review the following areas via our detailed and
                      formalised checklists and provide you with a comprehensive
                      report of the findings.
                    </p>
                    <ul>
                      <li>
                        Systems, processes and policies
                        <ul>
                          <li>
                            Review of all systems, processes and policies across
                            the department (for example, accounting, new
                            tenancies, new business, vacates, bonds, compliance)
                          </li>
                          <li>
                            We will look at how and if they are working within
                            the business
                          </li>
                          <li>
                            All affiliated documentation in regards to the above
                          </li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Documentation
                        <ul>
                          <li>
                            Including PMAs, TAs and other legally required
                            documents
                          </li>
                          <li>
                            Review associated platforms to create and store
                            these documents
                          </li>
                          <li>Storage systems</li>
                          <li>Healthy Homes review</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Trust Accounting Platform
                        <ul>
                          <li>Set up</li>
                          <li>Templates</li>
                          <li>Review of the data entry within the systems</li>
                          <li>Procedures</li>
                          <li>
                            Storage within the platform / diaries /
                            documentation of information
                          </li>
                          <li>Archiving</li>
                          <li>
                            Multiple reports analysed to provide information on
                            the status of the portfolio
                          </li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Accounts
                        <ul>
                          <li>
                            Processes, including receipting, reconciliation,
                            receipting, payments, bonds
                          </li>
                          <li>
                            Review of bonds, rent, arrears, suppliers and
                            payments rental rates, archived/non-archived
                            properties, receipting procedures, mid and end of
                            month processes, ledgers, suspense account,
                            workflow, invoicing, attention to detail
                          </li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Maintenance
                        <ul>
                          <li>Processes, completed, outstanding, ongoing</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Inspections
                        <ul>
                          <li>Ingoing, routine and outgoing</li>
                          <li>Review of templates</li>
                          <li>Review of processes and data</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Lettings
                        <ul>
                          <li>Advertising / promotions</li>
                          <li>Viewings</li>
                          <li>Application process and reference checking</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Templates / communication
                        <ul>
                          <li>Within Palace and other document systems</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Fees / analysis / portfolio stats / fee structure review
                      </li>
                      <br></br>

                      <li>Key storage and management</li>
                      <br></br>

                      <li>
                        Portfolios / structure
                        <ul>
                          <li>Rent increases</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Tenant & owner clients
                        <ul>
                          <li>Communication, data entry, inspections, rent</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Growth / BDM
                        <ul>
                          <li>Marketing / advertising</li>
                          <li>Strategy</li>
                          <li>Current campaigns</li>
                          <li>Collateral and touch points</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>Reporting structure</li>
                      <br></br>

                      <li>
                        Staff / team
                        <ul>
                          <li>
                            salaries, structure, meetings, reporting lines,
                            commissions, environment, relationships with
                            clients, the team and, wider company
                          </li>
                        </ul>
                      </li>
                      <br></br>

                      <li>
                        Office
                        <ul>
                          <li>Environment, layout, extras</li>
                        </ul>
                      </li>
                      <br></br>

                      <li>Business Goals</li>
                      <br></br>

                      <li>P&L</li>
                      <br></br>
                    </ul>

                    <p>
                      We will provide you with a detailed report of the above,
                      looking at the findings in their individual parts and also
                      as a whole.<br></br>
                      <br></br>
                      The above items are flexible, and should you wish to
                      exclude any items, or add additional items, this is no
                      problem.<br></br>
                      <br></br>
                      Includes 5 full days in office and remote work
                      (days/schedule to be adjusted where required), review and
                      analysis as well as the creation of a comprehensive
                      report.
                    </p>
                    <br></br>
                 

                    <h5>Additional add-ons:</h5>
                    <p>
                      If you are ready to take the next steps, we can provide:
                    </p>
                    <ul>
                      <li>
                        Recommendations report and plan
                        <ul>
                          <li>
                            This is a detailed map and plan to create the
                            foundation, structure, systems, processes and teams
                            to move forward and achieve your business goals
                          </li>
                          <li>
                            The plan is tailored to your individual and
                            organisational needs and goals, financial or
                            otherwise
                          </li>
                        </ul>
                      </li>
                      <br></br>
                      <li>
                      Training, coaching, and ongoing support to execute the above plan 

                        <ul>
                          <li>
                          Including ongoing recommendations, direction checks, and support to keep the team accountable 

                          </li>
                          <li>
                          Document templates and checklists will be provided 
                          </li>
                          <li>
                          A support and training schedule will be agreed upon in advance

                          </li>
                        </ul>
                      </li>
                      <br></br>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="middle">
                {book ? (
                  <PopupButton
                    className="bookbutton"
                    url="https://calendly.com/avrilmaleham"
                    /*
                     * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                     * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                     */
                    rootElement={document.getElementById("root")}
                    text="BOOK NOW"
                  />
                ) : null}
              </div>
              <div className="endbit" >
               
               <p> <Link to="/contact" className="servicecta">Contact us</Link> today to find out more about how we can help you.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IndividualServiceScreen;
