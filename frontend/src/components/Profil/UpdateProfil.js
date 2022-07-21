import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/user.actions";

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.userError);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      <h1>{userData.pseudo}</h1>
      <div className="update-container">
        <img src={userData.picture} alt="user-pic" />
        <UploadImg />
        <p>{error.maxSize}</p>
        <p>{error.format}</p>
      </div>
      <div className="bio-update">
        <h3>Mes notes</h3>
        {updateForm === false && (
          <>
            <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
            <button onClick={() => setUpdateForm(!updateForm)}>
              Ajouter une note
            </button>
          </>
        )}
        {updateForm && (
          <>
            <textarea
              type="text"
              defaultValue={userData.bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <button onClick={handleUpdate}>Confirmer</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateProfil;
