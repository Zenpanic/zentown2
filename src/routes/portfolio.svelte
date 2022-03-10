<script>
  import Project from "/src/components/Project.svelte";
  let projects = [
    {
      name: "ZenTown",
      image: "/images/portfolio/zentown.png",
      description:
        "Le site sur lequel vous naviguez actuellement. La version originale était développée avec React, la présente version est réalisée avec Svelte, avec un serverless backend.",
      live: "https://zentown.dev",
      source: "https://github.com/Zenpanic/zentown2",
    },
    {
      name: "Way of Speaking",
      image: "/images/portfolio/wayofspeaking.png",
      description:
        "Une page vitrine pour une professeure d'anglais en ligne. Développé avec Svelte Kit, hébergé en serverless sur Netlify.",
      live: "https://wayofspeaking.netlify.app/",
      source: "https://github.com/Zenpanic/wayofspeaking-svelte",
    },
    {
      name: "Oeil",
      image: "/images/portfolio/oeil.png",
      description:
        "Une application web de reconnaissance faciale, qui détecte les visages sur les photos. Développé avec React, Node, Express et l'API Clarifai.",
      live: "https://oeil.herokuapp.com",
      sourceFront: "https://github.com/Zenpanic/oeil-frontend",
      sourceBack: "https://github.com/Zenpanic/oeil-api",
    },
    {
      name: "Aquafaba Temple",
      image: "/images/portfolio/aquafaba.png",
      description:
        "Une application web pour un restaurant imaginaire, avec système de livraison intégré. Développé avec Next.js, le headless CMS Strapi et MongoDB.",
      live: "https://aquafaba-temple.vercel.app",
      source: "https://github.com/Zenpanic/aquafaba-frontend",
    },
    {
      name: "Zen Weather",
      image: "/images/portfolio/zenweather.png",
      description:
        "Une application web météo élégante et minimaliste. Légère, sans publicité ni tracking: rien que les prévisions météo. Conçue avec React et l'API OpenWeather.",
      live: "https://zen-weather.vercel.app/",
      source: "https://github.com/Zenpanic/zen-weather",
    },
    {
      name: "Zen Cosmos",
      image: "/images/portfolio/zencosmos.png",
      description:
        "Un projet frontend ayant pour but d'informer sur les astéroïdes paasant à proximité de la Terre pour n'importe quelle date donnée. Développé avec Svelte, utilise l'API NEO de la NASA.",
      live: "https://zen-cosmos.netlify.app/",
      source: "https://github.com/Zenpanic/Zen-Cosmos",
    },
    {
      name: "easYacht",
      image: "/images/portfolio/easyacht.png",
      description:
        "L'application web easYacht met en relation les particuliers et les professionnels de l'achat/vente/location nautique. Développé avec Next.js, Node, Express, MongoDB, et Strapi. Intégrations Stripe, Paypal, Google, Facebook et WWO API.",
      live: "https://www.easyacht.app/",
    },
    {
      name: "Artiste Promomusique",
      image: "/images/portfolio/promomusique.png",
      description:
        "Artiste Promomusique offre aux utilisateurs de la plate-forme Promomusique un dashboard analytique et des services tels que la création d'une fanpage ou d'une boutique en ligne. Développé avec Next.js, Node, MongoDB et Strapi. Intégration Stripe, Bitly, Youtube, Spotify, Instagram.",
      live: "https://promo-music.co",
    },
  ].reverse();
</script>

<section class="hero is-primary block">
  <div class="hero-body">
    <p class="title">Portfolio</p>
    <p class="subtitle">Ça pourrait être nous, ici...</p>
  </div>
</section>

<main class="projectContainer">
  {#each projects as project (project.name)}
    <Project item={project} />
  {/each}
</main>

<style>
  .projectContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
</style>
