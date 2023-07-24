
import { useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

import { useNavigate } from "react-router-dom";

function MyPayPal(props) {
  const [hide, setHide] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMesage, setErrorMessage] = useState("");
  const [orderId, setOrderId] = useState(false);

  const navigate = useNavigate();

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: props.input.toString(),
            amount: {
              value: props.total,
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderId(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An error occured with your payment");
  };

  useEffect(() => {
    if (success) navigate("/success");
  }, [success]);

  useEffect(() => {
    if (success) return props.reset;
  }, [success]);

  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
          process.env.PAYPAL_CLIENT_ID,
          "disable-funding": "card",
          currency: "NZD",
        }}
      >
        <button
          className="checkout"
          onClick={() => setHide(true)}
          type="submit"
        >
          CHECKOUT
        </button>
        {hide ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            className="palbut"
          />
        ) : null}
      </PayPalScriptProvider>
    </div>
  );
}

export default MyPayPal;
