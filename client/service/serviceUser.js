import { getPosts } from "../service/httpService";

export let doSomethingWithRemoteData = somePar => {
  const postData = getPosts();
  return postData.posts.map(it => it.toUpperCase());
};

export const uncoveredFunction = () => {
  const postData = getPosts();
  return postData.posts.map(it => it.toLowerCase());
}