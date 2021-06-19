import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.css";

import { addpost, updatePost } from "../../action/Action";

import axios from "axios";

export default function EditPost({ postid, postt }) {
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

    dispatch(updatePost(postid, formData));
    toastr.info("Post Updated succecfully");

    /*
axios.post('http://localhost:8000/add',formData)
.then(()=> console.log('new post !!'))
.catch(err=> console.error(err))
 */
  };
  return (
    <div>
      <form onSubmit={sub} encType="multipart/form-data" className="ff">
        <label
          style={{
            marginInline: "60px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          <strong>City</strong>{" "}
        </label>
        <input
          value={city}
          style={{
            width: "300px",
            marginInline: "79px",
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
            marginInline: "60px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          <strong>Street</strong>
        </label>
        <input
          value={street}
          style={{
            width: "300px",
            marginInline: "79px",
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
            marginInline: "60px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          <strong>Description</strong>
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginInline: "79px" }}
          name=""
          cols="46"
          rows="5"
        ></textarea>

        <br />
        <label
          style={{
            marginInline: "60px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          <strong>prix</strong>
        </label>
        <input
          value={prix}
          style={{
            width: "300px",
            marginInline: "79px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setPrix(e.target.value)}
          type="text"
          className="form-control"
        />
        <br />
        <label
          style={{
            marginInline: "60px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          <strong>Number of Star</strong>
        </label>
        <input
          value={star}
          style={{
            width: "300px",
            marginInline: "79px",
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
            marginInline: "60px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          <strong>Image</strong>
        </label>

        <input
          style={{ marginInline: "79px" }}
          type="file"
          filename="article"
          onChange={handlfile}
        />
        <br />
        <br />
        <br />
        <button
          type="submit"
          style={{ width: "420px", marginInline: "28px" }}
          className="btn btn-block btn-dark"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
