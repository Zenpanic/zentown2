<script>
  import Techs from "/src/components/Techs.svelte";
</script>

<section class="hero is-primary block">
  <div
    class="hero-body is-flex is-align-items-center is-justify-content-space-between"
  >
    <figure class="image is-128x128 is-hidden-mobile">
      <img
        src="/images/logo_transparent.png"
        alt="logo"
        width="128"
        height="128"
      />
    </figure>
    <div class="ml-4">
      <p class="title">Sébastien Belmo</p>
      <p class="subtitle">Développeur web</p>
    </div>
  </div>
</section>
<main class="container">
  <section class="mt-6 pr-1 pl-1">
    <div class="flexCont">
      <div class="content paragraphe">
        <h2 class="title">Construire une présence en ligne</h2>
        <p>
          Développeur web fullstack depuis 2020, je vous accompagne dans vos
          projets des plus simples aux plus complexes. Site vitrine ou
          application web avancée, projet artistique ou plate-forme ecommerce,
          professionnel ou particulier, n'attendez plus pour vous lancer !
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
      <div class="content has-text-right-tablet paragraphe">
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

  .paragraphe {
    min-width: 312px;
  }
</style>
