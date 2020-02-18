import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

import "./index.scss";
import { formatDate } from "../../services/formatDate";
import Container from "../../containers/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slideshow from "../../components/Slideshow";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  const history = useHistory();

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/offer/${id}`
    );

    setData(response.data);
    setIsLoading(false);
  };

  const goToPay = () => {
    history.push("/payment", {
      title: data.title,
      picture: data.pictures[0],
      price: data.price,
      name: data.creator.account.username
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        {isLoading && <p>Chargement en cours...</p>}

        {!isLoading && (
          <div className="online-sale">
            <article className="online-sale-left">
              <div className="online-sale-resume">
                <div className="main-informations-container">
                  {data.pictures && data.pictures.length > 0 && (
                    <Slideshow pictures={data.pictures} />
                  )}

                  <div className="online-sale-resume-price">
                    <p className="title"> {data.title}</p>
                    {data.price && <p className="price">{data.price} €</p>}
                    <div>
                      <span>{formatDate(data.created)}</span>
                    </div>
                  </div>
                </div>

                <div className="online-sale-description">
                  <p>
                    <strong> Description</strong>
                  </p>
                  <p> {data.description} </p>
                </div>
              </div>
            </article>

            <div className="online-sale-right">
              <div className="online-sale-creator-container">
                <p className="online-sale-right-creator">
                  {data.creator.account && data.creator.account.username}
                </p>
                <p className="online-sale-right-publications">
                  {data.creator.account.nbOffers} annonces en ligne
                </p>
              </div>

              <div className="online-sale-buy-container">
                <button
                  className="online-sale-right-buy-button "
                  onClick={goToPay}
                >
                  <FontAwesomeIcon
                    icon="shopping-cart"
                    className="icon-shopping"
                  />
                  <div>Acheter</div>
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Offer;
