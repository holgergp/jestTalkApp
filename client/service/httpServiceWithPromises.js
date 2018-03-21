export const getPosts = () => {
  return new Promise((resolve, reject) => {
    resolve({ posts: ["complicated", "JSON", "Response"] });
  });
};

export const getPostsRejecting = () => {
  return new Promise((resolve, reject) => {
    reject("myError");
  });
};
