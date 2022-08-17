import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../../actions/post.actions";

const NewPostForm = () => {
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handlePost = async () => {
    if (message || postPicture) {
      const data = new FormData();
      data.append("posterId", userData._id);
      data.append("message", message);
      if (file) data.append("file", file);

      await dispatch(addPost(data));
      dispatch(getPosts());
      cancelPost();
    } else {
      alert("Votre message est vide");
    }
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const cancelPost = () => {
    setMessage("");
    setPostPicture("");

    setFile("");
  };

  return (
    <div className="post-container">
      {
        <>
          <div className="post-form">
            <textarea
              name="message"
              id="message"
              placeholder="Ajoutez votre texte ici..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div className="post-img-button">
              <div>
                {
                  <div className="img-container-input">
                    <p>...et/ou une image</p>
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handlePicture(e)}
                    />
                  </div>
                }
              </div>
              <div className="btn-send">
                {message || postPicture ? (
                  <button className="cancel" onClick={cancelPost}>
                    ANNULER
                  </button>
                ) : null}
                <button className="button" onClick={handlePost}>
                  POSTER
                </button>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default NewPostForm;
