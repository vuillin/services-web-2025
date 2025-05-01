<template>
  <div class="container">
    <h2>Inscription</h2>
    <form @submit.prevent="submit">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">S'inscrire</button>
    </form>
    <p class="redirect">
      Déjà inscrit ?
      <router-link to="/login">Se connecter</router-link>
    </p>
  </div>
</template>

<script>
import auth from '@/services/auth';
export default {
  data() {
    return { email: '', password: '' };
  },
  methods: {
    submit() {
      auth.register(this.email, this.password)
          .then(() => this.$router.push('/login'))
          .catch(err => alert(err.response.data.error));
    }
  }
};
</script>

<style scoped>
/* Même style que Login.vue */
.container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

input {
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.redirect {
  margin-top: 15px;
  text-align: center;
}

.redirect a {
  color: #28a745;
  text-decoration: none;
}

.redirect a:hover {
  text-decoration: underline;
}
</style>
