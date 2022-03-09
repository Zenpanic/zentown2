<script>
  const techStack = [
    { src: "/images/tech/html5.png", name: "html" },
    { src: "/images/tech/css3.png", name: "css" },
    { src: "/images/tech/javascript.png", name: "javascript" },
    { src: "/images/tech/react.png", name: "react" },
    { src: "/images/tech/mongodb.png", name: "mongoDB" },
    { src: "/images/tech/nodejs.png", name: "node" },
    {
      src: "/images/tech/typescript.png",
      name: "typescript",
    },
    { src: "/images/tech/svelte.png", name: "svelte" },
  ];
</script>

<section class="box mt-6 mr-1 ml-1 techContainer">
  {#each techStack as tech (tech.name)}
    <figure class="image is-96x96 m-1">
      <img src={tech.src} alt={tech.name} />
    </figure>
  {/each}
</section>

<style>
  .techContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
