//UPLOADIMG

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

//permet de mettre a jour sa photo de profil
const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);
    dispatch(uploadPicture(data, userData._id));
  };

  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer de photo</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png" //format d'image possible
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input type="submit" value="CONFIRMER" />
    </form>
  );
};

export default UploadImg;
