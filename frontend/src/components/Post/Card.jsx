import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import LikeButton from "./LikeButton";
import { updatePost } from "../../actions/post.actions";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";

const Card = ({ post }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  return (
    <li className="card-container" key={post._id}>
      {
        <>
          <div className="header-card">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="img de la personne qui à poster ceci sur groupomania"
            />

            <div className="card-content">
              <h3>
                {!isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === post.posterId) return user.pseudo;
                      else return null;
                    })
                    .join("")}
              </h3>
              {post.posterId !== userData._id}
              {dateParser(post.createdAt)}
            </div>
          </div>
          <div className="background-img">
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <button className="button" onClick={updateItem}>
                  MODIFIER
                </button>
              </div>
            )}

            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
          </div>
          <div className="icon-container">
            {userData._id === post.posterId && userData.admin === false && (
              <div className="button-user">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img
                    src="./img/icons/pen-to-square-solid.svg"
                    alt="modifier"
                  />
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
            {userData.admin === true && (
              <div className="button-user">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img
                    src="./img/icons/pen-to-square-solid.svg"
                    alt="modifier"
                  />
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img
                  onClick={() => setShowComments(!showComments)}
                  src="./img/icons/comment-dots-solid.svg"
                  alt="icon de commentaire"
                />
                <div>{post.comments.length}</div>
              </div>
              <LikeButton post={post} />
            </div>
          </div>
          {showComments && <CardComments post={post} />}
        </>
      }
    </li>
  );
};

export default Card;
