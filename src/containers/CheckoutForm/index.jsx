import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import axios from "axios";

import "./index.scss";
import Container from "../Container";

const CheckoutForm = ({ stripe }) => {
  const history = useHistory();
  const location = useLocation();

  if (!location.state) {
    return <Redirect to="/" />;
  }

  const { title, picture, price, name } = location.state;

  const confirmPayment = async () => {
    const stripeResponse = await stripe.createToken({
      name: `${name}`
    });

    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/payment`,
      {
        stripeToken,
        price,
        title
      }
    );

    if (response.status === 200) {
      alert("Paiement effectué");
      history.push("/");
    } else {
      alert("an error occured");
      console.error(response);
    }
  };

  return (
    <div>
      <Container>
        <div className="pay-content">
          <h2 className="main-title">Acheter en ligne</h2>
          {picture && <img src={picture} alt="annonce à vendre" />}
          <h2 className="title-offer">{title}</h2>
          <span className="price-offer">{price} €</span>

          <div className="card-element">
            <h2 className="title">Vos coordonnées bancaires</h2>
            <CardElement />
          </div>
          <button className="button-pay" onClick={confirmPayment}>
            Valider
          </button>
        </div>
      </Container>
    </div>
  );
};

export default injectStripe(CheckoutForm);
