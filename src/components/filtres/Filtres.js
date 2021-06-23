import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filtres.css";
import { getPostsFilter, Postsearch } from "../../action/Action";

function Filtres({ setpost }) {
  const [sexe, setSexe] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const p = useSelector((state) => state);

  const onButtonClick = (e) => {
    e.preventDefault();
    console.log("hi");
    let data = {};
    data.city = city;
    data.sexe = sexe;
    data.price = price;
    dispatch(getPostsFilter(data));
  };

  const search = () => {
    let d = {};
    d.title = title;
    dispatch(Postsearch(d));
  };

  function handleSelectSexe(event) {
    setSexe(event.target.value);
  }
  function handleSelectCity(event) {
    setCity(event.target.value);
  }
  function handleSelectPrice(event) {
    setPrice(event.target.value);
  }

  return (
    <div className="s009 container center mt-2 ">
      <form onSubmit={onButtonClick}>
        <div className="inner-form">
          <div className="basic-search">
            <div className="input-field">
              <input
                id="search"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Rechercher"
              />
              <div className="icon-wrap">
             

                <div className="group-btn">
                  <button
                    type="button"
                    onClick={() => search()}
                    className="btn-outline-light"
                    style={{width:"63px"}}
                  >
                    <svg
                      className="svg-inline--fa fa-search fa-w-16"
                      fill="#ccc"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="advance-search">
            <span className="desc">Rechcerche Avancé</span>
            <div className="row">
              <div className="input-field">
                <div className="input-select shadow-none">
                  <select
                    value={sexe}
                    onChange={handleSelectSexe}
                    data-trigger
                    name="choices-single-defaul"
                    className="form-select form-select shadow-none"
                  >
                    <option placeholder value>
                      Sexe
                    </option>
                    <option>Homme</option>
                    <option>Femme</option>
                  </select>
                </div>
              </div>
              <div className="input-field">
                <div className="input-select">
                  <select
                    value={city}
                    onChange={handleSelectCity}
                    data-trigger
                    name="choices-single-defaul"
                    className="form-select form-select shadow-none"
                  >
                    <option placeholder value>
                      Ville
                    </option>
                    <option>Casablanca</option>
                    <option>Rabat</option>
                    <option>Mohammedia</option>
                    <option>Agadir</option>
                    <option>Asfi</option>
                  </select>
                </div>
              </div>
              <div className="input-field">
                <div className="input-select">
                  <select
                    value={price}
                    onChange={handleSelectPrice}
                    data-trigger
                    name="choices-single-defaul"
                    className="form-select form-select shadow-none"
                  >
                    <option placeholder value>
                      Prix
                    </option>
                    <option value={500}>[ 0 DH - 500 DH ]</option>
                    <option value={1000}>[ 500 DH - 1000 DH ]</option>
                    <option value={1500}>[ 1000 DH - 1500 DH ]</option>
                    <option value={2000}>[ 1500 DH -2000 DH ]</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row second"></div>
            <div className="row third">
              <div className="input-field">
                <div className="result-count">
                  <span>{p.post.length} </span>results
                </div>
                <div className="group-btn">
                  <button type="submit" className="btn-search">
                    Recherher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filtres;
