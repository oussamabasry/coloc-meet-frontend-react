const reducer = (post = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "ADD":
      return [...post, action.payload];

    case "REMOVE":
      return post.filter((item) => item._id !== action.payload);

    case "UPDATE":
      return post.map((pos) =>
        pos._id === action.payload.post._id ? action.payload.post : pos
      );
    case "GET_POST_FILTER":
      return action.payload;
    case "POST_SEARCH":
      return action.payload;

    default:
      return post;
  }
};

export default reducer;
