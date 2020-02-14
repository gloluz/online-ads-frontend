import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./index.css";
import { formatDate } from "../../services/formatDate";
import Container from "../../containers/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      " https://leboncoin-api.herokuapp.com/api/offer/" + id
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        {isLoading ? (
          <p>Chargement en cours ...</p>
        ) : (
          <div className="online-sale">
            <article className="online-sale-left">
              <div className="online-sale-resume">
                <div className="online-sale-resume-picture-container">
                  {data.pictures.length > 0 && (
                    <img
                      src={data.pictures}
                      alt="annonce"
                      className="online-sale-resume-picture"
                    />
                  )}
                </div>

                <div className="online-sale-resume-price">
                  <p className="title"> {data.title}</p>
                  <p className="price">{data.price} €</p>
                  <div>
                    <span>{formatDate(data.created)}</span>
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
                  {data.creator.account.username}
                </p>
                <p className="online-sale-right-publications">
                  17 annonces en ligne
                </p>
              </div>

              <div className="online-sale-buy-container">
                <button className="online-sale-right-buy-button">
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
