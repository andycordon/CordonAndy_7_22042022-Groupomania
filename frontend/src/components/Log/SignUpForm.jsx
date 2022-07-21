import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter !
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <h1>Inscription</h1>
          <label htmlFor="pseudo"></label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Pseudo"
            title="Veuillez entrer votre pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            title="Veuillez entrer votre adresse mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            title="Veuillez entrer votre mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <label htmlFor="password-conf"></label>
          <input
            type="password"
            name="password"
            id="password-conf"
            placeholder="Confirmation mot de passe"
            title="Veuillez confirmer votre mot de passe"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <div className="conditions">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              <NavLink to="/conditions" target="_blank">
                J'accepte les conditions générales
              </NavLink>
            </label>
          </div>
          <div className="terms error"></div>
          <input className="button" type="submit" value="CONFIRMER" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
