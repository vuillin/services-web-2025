<template>
    <div>
      <h2>Inscription</h2>
      <form @submit.prevent="handleSignup">
        <input v-model="firstname" placeholder="Prénom" required />
        <input v-model="lastname" placeholder="Nom" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mot de passe" required />
        <button type="submit">S'inscrire</button>

        <p>Déjà inscrit ? <router-link to="/signin">Se connecter</router-link></p>

      </form>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const firstname = ref('')
  const lastname = ref('')
  const email = ref('')
  const password = ref('')
  const message = ref('')
  
  const handleSignup = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: firstname.value, lastname: lastname.value, email: email.value, password: password.value })
      })
      const data = await res.json()
      message.value = data.message || 'Inscription réussie'
    } catch (err) {
      message.value = "Erreur d'inscription"
    }
  }
  </script>
  