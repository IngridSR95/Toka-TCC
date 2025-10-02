<template>
  <div class="landing-page">
    <h1>Bem-vindo ao Toka!</h1>
    <p>Landing page</p>
    <router-link to="/login">Ir para Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Estilos opcionais para a sua landing page */
.landing-page {
  padding: 50px;
  text-align: center;
}
</style>