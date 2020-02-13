import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./index.css";
import { formatDate } from "../../services/formatDate";

const Articles = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count"
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className="articles">
          {data.offers.map(offer => {
            return (
              <article>
                <Link
                  key={offer.id}
                  className="link-to-article"
                  to={`/Offer/${offer._id}`}
                >
                  <div className="article">
                    <div className="article-picture">
                      {offer.pictures.length > 0 && (
                        <img
                          src={offer.pictures[0]}
                          className="article-picture-img"
                          alt={offer.title}
                        />
                      )}
                    </div>

                    <div className="article-content">
                      <div>
                        <p className="article-title">{offer.title}</p>
                        <p className="article-price">
                          {offer.price} {offer.price && <span>€</span>}
                        </p>
                      </div>
                      <p className="article-creator">
                        {formatDate(offer.created)}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Articles;
