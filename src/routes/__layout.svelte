<script>
  const github = "/images/github.png";
  const linkedin = "/images/linkedin.png";
  const logoNav = "/images/logo_transparent_nav.png";
</script>

<nav>
  <a href="/" class="logoWrapper"
    ><img class="logoNav" src={logoNav} alt="ZenTown" /></a
  >
  <a class="navlink" href="/">Home</a>
  <!-- <a class="navlink" href="/services">Services</a> -->
  <a class="navlink" href="/portfolio">Portfolio</a>
  <a class="navlink" href="/contact">Contact</a>
</nav>

<div class="separator" />

<slot />

<footer>
  <div class="social">
    <a
      class="outerLink"
      href="https://github.com/Zenpanic"
      target="_blank"
      rel="noopener"
    >
      <img src={github} alt="github" loading="lazy" />
    </a>
    <a
      class="outerLink"
      href="https://www.linkedin.com/in/s-belmo"
      target="_blank"
      rel="noopener"
    >
      <img src={linkedin} alt="linkedin" loading="lazy" />
    </a>
  </div>

  <hr class="separator" />

  <div class="legal">
    <a class="legalElement" href="/legal">Mentions Légales</a>
    <a class="legalElement" href="/terms">CGV/CGU</a>
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
    margin-bottom: 2em;
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
