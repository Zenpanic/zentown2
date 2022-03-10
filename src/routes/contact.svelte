<script>
  import validator from "validator";
  import Icon from "svelte-awesome";
  import envelope from "svelte-awesome/icons/envelope";

  let name = "";
  let contact = "";
  let message = "";
  let loading = false;
  let messageSent = false;

  $: validated =
    contact && validator.isEmail(contact) && message && message.length > 10;
  $: wrongEmail = !validator.isEmail(contact) && contact;
  $: goodEmail = validator.isEmail(contact) && contact;
  $: wrongMessage = message && message.length < 10;
  $: goodMessage = message && message.length >= 10;

  const sendEmail = async () => {
    if (!message || !contact || name) return;
    loading = true;
    messageSent = false;
    const res = await fetch("/api/formHandler", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        contact,
        message,
      }),
    });
    const data = await res.json();
    if (data.message) loading = false;
    if (data.message === "ok") messageSent = true;
    message = "";
    contact = "";
    name = "";
  };
</script>

<section class="hero is-primary block">
  <div class="hero-body">
    <p class="title">Contact</p>
    <p class="subtitle">
      Vous avez une question ? Vous souhaitez un devis ? Vous voulez m'engager ?
      (vous avez bon goût !)
    </p>
  </div>
</section>
<main class="container pr-1 pl-1 mt-6">
  <div class="form formContainer">
    <div class="field">
      <label class="label" for="email">Email</label>
      <div class="control has-icons-left">
        <input
          class="input"
          class:is-success={goodEmail}
          type="email"
          placeholder="Email"
          bind:value={contact}
          autocomplete="off"
          name="email"
          id="email"
        />
        <span class="icon is-small is-left">
          <Icon data={envelope} />
        </span>
      </div>
      {#if wrongEmail}<p class="help is-danger">
          Merci d'entrer une adresse e-mail valide.
        </p>{/if}
      {#if goodEmail}<p class="help is-success">OK</p>{/if}
    </div>

    <div class="field">
      <label class="label" for="message">Message</label>
      <div class="control">
        <textarea
          class="textarea"
          class:is-success={goodMessage}
          id="message"
          name="message"
          placeholder="Votre message"
          bind:value={message}
          rows="8"
        />
      </div>
      {#if wrongMessage}
        <p class="help is-danger">
          Votre message doit comporter au moins 10 caractères.
        </p>
      {/if}
      {#if goodMessage}
        <p class="help is-success">OK</p>
      {/if}
    </div>

    <div class="contactName">
      <label class="label" for="name">Name</label>
      <input
        class="formInput"
        bind:value={name}
        autocomplete="off"
        placeholder="Name"
        name="name"
        id="name"
      />
    </div>

    <div class="control field mt-4">
      <button
        class="button is-link"
        on:click={sendEmail}
        disabled={loading || !validated}>Envoyer</button
      >
      {#if !validated && !messageSent}<p class="help is-danger">
          Merci de remplir tous les champs pour pouvoir envoyer votre message.
        </p>{/if}
      {#if messageSent}<p class="help is-success">
          Votre message nous a bien été envoyé, nous vous répondrons dans les
          plus brefs délais !
        </p>{/if}
    </div>

    <img
      src="/images/webdev.png"
      alt="web dev"
      class="illustration has-text-centered mt-6"
      loading="lazy"
      width="300"
      height="298"
    />
  </div>
</main>

<style>
  .formContainer {
    max-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
  }

  .illustration {
    margin: 1rem auto;
    max-width: 100%;
    height: auto;
  }

  .contactName {
    display: none;
  }

  .formLabel {
    color: #f35f5f;
    margin-bottom: 0.5em;
    font-size: large;
    text-transform: underline;
  }

  .formInput {
    width: 50%;
    min-width: 270px;
    padding: 0.5em;
  }

  .infoEmail {
    font-size: small;
    color: red;
    font-weight: 600;
    margin-bottom: 0;
  }

  .infoEmailOk {
    font-size: small;
    color: #3acddd;
    font-weight: 600;
    margin-bottom: 0;
    text-align: center;
  }
</style>
