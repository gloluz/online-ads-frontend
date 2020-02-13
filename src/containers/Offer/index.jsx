import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./index.css";
import { formatDate } from "../../services/formatDate";
import Container from "../../containers/Container";

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
    <Container>
      <div>
        {isLoading ? (
          <p>Chargement en cours ...</p>
        ) : (
          <div className="online-sale">
            <article className="online-sale-left">
              <div className="online-sale-resume">
                <div className="online-sale-resume-picture">
                  <img src={data.pictures} alt="annonce" />
                </div>
                <div className="online-sale-resume-price">
                  <p> {data.title}</p>
                  <p className="price">{data.price} €</p>
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
            </article>
            <div className="online-sale-right">
              <p>{data.creator.account.username}</p>
              <p>17 annonces en ligne</p>
              <button>Acheter</button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Offer;
