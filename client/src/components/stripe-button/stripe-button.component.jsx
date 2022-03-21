import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51Kfc88JohOvf1ZAJHEcaulsW82V6lSBFpqgJAigKz73smZsE1APEvSIjWOus75vWBdIcLluwWZ8RMdqFOLf7Remm00HJp033PW";

  const onToken = (token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment succesfull");
      })
      .catch((error) => {
        alert('Something went wrong with the payment, please try again latter')
        console.log('Errorrrrrr')
        console.log("Payment Error: ", JSON.parse(error));
        
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
