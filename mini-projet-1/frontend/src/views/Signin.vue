<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="handleSignin">
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>

        <p>Pas encore de compte ? <router-link to="/signup">Créer un compte</router-link></p>

      </form>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const message = ref('')
  const router = useRouter()
  
  const handleSignin = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/signin', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value, password: password.value })
      })
      const data = await res.json()
      if (res.ok) {
        router.push('/home')
      } else {
        message.value = data.message || 'Échec de la connexion'
      }
    } catch (err) {
      message.value = "Erreur de connexion"
    }
  }
  </script>
  