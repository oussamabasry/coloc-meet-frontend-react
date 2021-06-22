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
  
  const dispatch = useDispatch();

  const p = useSelector((state) => state);
  console.log(p);


  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div className="postpage">
      ,
      <h1 style={{ color:"black",fontFamily: "serif", fontSize: "37px",marginInline:"300px" }}>
        Vous pouvez créer , modifier et supprimer vos postes
      </h1>
      <div className="all">
        <div style={{ backgroundColor:"black"}} className="sideba">
         

         
        </div>
        <div className="tabl">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"><strong>Poste</strong></th>
                <th scope="col"><strong>Titre</strong></th>
                <th scope="col"><strong>Ville</strong></th>
                <th scope="col"><strong>Prix</strong> </th>
                <th scope="col"><strong>étoiles</strong> </th>
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
