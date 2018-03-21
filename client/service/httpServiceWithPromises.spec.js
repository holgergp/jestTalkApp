import { getPosts, getPostsRejecting } from "./httpServiceWithPromises";

describe("httpService getPosts should", () => {
  const response = {
    posts: ["complicated", "JSON", "Response"]
  };

  it("talk to the backend using done", done => {
    getPosts().then(data => {
      expect(data).toEqual(response);
      done();
    });
  });

  it("talk to the backend using promise returns", () => {
    return getPosts().then(data => {
      expect(data).toEqual(response);
    });
  });

  it("talk to the backend using expectations", () => {
    expect(getPosts()).resolves.toEqual(response);
  });

  it("talk to the backend using async await", async () => {
    const posts = await getPosts();
    expect(posts).toEqual(response);
  });
});

describe("httpService getPostsRejecting should", () => {
  it("reject using done", done => {
    getPostsRejecting().catch(error => {
      expect(error).toEqual("myError");
      done();
    });
  });

  it("reject using promise returns", () => {
    return getPostsRejecting().catch(error => {
      expect(error).toEqual("myError");
    });
  });

  it("reject using expectations", () => {
    expect(getPostsRejecting()).rejects.toEqual("myError");
  });

  it("reject using async await", async () => {
    try {
      const posts = await getPostsRejecting();
    } catch (e) {
      expect(e).toEqual("myError");
    }
  });
});
