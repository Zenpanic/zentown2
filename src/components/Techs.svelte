<script>
  const techStack = [
    { src: "/images/tech/html5.png", name: "html" },
    { src: "/images/tech/css3.png", name: "css" },
    { src: "/images/tech/javascript.png", name: "javascript" },
    { src: "/images/tech/react.png", name: "react" },
    { src: "/images/tech/mongodb.png", name: "mongoDB" },
    { src: "/images/tech/nodejs.png", name: "node" },
    {
      src: "/images/tech/postgresql.png",
      name: "postgreSql",
    },
    { src: "/images/tech/python.png", name: "python" },
    {
      src: "/images/tech/typescript.png",
      name: "typescript",
    },
    { src: "/images/tech/svelte.png", name: "svelte" },
    { src: "/images/tech/jest.png", name: "jest" },
  ];
</script>

<section class="content block box mt-6">
  <div class="techContainer">
    {#each techStack as tech (tech.name)}
      <figure class="image is-96x96">
        <img src={tech.src} alt={tech.name} />
      </figure>
    {/each}
  </div>
</section>

<style>
  .techContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
