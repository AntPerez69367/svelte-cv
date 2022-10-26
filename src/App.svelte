<script lang="ts">
  import 'bulma/css/bulma.css';
  import Header from './components/header/Header.svelte';
  import Body from './components/body/Body.svelte';
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Anthony Perez - Software Engineer</title>
  <link rel="shortcut icon" href="" type="image/x-icon" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
    rel="stylesheet"
  />
</svelte:head>

<html lang="html">
  <section class="hero is-info is-fullheight">
    <Header />
    <Body />
  </section>
</html>

<style>
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
  .hero.is-info {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('background.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
