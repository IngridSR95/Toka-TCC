<template>
  <div class="home-page">
    <header class="navbar">
      <div class="logo-area">
        <img src="/path-to-your-logo.png" alt="Toka Snooker Bar Logo" class="logo-icon" />
        <span class="logo-text">TOKA</span>
      </div>
      
      <nav class="nav-menu">
        <a href="#" class="nav-item active">HOME</a>
        <a href="#" class="nav-item">MENU</a>
        <a href="#" class="nav-item">ATRAÇÕES</a>
        <a href="#" class="nav-item">QUEM SOMOS</a>
        <a href="#" class="nav-item">CONTATO</a>
      </nav>

      <div class="action-icons">
        <span class="search-icon">🔍</span>
        <a href="#" class="login-link">
          <span class="user-icon">👤</span>
          <span class="login-text">FAÇA LOGIN</span>
        </a>
      </div>
    </header>

    <section class="hero-section">
      <div class="hero-image-container">
        <img src="/path-to-main-bar-photo.jpg" alt="Interior do Toka Snooker Bar" class="main-bar-photo" />
      </div>

      <div class="welcome-content">
        <div class="welcome-text">
          <h1>Bem-vindo ao Toka Snooker Bar!</h1>
          <p>O ponto de encontro ideal para quem curte boa música, diversão entre amigos e aquele clima descontraído de bar e restaurante. Aqui você encontra mesas de sinuca, drinks variados, porções caprichadas e, claro, muito karaokê para soltar a voz!</p>
        </div>
        <div class="mini-gallery">
          <img src="/path-to-mini-photo-1.jpg" alt="Detalhe 1" class="mini-photo" />
          <img src="/path-to-mini-photo-2.jpg" alt="Detalhe 2" class="mini-photo" />
          <img src="/path-to-mini-photo-3.jpg" alt="Detalhe 3" class="mini-photo" />
          <img src="/path-to-mini-photo-4.jpg" alt="Detalhe 4" class="mini-photo" />
        </div>
      </div>
    </section>

    <section class="call-to-action">
      <h2>Vem curtir com a gente no Toka Snooker Bar!</h2>
      <p>Ambiente descontraído, sinuca de qualidade, karaokê para soltar a voz e uma seleção de drinks e porções que vão deixar sua noite ainda melhor.</p>
      <p>Reúna os amigos, escolha seu som e aproveite tudo o que a Toka tem a oferecer. A gente tá te esperando no coração de Santo André!</p>
      <p class="address">
        <span class="location-icon">📍</span> Endereço: Rua Coronel Alfredo Flaquer, 386 – Vila Assunção, Santo André – SP, 09020-040
      </p>
    </section>

    <section class="gallery-map-section">
      <div class="gallery-container">
        <img src="/path-to-gal-photo-1.jpg" alt="Galeria Foto 1" class="gal-photo" />
        <img src="/path-to-gal-photo-2.jpg" alt="Galeria Foto 2" class="gal-photo" />
        <img src="/path-to-gal-photo-3.jpg" alt="Galeria Foto 3" class="gal-photo" />
        <img src="/path-to-gal-photo-4.jpg" alt="Galeria Foto 4" class="gal-photo" />
      </div>
      
      <div class="map-container">
        <img src="/path-to-map-image.png" alt="Localização no Mapa" class="map-image" />
      </div>
    </section>

    <footer>
      </footer>
  </div>
</template>

<script>
// Importa o arquivo CSS
import '@/views/Home/Home.css'; 

export default {
  name: 'Home',
};
</script>

<style scoped>
/* A estilização principal está no Home.css importado acima */
</style>