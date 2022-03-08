<script>
  import Menu from "../components/Menu.svelte";
</script>

<!-- <Menu /> -->

<!-- <noscript> -->
  <nav>
    <a href="/" class="logoWrapper"
      ><img
        class="logoNav"
        src="/images/logo_transparent_nav.png"
        width="300"
        height="300"
        alt="ZenTown"
      /></a
    >
    <a class="navlink" href="/">Home</a>
    <a class="navlink" href="/portfolio">Portfolio</a>
    <a class="navlink" href="/contact">Contact</a>
  </nav>

  <div class="separator" />

  <style>
    @media screen and (min-width: 1001px) {
      body {
        margin-left: 200px;
      }
    }
    @media screen and (min-width: 1599px) {
      body {
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
      }
    }
  </style>
<!-- </noscript> -->

<slot />

<footer>
  <div class="social">
    <a
      class="outerLink"
      href="https://github.com/Zenpanic"
      target="_blank"
      rel="noopener"
    >
      <img
        src="/images/github.png"
        alt="github"
        loading="lazy"
        width="50"
        height="50"
      />
    </a>
    <a
      class="outerLink"
      href="https://www.linkedin.com/in/s-belmo"
      target="_blank"
      rel="noopener"
    >
      <img
        src="/images/linkedin.png"
        alt="linkedin"
        loading="lazy"
        width="50"
        height="50"
      />
    </a>
  </div>

  <hr class="separator" />

  <div class="legal">
    <a class="legalElement" href="/legal">Mentions Légales</a>
    <!-- <a class="legalElement" href="/terms">CGV/CGU</a> -->
  </div>
</footer>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    height: 100vh;
    opacity: 85%;
  }

  .logoWrapper {
    margin-bottom: 3em;
  }

  .logoNav {
    width: 150px;
    height: 150px;
  }

  .navlink,
  .navlink:visited {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0.5em;
  }

  .navlink:hover,
  .legalElement:hover {
    color: #ff1154;
    font-weight: 600;
  }

  footer {
    margin-top: 5em;
    margin-bottom: 0em;
  }

  .separator {
    margin: 1em 0 1em 0;
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .outerLink {
    margin: 0 2em;
    cursor: pointer;
  }

  .legal {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .legalElement,
  .legalElement:visited {
    margin: 0 2em;
    cursor: pointer;
    text-decoration: none;
    color: #eeeeee;
  }

  @media screen and (max-width: 1000px) {
    nav {
      flex-direction: row;
      height: 50px;
      width: 100%;
      justify-content: space-between;
    }

    .navlink {
      margin: 0.5em;
    }

    .logoWrapper {
      display: none;
    }
  }
</style>
