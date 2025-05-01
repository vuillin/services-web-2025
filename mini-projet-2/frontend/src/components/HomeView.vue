<template>
  <div>
    <h2>Page sécurisée</h2>
    <p>Bienvenue, ton token est stocké ici :</p>
    <pre>{{ token }}</pre>
    <button @click="logout">Déconnexion</button>
  </div>
</template>
<script>
import auth from '@/services/auth';
export default {
  computed: {
    token() { return localStorage.getItem('user-token'); }
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.push('/login');
    }
  }
};
</script>
