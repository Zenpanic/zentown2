<script>
  export let item;
</script>

<div class="card project">
  <div class="card-image">
    <figure class="image is-16by10">
      <img src={item.image} alt={item.name} />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{item.name}</p>
        <a href={item.live} target="_blank" class="link">Voir le projet</a>
      </div>
    </div>

    <div class="content">
      {item.description}
    </div>
  </div>
</div>

<style>
  .project {
    max-width: 400px;
    width: 100%;
    margin: 1rem;
  }
</style>
