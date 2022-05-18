import React, { useState } from "react";
import cn from "classnames";

import Loader from "../Loader/Loader";

import s from "./Tab.module.scss";

import * as main from "../../utils/MainApi";

const Tab = ({ post }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isActivePoint, setIsActivePoint] = useState(0);

  const openTab = () => {
    !isOpened && setIsLoading(true);
    setIsOpened(!isOpened);
    !isOpened && setIsActivePoint(0);

    !isOpened &&
      main
        .getComments(post.id)
        .then((data) => setComments(data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
  };

  const handleActivePoint = (index) => setIsActivePoint(index);

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
        {isLoading && (
          <div className={s.tab__loader}>
            <Loader />
          </div>
        )}
        {isOpened &&
          comments &&
          comments.map((comment, index) => (
            <p
              className={cn(s.tab__comment, {
                [s.tab__comment_active]: index === isActivePoint,
              })}
              key={comment.id}
              onClick={() => handleActivePoint(index)}
            >
              {comment.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Tab;
