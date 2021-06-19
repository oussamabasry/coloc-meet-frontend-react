import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../tablePost/TablePost";
import Form from "../FormPost/FormPost";
import Card from "../mobileCard/MobileCard";

import "./Postpage.css";

import { useDispatch, useSelector } from "react-redux";
import { getPost, removePost } from "../../action/Action";

export default function PostPage() {
  const [info, setInfo] = useState([]);
  const getposts = () => {
    axios
      .get("http://localhost:8000/get")
      .then((res) => setInfo(res.data))
      .catch((err) => console.error(err));
  };
  const dispatch = useDispatch();

  const p = useSelector((state) => state.post);
  console.log(p);

  /* useEffect(() => {
    getposts()
}, []) */

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div className="postpage">
      ,
      <h1 style={{ fontFamily: "serif", fontSize: "37px" }}>
        You can post , update and delete your Posts
      </h1>
      <div className="all">
        <div className="tabl">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"><strong>Post</strong></th>
                <th scope="col"><strong>Title</strong></th>
                <th scope="col"><strong>City</strong></th>
                <th scope="col"><strong>Price</strong> </th>
                <th scope="col"><strong>Stars</strong> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>

            {p.post && p.post.map((inf, i) => <Table key={i} info={inf} />)}
          </table>
        </div>

        <div className="form">
          <Form info={info} />
        </div>
      </div>
      <div className="cardd">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {p.post && p.post.map((inf, i) => <Card info={inf} />)}
        </div>
      </div>
    </div>
  );
}
