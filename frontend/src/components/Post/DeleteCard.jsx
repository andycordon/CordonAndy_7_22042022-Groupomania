import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer ce poste ?")) {
          deleteQuote();
        }
      }}
    >
      <img
        src="./img/icons/eraser-solid.svg"
        alt="icon pour supprimer le post"
      />
    </div>
  );
};

export default DeleteCard;
