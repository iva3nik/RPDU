import React, { useState, useEffect } from "react";

import s from "./Accordion.module.scss";

import Tab from "../Tab/Tab";

const Accordion = ({ posts }) => {
  return (
    <div className={s.accordion}>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <Tab post={post} />
          </div>
        ))}
    </div>
  );
};

export default Accordion;
