<script>
  import Project from "/src/components/Project.svelte";
  let projects = [
    {
      name: "ZenTown",
      image: "/images/portfolio/zentown.png",
      description:
        "Le site sur lequel vous naviguez actuellement. Développé avec Svelte.",
      live: "https://zentown.dev",
      source: "",
    },
    {
      name: "Way of Speaking",
      image: "/images/portfolio/wayofspeaking.png",
      description:
        "Une page vitrine pour une professeure d'anglais en ligne. Le front-end est fait en HTML5 et CSS3, le back-end utilise Node et Express.",
      live: "https://wayofspeaking.com",
      source: "https://github.com/Zenpanic/wayofspeaking",
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
      name: "easYacht",
      image: "/images/portfolio/easyacht.png",
      description:
        "L'application web easYacht met en relation les particuliers et les professionnels de l'achat/vente/location nautique. Développé avec Next.js, Node, Express, MongoDB, et Strapi, avec de nombreuses fonctionnalités sur-mesure telles qu'un blog, un forum ou encore un chatbot. Intègre de nombreux services et API tels que Stripe, Paypal, Google et Facebook Login, ou encore World Weather Online API.",
      live: "https://www.easyacht.app/"
    },
    {
      name: "Artiste Promomusique",
      image: "/images/portfolio/promomusique.png",
      description:
        "Artiste Promomusique permet aux utilisateurs de la plate-forme Promomusique d'accéder au suivi de leurs campagnes promotionnelles grâce à des outils de visualisation statistiques reliés aux API de Youtube, Spotify et Instragram. Les artiste ont aussi accès à de nombreux services personnalisés, tels que la création de fan page ou de boutique en ligne. Développé avec Next.js, Node, MongoDB et Strapi.",
      live: "https://artiste-promomusique.vercel.app/"
    },
  ].reverse();
</script>

<h2 class="pageTitle">
  Prenez le temps de visiter nos réalisations. Nous serons ravis de travailler
  sur la prochaine avec vous !
</h2>

<main class="projectGlobalContainer">
  {#each projects as project (project.name)}
    <Project item={project} />
  {/each}
</main>

<style>
  .pageTitle {
    text-align: center;
    margin: 2em auto;
  }

  .projectGlobalContainer {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    margin: 0.5em auto;
  }
</style>
