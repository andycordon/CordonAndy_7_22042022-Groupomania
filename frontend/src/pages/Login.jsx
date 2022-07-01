import React from 'react'
import Log from '../components/Log'

export default function Login() {
  return (
    <div className="login-page">
        <div className="img-container">
            <img src="./img/log.png" alt="Logo de l'entreprise avec son nom Groupomania" />
        </div>
        <div className="log-container">
            <Log / >
        </div>
    </div>
  )
}

