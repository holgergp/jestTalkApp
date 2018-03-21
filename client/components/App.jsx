import React from "react";
import List from "./ListComponent.jsx";
import { doSomethingWithRemoteData } from "../service/serviceUser.js";

const App = class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello World</h1>
        <List values={posts} />
      </div>
    );
  }

  componentDidMount() {
    const posts = doSomethingWithRemoteData("param") || [];
    this.setState({ posts });
  }
};
export default App;
