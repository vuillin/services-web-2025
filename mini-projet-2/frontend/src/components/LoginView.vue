<template>
  <div class="container">
    <h2>Connexion</h2>
    <form @submit.prevent="submit">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
    <p class="redirect">
      Pas encore de compte ?
      <router-link to="/register">S'inscrire</router-link>
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
      auth.login(this.email, this.password)
          .then(() => this.$router.push('/'))
          .catch(() => alert('Échec de la connexion'));
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.redirect {
  margin-top: 15px;
  text-align: center;
}

.redirect a {
  color: #007bff;
  text-decoration: none;
}

.redirect a:hover {
  text-decoration: underline;
}
</style>
