import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../actions/post.actions";
import { UidContext } from "../AppContext";

const EditDeleteComment = ({ comment, postId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handleEdit = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(editComment(postId, comment._id, text));
      setText("");
      setEdit(false);
    }
  };

  const handleDelete = () => dispatch(deleteComment(postId, comment._id));

  useEffect(() => {
    const checkAuthor = () => {
      if (uid === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [uid, comment.commenterId]);

  return (
    <div className="edit-comment">
      {isAuthor && edit === false && userData.admin === false && (
        <span onClick={() => setEdit(!edit)}>
          <img src="./img/icons/pen-to-square-solid.svg" alt="modifier" />
        </span>
      )}
      {userData.admin === true && edit === false && (
        <span onClick={() => setEdit(!edit)}>
          <img src="./img/icons/pen-to-square-solid.svg" alt="modifier" />
        </span>
      )}
      {isAuthor && edit && userData.admin === false && (
        <form action="" onSubmit={handleEdit} className="edit-comment-form">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.text}
          />
          <div>
            <div
              className="trash-button"
              onClick={() => {
                if (
                  window.confirm("Voulez-vous supprimer votre commentaire ?")
                ) {
                  handleDelete();
                }
              }}
            >
              <img src="./img/icons/eraser-solid.svg" alt="suppression" />
            </div>
            <input className="modif-button" type="submit" value="MODIFIER" />
          </div>
        </form>
      )}
      {userData.admin === true && edit && (
        <form action="" onSubmit={handleEdit} className="edit-comment-form">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.text}
          />
          <div>
            <div
              className="trash-button"
              onClick={() => {
                if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
                  handleDelete();
                }
              }}
            >
              <img src="./img/icons/eraser-solid.svg" alt="suppression" />
            </div>
            <input className="modif-button" type="submit" value="MODIFIER" />
          </div>
        </form>
      )}
    </div>
  );
};

export default EditDeleteComment;
