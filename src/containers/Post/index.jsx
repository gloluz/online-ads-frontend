import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Dropzone from "react-dropzone";

import "./index.css";
import Container from "../Container";

const Post = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [pictures, setPictures] = useState([]);

  const history = useHistory();

  const postData = async event => {
    event.preventDefault();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      };

      const body = new FormData();

      body.append("title", title);
      body.append("description", description);
      body.append("price", price);

      pictures.forEach((file, index) => {
        body.append(`picture${index}`, file);
      });

      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/offer/publish`,
        body,
        config
      );

      alert("Votre annonce a bien été créée");

      history.push(`/offer/${data._id}`);
    } catch (error) {
      alert(error);
    }
  };

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

  const handleChangePicture = files => {
    setPictures([...files]);
  };

  return (
    <>
      <Container>
        <div className="form-container">
          <div className="main-title-post">Déposer une annonce</div>
          <form onSubmit={postData}>
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
              <textarea
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

              <Dropzone onDrop={handleChangePicture}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p style={{ border: "2px dashed #f56b2a", padding: 20 }}>
                        Glissez-déposez ici vos fichiers
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>

              <ul>
                {pictures.map(files => (
                  <li>{files.path}</li>
                ))}
              </ul>
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
