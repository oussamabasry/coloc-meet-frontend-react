import {
  addPostApi,
  getUserPostsApi,
  deletePostApi,
  updatePostApi,
} from "../apis/userPostsApi";


export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const { data } = await getUserPostsApi(userId);
    dispatch({ type: "GET_USER_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const { data } = await addPostApi(post);
    dispatch({ type: "ADD_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await deletePostApi(id);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatePostApi(id, post);
    dispatch({
      type: "UPDATE_POST",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
