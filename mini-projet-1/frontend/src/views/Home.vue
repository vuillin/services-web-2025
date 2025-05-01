<template>
    <div>
      <h2>Page d'accueil</h2>
      <button @click="logout">Se déconnecter</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const logout = async () => {
    await fetch('http://localhost:3000/api/logout', {
      credentials: 'include'
    })
    router.push('/signin')
  }
  </script>
  