import React, { useState } from "react";
import cn from "classnames";

import s from "./Tab.module.scss";

import * as main from "../../utils/MainApi";

const Tab = ({ post }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [comments, setComments] = useState([]);

  const openTab = () => {
    setIsOpened(!isOpened);

    !isOpened &&
      main
        .getComments(post.id)
        .then((data) => setComments(data))
        .catch((err) => console.log(err));
  };

  return (
    <div className={s.tab}>
      <div className={s.tab__line}>
        <div
          className={cn(s.tab__arrow, { [s.tab__arrow_type_down]: isOpened })}
        ></div>
        <h2 className={s.tab__title} onClick={openTab}>
          {post.title}
        </h2>
      </div>
      <div className={s.tab__comments}>
        {isOpened &&
          comments &&
          comments.map((comment) => (
            <p className={s.tab__comment} key={comment.id}>
              {comment.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Tab;
