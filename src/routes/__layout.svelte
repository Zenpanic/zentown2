<script>
  import "bulma/css/bulma.css";

  let burgerOpened = false;

  const toggleBurger = () => {
    burgerOpened = !burgerOpened;
  };
</script>

<nav
  class="navbar is-fixed-top is-transparent"
  role="navigation"
  aria-label="main navigation"
>
  <div class="navbar-brand">
    <a
      class="navbar-item"
      href="/"
      style={"color: #f35f5f; font-weight: 600; font-size: larger"}
      >ZenTown
    </a>

    <a
      role="button"
      class="navbar-burger"
      on:click={toggleBurger}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div
    id="navbarBasicExample"
    class="navbar-menu"
    class:is-active={burgerOpened}
  >
    <div class="navbar-start">
      <a class="navbar-item" href="/"> Home </a>

      <a class="navbar-item" href="/portfolio"> Portfolio </a>

      <a class="navbar-item" href="/contact"> Contact </a>
    </div>
  </div>
</nav>

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
</style>
