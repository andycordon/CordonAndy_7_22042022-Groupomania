import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const firstNameError = document.querySelector(".firstName.error");
    const lastNameError = document.querySelector(".lastName.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );

    passwordConfirmError.innerHTML = "";

    if (password !== controlPassword) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne sont pas identiques";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            firstNameError.innerHTML = res.data.errors.firstName;
            lastNameError.innerHTML = res.data.errors.lastName;
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
          <p className="success">Enregistrement validé, connectez-vous !</p>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="firstName"></label>

          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prénom"
            title="Veuillez entrer votre prénom"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <div className="firstName error"></div>
          <label htmlFor="lastName"></label>

          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Nom"
            title="Veuillez entrer votre nom"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <div className="lastName error"></div>
          <label htmlFor="email"></label>

          <input
            type="email"
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
          <input className="button" type="submit" value="INSCRIPTION" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
