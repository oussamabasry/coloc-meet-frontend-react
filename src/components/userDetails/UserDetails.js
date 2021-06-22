import { useEffect, useState } from "react";
import UserDetailsEdit from "./UserDetailsEdit";
import UserIcon from "../../icons/UserIcon";
import api from "../../apis/serverApi";
import moment from "moment";

const UserDetails = () => {
  const [modeEdit, setEditMode] = useState(false);
  const [data, setData] = useState(null);

  const handleEditClick = () => setEditMode(true);

  useEffect(async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    try {
      const user = await api.get(`/users/${userData._id}`);
      setData(user.data);
    } catch (error) {
      console.log(error);
    }
  }, [modeEdit]);

  const jsx = (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="p-1 border-bottom">
            <div>Nom :</div>{" "}
            <span className="font-weight-bold">{data?.firstName}</span>
          </div>
          <div className="p-1 border-bottom">
            <div>Prenom :</div>{" "}
            <span className="font-weight-bold">{data?.lastName}</span>
          </div>
          <div className="p-1 border-bottom">
            <div>Date de naissance:</div>{" "}
            <span className="font-weight-bold">
              {moment(data?.birth).format('MM/DD/YYYY')}
            </span>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="p-1 border-bottom">
            <div>Email :</div>{" "}
            <span className="font-weight-bold">{data?.email}</span>
          </div>
          <div className="p-1 border-bottom">
            <div>Tel :</div>{" "}
            <span className="font-weight-bold">{data?.phone}</span>
          </div>
        </div>
        <div className="container">
          <div className="d-flex flex-row-reverse"></div>
          <div className="container">
            <div className="d-flex flex-row-reverse">
              <div className="col-6">
                <button className="btn btn-dark" onClick={handleEditClick}>
                  Modifier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container mt-5">
        <h2>
          <UserIcon width={32} className="mb-2" /> Details Utilisateur
        </h2>
      </div>
      {data ? (
        !modeEdit ? (
          jsx
        ) : (
          <UserDetailsEdit
            initialValues={data}
            save={() => setEditMode(false)}
          />
        )
      ) : (
        "Loading"
      )}
    </>
  );
};

export default UserDetails;
