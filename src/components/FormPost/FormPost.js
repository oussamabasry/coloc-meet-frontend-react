import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addpost } from "../../action/Action";

import axios from "axios";

export default function FormPost() {
  const po = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [prix, setPrix] = useState(0);
  const [article, setArticle] = useState("");
  const [star, setStar] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");

  const handlfile = (e) => {
    setArticle(e.target.files[0]);
  };
  console.log(article);
  const sub = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("city", city);
    formData.append("prix", prix);

    formData.append("article", article);
    formData.append("street", street);
    formData.append("description", description);
    formData.append("star", star);

    setCity("");
    setPrix("");
    setArticle("");
    setDescription("");
    setStar("");
    setStreet("");

    /*
axios.post('http://localhost:8000/add',formData)
.then(()=> console.log('new post !!'))
.catch(err=> console.error(err))
 */

    dispatch(addpost(formData));
  };
  return (
    <div>
      <form
        onSubmit={sub}
        encType="multipart/form-data"
        style={{ marginTop: "30px" }}
        className="ff"
      >
        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          City
        </label>
        <input
          value={city}
          style={{
            width: "300px",
            marginInline: "9px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setCity(e.target.value)}
          id="city"
          type="text"
          className="form-control"
        />

        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Street
        </label>
        <input
          value={street}
          style={{
            width: "300px",
            marginInline: "9px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setStreet(e.target.value)}
          id="city"
          type="text"
          className="form-control"
        />

        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginInline: "33px" }}
          name=""
          cols="38"
          rows="5"
        ></textarea>

        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          prix
        </label>
        <input
          value={prix}
          style={{
            width: "300px",
            marginInline: "9px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setPrix(e.target.value)}
          type="text"
          className="form-control"
        />

        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Number of Star
        </label>
        <input
          value={star}
          style={{
            width: "300px",
            marginInline: "9px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setStar(e.target.value)}
          type="text"
          className="form-control"
        />

        <br />
        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Image
        </label>

        <input
          style={{ marginInline: "17px" }}
          type="file"
          filename="article"
          onChange={handlfile}
        />
        <br />
        <br />
        <br />
        <button
          type="submit"
          style={{ width: "280px", marginInline: "17px" }}
          className="btn btn-block btn-dark"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
