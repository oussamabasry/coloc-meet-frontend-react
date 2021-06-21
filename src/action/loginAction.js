import { signupApi, loginApi } from "../apis/userApi";
import toastr from "toastr";
import "toastr/build/toastr.css";
import history from "../shared/history";
import api from "../apis/serverApi";

export const loginUser = (authData) => async (dispatch) => {
  try {
    const { data } = await loginApi(authData);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: data.token,
        isLogged: true,
      })
    );
    toastr.success("Login succecfully", "Congratulation");
    dispatch({
      type: "SIGN_IN",
      payload: { isLogin: true, token: data.token },
    });
    history.push("/useraccount");
  } catch (error) {
    console.log(error);
    toastr.error("Incorrect email or password", "Eroor");
  }
};

export const SignUp = (UserData) => async (dispatch) => {
  try {
    await signupApi(UserData);
    toastr.success("Signup Successfully", "Congratulation");
    history.push("/");
    history.push("/signup");
  } catch (error) {
    console.log(error);
    toastr.error("Verify your information", "Eroor");
  }
};

export const logoutUser = () => {
  delete api.defaults.headers.common["Authorization"];
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: null,
      isLogged: false,
    })
  );
  return {
    type: "LOGOUT",
    payload: { isLogin: false, token: null },
  };
};
