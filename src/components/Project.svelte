<script>
  export let item;
</script>

<div class="projectContainer">
  <h3 class="title">{item.name}</h3>
  <a href={item.live} target="_blank" rel="noopener">
    <img class="picture" src={item.image} alt={item.name} loading="lazy" /></a
  >
  <p class="description">{item.description}</p>

  <div class="linkBox">
    <a class="projectLink" href={item.live} target="_blank" rel="noopener"
      >Voir le projet</a
    >
    {#if item.source}
      <a class="projectLink" href={item.source} target="_blank" rel="noopener"
        >Code source</a
      >
    {/if}
    {#if item.sourceFront}
      <a
        class="projectLink"
        href={item.sourceFront}
        target="_blank"
        rel="noopener">Code source (Frontend)</a
      >
    {/if}
    {#if item.sourceBack}
      <a
        class="projectLink"
        href={item.sourceBack}
        target="_blank"
        rel="noopener">Code source (Backend)</a
      >
    {/if}
  </div>
</div>

<style>
  .projectContainer {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 15px rgba(150, 150, 150, 0.616);
    margin: 1.5em;
    padding: 0.5em;
    max-width: 500px;
  }

  .title {
    color: #f35f5f;
    font-size: x-large;
  }

  .picture {
    max-width: 100%;
    max-height: 100%;
  }

  .picture:hover {
    opacity: 70%;
  }

  .projectLink {
    color: #ff1154;
    margin: 0.5em;
  }

  @media screen and (max-width: 1000px) {
    .projectContainer {
      max-width: 100%;
    }
  }
</style>
