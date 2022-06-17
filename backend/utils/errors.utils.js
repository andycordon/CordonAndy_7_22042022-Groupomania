module.exports.signUpErrors = (err) => {
  let errors = { prenom: "", nom: "", email: "", password: "" };

  if (err.message.includes("prenom")) errors.prenom = "Prénom incorrect";

  if (err.message.includes("nom")) errors.nom = "Nom incorrect";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit avoir au minimum 6 caractères";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Mot de passe incorrect";

  return errors;
};
