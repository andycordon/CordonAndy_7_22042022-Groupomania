//ERRORS.UTILS

//erreurs sur l'inscription
module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email")) errors.email = "L'email est incorrect...";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit avoir au moins 6 caractères...";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est déjà utilisé...";

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
