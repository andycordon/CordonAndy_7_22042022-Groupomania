//SIGNINFORM

import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    //verification de l'email et du mot de passe pour la connexion
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/auth/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        //si il y a des erreur de saisies messages d'erreurs s'affichent
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
          //sinon la connexion est ok et direction la page home
        } else {
          window.location = "/home";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <h1>Bienvenue</h1>
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
      <input className="button" type="submit" value="CONNEXION" />
    </form>
  );
};

export default SignInForm;
