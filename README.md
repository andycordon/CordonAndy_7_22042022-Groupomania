<h1>GROUPOMANIA, LE RESEAU SOCIAL D'ENTREPRISE</h1>
<img src="frontend/public/img/log.png" height="500" width="500" >

<h2>TECHNO</h2>
<ul>
<li>NodeJs</li>
<li>MongoDB</li>
<li>Express</li>
<li>React</li>
<li>Redux</li>
<li>Sass</li>
</ul>
INSTALATION

Backend

Dans backend/config/ créer un fichier ".env" et ajouter ceci:

PORT= votre port localhost pour votre Backend
FRONTEND_URL=http://localhost:3000 votre URL Frontend
DB_USER=CordonAndy votre identifiant MongoDB
DB_PASSWORD=MongoDB votre mot de passe MongoDB
DB_LINK=clustergroupomania.xevpepr.mongodb.net/groupomania votre cluster MongoDB
TOKEN_SECRET=abcdefghijklmnopqrstuvwxyz01234567899876543210zyxwvutsrqponmlkjihgfedcba votre clé secrète

Ensuite dans backend/ créer un dossier "img" afin de stocker les images de posts et de profils.

Puis à partir de la racine du projet et dans le terminal, cd backend npm install

Frontend

Dans frontend/ créez un fichier ".env" et ajouter ceci:

REACT_APP_API_URL=http://localhost:5000/ votre URL Backend

Puis à partir de la racine du projet et dans le terminal, cd frontend npm install

DEMARRAGE:

Backend : à partir de la racine du projet, cd backend npm start

Front-end : à partir de la racine du projet cd frontend npm start
