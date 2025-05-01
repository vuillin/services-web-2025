# Services Web - BUT Informatique 2025

## 👥 Étudiant
- **Ibrahim Balta**
- **Thomas Vuillin**

---

## 📚 Description générale

Ce dépôt regroupe les 3 mini-projets réalisés dans le cadre du module **Services Web**.  
Chaque projet est séparé dans un dossier `mini-projet-X`, contenant :

- Un dossier **backend/** (Express.js + Node.js)
- Un dossier **frontend/** (Vue.js)

---

## 🧪 Mini-projet 1 – Authentification avec Passport-Local et Sessions

### 🎯 Fonctionnalités

- Inscription et connexion avec `passport-local`
- Sessions gérées via `express-session` + cookies persistants
- Mot de passe haché avec `bcrypt`
- Stockage des utilisateurs dans MySQL avec Sequelize ORM

### 🔧 Technologies utilisées

- **Backend** : Node.js, Express.js, Sequelize, Passport.js, MySQL
- **Frontend** : Vue.js 3, Vite
- **Authentification** : passport-local
- **Sessions** : express-session + cookie
- **ORM** : Sequelize

### ▶️ Instructions d'exécution

#### 📦 Backend

```bash
cd mini-projet-1/backend
npm install
mysql -u root -p < ../bdd_node_1.sql.txt
node server.js

Le backend est disponible sur : http://localhost:3000

cd mini-projet-1/frontend
npm install
npm run dev

Le frontend est accessible sur : http://localhost:5173
