import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logoutUser } from "../../action/loginAction";

const SideBarTest = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <div>
      <Link onClick={onLogout} to="/">
        <button className="btn btn-danger">LogOut</button>
      </Link>
    </div>
  );
};

export default SideBarTest;
