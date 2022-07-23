import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm("Êtes-vous sur de vouloir supprimer ce poste ?")) {
          deleteQuote();
        }
      }}
    >
      <img src="./img/icons/eraser-solid.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
