//ERRORS.UTILS

//erreurs sur l'inscription
module.exports.signUpErrors = (err) => {
  let errors = { firstName: "", lastName: "", email: "", password: "" };

  if (err.message.includes("firstName"))
    errors.firstName = "Le prénom est incorrect...";
  if (err.message.includes("lastName"))
    errors.firstName = "Le nom est incorrect...";
  if (err.message.includes("email")) errors.email = "L'email est incorrect...";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit avoir au moins 6 caractères...";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "L'email est déjà utilisé...";

  return errors;
};

//erreurs sur la connexion
module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "L'email est incorrect...";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe est incorrect...";

  return errors;
};

//erreurs sur l'importation
module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Ce type de fichier n'est pas pris en charge...";

  if (err.message.includes("max size"))
    errors.maxSize = "La taille du fichier dépasse 500ko...";

  return errors;
};
