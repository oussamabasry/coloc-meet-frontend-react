import { createpost, fetchpost, removepost, updatepost } from "../apis/api";

import toastr from "toastr";
import "toastr/build/toastr.css";
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await fetchpost();

    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addpost = (post) => async (dispatch) => {
  try {
    const { data } = await createpost(post);

    dispatch({ type: "ADD", payload: data });
    toastr.success("Post Created succecfully", "Congratulation");
  } catch (error) {
    console.log(error);
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    await removepost(id);
    dispatch({ type: "REMOVE", payload: id });
  } catch (error) {}
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatepost(id, post);

    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
