import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); //pour ne pas recharger la page
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
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
      <input type="submit" value="CONNEXION" />
    </form>
  );
};

export default SignInForm;
