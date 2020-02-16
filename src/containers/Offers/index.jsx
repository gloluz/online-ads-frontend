import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import { formatDate } from "../../services/formatDate";

import Container from "../Container";
import SearchBar from "../../components/SearchBar";
import "./index.scss";

const NUMBER_RESULT_PER_PAGE = 20;

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [nbPages, setNbPages] = useState(0);
  const { page = "1" } = useParams();

  // Tableau qui contient les numéros de page
  const pages = new Array(nbPages).fill(1).map((p, i) => `${i + 1}`);

  const skip = (page - 1) * NUMBER_RESULT_PER_PAGE;

  const fetchData = async () => {
    const response = await Axios.get(
      `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${skip}&limit=${NUMBER_RESULT_PER_PAGE}`
    );

    setData(response.data);
    setNbPages(Math.round(response.data.count / NUMBER_RESULT_PER_PAGE));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="ellipsis-container">
        <div className="ellipsis-background"></div>
      </div>
      <Container>
        <SearchBar />
      </Container>
      <Container>
        <div>
          {isLoading ? (
            <p>Chargement en cours...</p>
          ) : (
            <section className="articles">
              {!data.offers && <div>Pas de résultat pour cette page</div>}
              {data.offers &&
                data.offers.map(offer => {
                  return (
                    <article key={offer._id}>
                      <Link
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
                            <p className="article-title">{offer.title}</p>
                            <p className="article-price">
                              {offer.price} {offer.price && <span>€</span>}
                            </p>

                            <p className="article-creator">
                              {formatDate(offer.created)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              <div className="pagination">
                {pages.map(p => (
                  <Link
                    key={p}
                    to={`/search/${p}`}
                    className={p === page ? "link active" : "link"}
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </Container>
    </>
  );
};

export default Offers;
