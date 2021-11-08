<script>
  import Techs from "/src/components/Techs.svelte";
  import Process from "/src/components/Process.svelte";
</script>

<header class="headerContainer">
  <div class="mainHeader">
    <img
      src="/images/logo_transparent.png"
      alt="ZenTown"
      class="logo"
      loading="lazy"
      width="400"
      height="400"
    />
    <h1 class="mainSubtitle">Développement Web</h1>
  </div>
  <h2 class="slogan">Make your web dreams come true!</h2>
</header>

<h2 class="presentationTitle">ZenTown: construire une présence en ligne</h2>

<hr />

<section class="presentationSubcontainer" id="part1">
  <div class="presentationTextContainer">
    <p class="presentation">
      Qu'ont en commun les PME, les start-ups, les indépendants, les artistes,
      les associations et les créateurs de contenu ? Tous ont à gagner à avoir
      une visibilité sur le web, car un site est bien plus qu'un catalogue,
      livre ou portfolio dématérialisé. C'est un espace ouvert à toute heure, à
      tout moment de l'année, où sont accessibles vos créations, produits,
      idées, services et valeurs. C'est un lieu de recontre et d'échange pour
      partager information et connaissance. Et par-dessus tout, c'est une chose
      changeante et vivante, accessible par tous, partout sur Terre.
    </p>

    <p class="presentation">
      Votre identité mérite plus qu'une page standard générée sur un réseau
      social, où la seule personnalisation admise est le choix de vos photos de
      profil et bannières, et les seules fonctionnalités disponibles sont celles
      autorisées par la plate-forme. Laissez s'exprimer votre créativité, et
      offrez à vos visiteurs des services et fonctionnalités uniques et
      sur-mesure !
    </p>
  </div>
  <img
    src="/images/image1.png"
    class="homePicture"
    alt="Presence"
    loading="lazy"
    width="445"
    height="297"
  />
</section>

<h2 class="presentationTitle" id="titleRight">La qualité professionnelle</h2>

<hr />

<section class="presentationSubcontainer" id="part2">
  <img
    src="/images/image2.png"
    class="homePicture"
    alt="Robot"
    loading="lazy"
    width="445"
    height="297"
  />
  <div class="presentationTextContainer">
    <p class="presentation alignRight">
      ZenTown existe pour vous offrir les solutions les plus adaptées à vos
      besoins. De l'établissement de la bonne charte graphique pour vos pages,
      jusqu'au déploiement sur les serveurs, nous nous occupons de tout pour
      vous offrir un produit à la fois esthétique et efficace, dont vous pourrez
      être fier.
    </p>

    <p class="presentation alignRight">
      Nos sites et applications web sont légers et rapides, pour fournir à vos
      utilisateurs la meilleure expérience possible. Il est essentiel pour nous
      de faire de votre projet une réussite, autant en termes de respect de
      votre vision, que de précision technique inhérente aux technologies du
      web.
    </p>
  </div>
</section>

<h2 class="presentationTitle">Comment ça fonctionne ?</h2>

<hr />

<Process />

<Techs />

<style>
  .headerContainer {
    margin: 0.5em auto 80px auto;
    text-align: center;
  }

  .mainHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
  }

  .mainSubtitle {
    margin: 0.5em;
    font-size: xx-large;
    color: #3acddd;
    text-shadow: 0 0 15px white;
  }

  .slogan {
    font-style: italic;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .logo {
    width: 250px;
    height: 250px;
    min-width: 248px;
    min-height: 248px;
  }

  .presentationSubcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0.5em auto;
  }

  .presentation {
    flex: 1 1 0px;
    margin: 0.5em;
  }

  .presentationTitle {
    margin-top: 2em;
    color: #f35f5f;
  }

  .alignRight {
    text-align: right;
  }

  .homePicture {
    margin: 0.5em;
  }

  #titleRight {
    text-align: right;
  }

  @media screen and (max-width: 1279px) {
    .mainHeader {
      flex-direction: column;
    }

    #part1 {
      flex-direction: column;
    }

    #part2 {
      flex-direction: column-reverse;
    }
  }

  @media screen and (max-width: 600px) {
    .mainSubtitle {
      font-size: larger;
    }
  }
</style>
