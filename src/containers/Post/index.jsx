import React, { useState } from "react";

import "./index.css";

import Container from "../Container";

const Post = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();

  const handleChangeTitle = event => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleChangeDescription = event => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleChangePrice = event => {
    const value = event.target.value;
    setPrice(value);
  };

  return (
    <>
      <Container>
        <div className="form-container">
          <div className="main-title-post">Déposer une annonce</div>
          <form>
            <div className="offer-container">
              <label htmlFor="offer-title" className="offer-post-titles">
                Titre de l'annonce*
              </label>
              <input
                type="text"
                id="offer-title"
                className="input-offer-post"
                onChange={handleChangeTitle}
              />
            </div>

            <div className="offer-container">
              <label htmlFor="offer-description" className="offer-post-titles ">
                Texte de l'annonce*
              </label>
              <input
                type="text"
                id="offer-description"
                className="input-offer-post offer-input-text"
                onChange={handleChangeDescription}
              />
            </div>

            <div className="offer-container">
              <label htmlFor="price" className="offer-post-titles">
                Prix*
              </label>
              <div>
                <input
                  type="number"
                  id="price"
                  className="input-offer-post input-price-offer"
                  onChange={handleChangePrice}
                />
                <span> €</span>
              </div>
            </div>

            <div className="offer-container">
              <label
                htmlFor="picture"
                className="offer-post-titles pictures-offer-post"
              >
                Photo*
              </label>

              <input
                type="file"
                accept="image/png, image/jpeg"
                id="picture"
                className="input-files-post"
              />
            </div>

            <button type="submit" className="post-button-submit">
              Valider
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Post;
