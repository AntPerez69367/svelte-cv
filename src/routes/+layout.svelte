<script>
    import Header from "../components/header/Header.svelte";
    import 'bulma/css/bulma.css';
</script>

<html lang="html">
  <section class="hero is-info is-fullheight">
    <Header />
<slot />
</section>
</html>

<style>
    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    }
    .hero.is-info {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('../assets/background.png') no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  </style>