//CARDCOMMENTS

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../../actions/post.actions";
import { isEmpty, timestampParser } from "../Utils";
import EditDeleteComment from "./EditDeleteComment";

const CardComments = ({ post }) => {
  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addComment(post._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getPosts()))
        .then(() => setText(""));
    }
  };

  return (
    <div className="comments-container">
      {post.comments.map((comment) => {
        return (
          <div
            className={
              comment.commenterId === userData._id
                ? "comment-container client"
                : "comment-container"
            }
            key={comment._id}
          >
            <div className="separ-comment">
              <div className="comment-supp">
                <img
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === comment.commenterId)
                          return user.picture;
                        else return null;
                      })
                      .join("")
                  }
                  alt="img de la personne qui à commenter"
                />
                <div>
                  <h3>{comment.commenterPseudo}</h3>
                  {comment.commenterId !== userData._id}
                  <div>{timestampParser(comment.timestamp)}</div>
                </div>
              </div>
              <p>{comment.text}</p>

              {/* zone pour aller dans la modification ou suppressiondu commentaire */}
              <EditDeleteComment comment={comment} postId={post._id} />
            </div>
          </div>
        );
      })}
      {userData._id && (
        <form action="" onSubmit={handleComment} className="holla">
          <h3>Ajouter votre commentaire...</h3>
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="...juste ici"
          />
          <input className="button" type="submit" value="CONFIRMER" />
        </form>
      )}
    </div>
  );
};

export default CardComments;
