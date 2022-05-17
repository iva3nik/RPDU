import React, { useState, useEffect } from "react";
import "./App.css";

import Accordion from "./components/Accordion/Accordion";
import Loader from "./components/Loader/Loader";

import * as main from "./utils/MainApi";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    main
      .getPosts(10)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <h1 className="app__title">RPDU1</h1>
      {isLoading && (
        <div className="app__loader">
          <Loader />
        </div>
      )}
      <div className="app__accordion">
        <Accordion posts={posts} />
      </div>
    </div>
  );
}

export default App;
