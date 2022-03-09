<script>
  import Techs from "/src/components/Techs.svelte";
</script>

<main class="container">
  <section class="hero is-primary block">
    <div class="hero-body">
      <p class="title">ZenTown</p>
      <p class="subtitle">Développement Web</p>
    </div>
  </section>

  <section class="mt-6 pr-1 pl-1">
    <div class="flexCont">
      <div class="content">
        <h2 class="title">Construire une présence en ligne</h2>
        <p>
          Développeur web depuis 2020, je vous accompagne dans vos projets de la
          conception au déploiement, quelle que soit leur complexité. Site
          vitrine ou application web complexe, projet artistique ou plate-forme
          ecommerce, professionnel ou particulier, n'attendez plus pour vous
          lancer !
        </p>
      </div>

      <img
        src="/images/image1.png"
        alt="Presence"
        loading="lazy"
        width="445"
        height="297"
        class="illustration"
      />
    </div>
  </section>

  <section class="pr-1 pl-1">
    <div class="flexCont">
      <img
        src="/images/image2.png"
        alt="Robot"
        loading="lazy"
        width="445"
        height="297"
        class="illustration"
      />
      <div class="content has-text-right-tablet">
        <h2 class="title">La qualité professionnelle</h2>
        <p>
          ZenTown existe pour vous offrir les solutions les plus adaptées à vos
          besoins, afin de vous garantir un produit à la fois esthétique et
          efficace, dont vous pourrez être fier.
        </p>
      </div>
    </div>
  </section>

  <Techs />
</main>

<style>
  .flexCont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .flexCont > * {
    flex: 1 1 0px;
  }

  .illustration {
    max-width: 100%;
    max-height: 100%;
  }
</style>
