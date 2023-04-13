import "./successScreen.css";
import { useEffect } from "react";

function SuccessScreen() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
            <div className="break"> </div>
    <div className="successScreen">

      <h3 className="paymenttxt">
        PAYMENT SUCCESSFUL</h3>
       <p > Check your inbox for the confirmation email.</p>
      
    </div>
    </div>
  );
}

export default SuccessScreen;
