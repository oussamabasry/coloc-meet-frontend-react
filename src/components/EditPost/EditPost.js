import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.css";

import {updatePost } from "../../action/userPostsAction";



export default function EditPost({ postid, postt }) {
  const po = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [prix, setPrix] = useState(0);
  const [article, setArticle] = useState("");
  const [star, setStar] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [roomate, setRoomate] = useState(0);
  const [maxage, setMaxage] = useState(0);
  const [minage, setMinage] = useState(0);

  const handlfile = (e) => {
    setArticle(e.target.files);
  };
  console.log(article);
  const sub = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("city", city);
    formData.append("price", prix);
    formData.append("title", title);

    formData.append("postImages", article[0]);
    formData.append("postImages", article[1]);
    formData.append("postImages", article[2]);
    formData.append("postImages", article[3]);
    
  
    formData.append("description", description);
    formData.append("stars", star);

    formData.append("status", status);
    formData.append("gender", gender);

    formData.append("roommatesNumber", roomate);
    formData.append("roommatesMinAge", maxage);
    formData.append("roommatesMaxAge", minage);
    
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
      <form style={{marginTop:"-15px"}} onSubmit={sub} encType="multipart/form-data" className="ff">
      <div className="row">

<div className="col-md-6">



  <label
  style={{
    marginInline: "10px",
    marginBottom: "6px",
    fontSize: "14px",
  }}
  htmlFor=""
>
  Title
</label>
<input
  value={title}
  style={{
    width: "210px",
    marginInline: "9px",
    border: "1px solid black",
    height: "40px",
  }}
  onChange={(e) => setTitle(e.target.value)}
  id="city"
  type="text"
  className="form-control"
/>
   </div>
   <div className="col-md-6">
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
    width: "210px",
    marginInline: "9px",
    border: "1px solid black",
    height: "40px",
  }}
  onChange={(e) => setCity(e.target.value)}
  id="city"
  type="text"
  className="form-control"
/>
   </div>
   </div>


   <div className="row">

<div className="col-md-6">



          <label
          style={{
          marginInline: "10px",
          marginBottom: "8px",
          fontSize: "14px",
          }}
          htmlFor=""
          >
          Gender
          </label>
          <input
          value={gender}
          style={{
          width: "210px",
          marginInline: "9px",
          border: "1px solid black",
          height: "40px",
          }}
          onChange={(e) => setGender(e.target.value)}
          id="city"
          type="text"
          className="form-control"
          />
          </div>
          <div className="col-md-6">
          <label
          style={{
          marginInline: "10px",
          marginBottom: "8px",
          fontSize: "14px",
          }}
          htmlFor=""
          >
          Status
          </label>
          <input
          value={status}
          style={{
          width: "210px",
          marginInline: "9px",
          border: "1px solid black",
          height: "40px",
          }}
          onChange={(e) => setStatus(e.target.value)}
          id="city"
          type="text"
          className="form-control"
          />
          </div>
          </div>


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
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginInline: "33px" }}
            name=""
            cols="54"
            rows="5"
          ></textarea>
          <div className="row"></div>

          <div className="row">

          <div className="col-md-6">



          <label
          style={{
          marginInline: "10px",
          marginBottom: "6px",
          fontSize: "14px",
          }}
          htmlFor=""
          >
          Roomate Min Age
          </label>
          <input
          value={minage}
          style={{
          width: "210px",
          marginInline: "9px",
          border: "1px solid black",
          height: "40px",
          }}
          onChange={(e) => setMinage(e.target.value)}
          id="city"
          type="text"
          className="form-control"
          />
          </div>
          <div className="col-md-6">
          <label
          style={{
          marginInline: "10px",
          marginBottom: "8px",
          fontSize: "14px",
          }}
          htmlFor=""
          >
          Roomate Max Age
          </label>
          <input
          value={maxage}
          style={{
          width: "210px",
          marginInline: "9px",
          border: "1px solid black",
          height: "40px",
          }}
          onChange={(e) => setMaxage(e.target.value)}
          id="city"
          type="text"
          className="form-control"
          />
          </div>
          </div>
          <label
            style={{
              marginInline: "86px",
              marginBottom: "8px",
              fontSize: "14px",
            }}
            htmlFor=""
          >
          Roomate Number
          </label>
          <input
            value={roomate}
            style={{
              width: "300px",
              marginInline: "86px",
              border: "1px solid black",
              height: "40px",
            }}
            onChange={(e) => setRoomate(e.target.value)}
            type="text"
            className="form-control"
          />

          <label
            style={{
              marginInline: "86px",
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
              marginInline: "86px",
              border: "1px solid black",
              height: "40px",
            }}
            onChange={(e) => setPrix(e.target.value)}
            type="text"
            className="form-control"
          />

          <label
            style={{
              marginInline: "86px",
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
              marginInline: "86px",
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
            multiple
          />
          <br />
          <br />
                  <br />
                  <button
                    type="submit"
                    style={{marginTop:"-27px", height:"44px", width: "420px", marginInline: "28px" }}
                    className="btn btn-block btn-dark"
                  >
                    Update Post
                  </button>
                </form>
              </div>
            );
          }
