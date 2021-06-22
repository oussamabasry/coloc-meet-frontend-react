const userPostsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USER_POSTS":
      return action.payload;

    case "ADD_POST":
      return [...state, action.payload];

    case "DELETE_POST":
      return state.filter((post) => post._id !== action.payload);

    case "UPDATE_POST":
      return state.map((post) =>
        post._id === action.payload.post._id ? action.payload.post : post
      );
    default:
      return state;
  }
};

export default userPostsReducer;
