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
  ];
</script>

<h2 class="techsText">Notre tech stack</h2>

<div class="techContainer">
  {#each techStack as tech (tech.name)}
    <img src={tech.src} alt={tech.name} class="techImage" />
  {/each}
</div>

<style>
  .techsText {
    text-transform: uppercase;
    text-align: center;
    width: 50%;
    margin: 2em auto 0.5em auto;
    padding: 0.5em 0 1em 0;
    color: #f35f5f;
    font-size: xx-large;
    font-weight: 600;
    letter-spacing: 0.3em;
  }

  .techContainer {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5em auto;
    justify-content: center;
    align-items: center;
  }

  .techImage {
    margin: 0.5em;
    width: 100px;
    height: 100px;
  }
</style>
