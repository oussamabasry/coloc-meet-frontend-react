const reducer = (post = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "ADD":
      return {
        ...post,
        post: [...post.post, action.payload.post],
      };

    case "REMOVE":
      return {
        ...post,
        post: post.post.filter((item) => item._id !== action.payload),
      };
    case "UPDATE":
      return {
        ...post,
        post: post.post.map((pos) =>
          pos._id === action.payload.post._id ? action.payload.post : pos
        ),
      };

    default:
      return post;
  }
};

export default reducer;
