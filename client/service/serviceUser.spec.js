import { doSomethingWithRemoteData } from "./serviceUser.js";

jest.mock("./httpService", () => {
  const getPostMock = () => {
    return {
      posts: ["fake", "data"]
    };
  };
  return {
    getPosts: getPostMock
  };
});

describe("serviceUser shoukd", () => {
  it("talk to backendService", () => {
    const data = doSomethingWithRemoteData();
    expect(data).toEqual(["FAKE", "DATA"]);
  });
});
