import React, { useState, useEffect } from "react";
import "./App.css";

import Accordion from "./components/Accordion/Accordion";

import * as main from "./utils/MainApi";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    main
      .getPosts(10)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <h1 className="app__title">RPDU1</h1>
      <div className="app__accordion">
        <Accordion posts={posts} />
      </div>
    </div>
  );
}

export default App;
