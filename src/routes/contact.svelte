<script> 
    import validator from "validator";

    let name = '';
    let contact = '';
    let message = '';
    let loading = false;
    let infoEmail = 'dsqd sd qsdqsd dqfdsfqsd qsd qsdqs d';
    let infoMessage = 'sdq sdqs dqsd gfsdf dfsdfq sdsq dqs d';
    
    $: validated = contact && validator.isEmail(contact) && message && message.length > 10;
    $: wrongEmail = !validator.isEmail(contact) && contact;
    $: goodEmail = validator.isEmail(contact) && contact;
    $: wrongMessage = message && message.length < 10;
    $: goodMessage = message && message.length >= 10;

    const sendEmail = async () => {
        if (!message || !contact || name) return;
        loading = true;
        const res = await fetch('/api/formHandler', {
            method: 'POST',
            credentials: 'include',
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify({
                contact,
                message
            })
        });
        const data = await res.json();
        if (data.message) loading = false;
        message = '';
        contact = '';
        name = '';
    };    
</script>

<h2 class="pageTitle">Contactez-nous pour toute question concernant votre projet, nous sommes là pour le concrétiser !</h2>

<div class="contactContainer">
    <div class="contactElement">
        <label class="formLabel" for="email">E-mail</label>
        <input class="formInput" bind:value={contact} autocomplete="off" placeholder="E-mail" name="email" id="email"/>
        {#if wrongEmail}<p class="infoEmail">Merci d'entrer une adresse e-mail valide.</p>{/if}
        {#if goodEmail}<p class="infoEmailOk">OK</p>{/if}
    </div>
    <div class="contactElement">
        <label class="formLabel" for="message">Message</label>
        <textarea class="formInput formArea" bind:value={message} autocomplete="off" placeholder="Votre message..." name="message" id="message" />
        {#if wrongMessage}<p class="infoEmail">Votre message doit comporter au moins 10 caractères.</p>{/if}
        {#if goodMessage}<p class="infoEmailOk">OK</p>{/if}
    </div>
    <div class="contactName">
        <label class="formLabel" for="name">Name</label>
        <input class="formInput" bind:value={name} autocomplete="off" placeholder="Name" name="name" id="name"/>
    </div>
    <div class="contactElement">
        <button on:click={sendEmail} class="contactButton" disabled={loading || !validated}>Envoyer</button>
        {#if !validated}<p class="infoEmail">Merci de remplir tous les champs pour pouvoir envoyer votre message.</p>{/if}
    </div>
    
</div>

<style>
    .pageTitle {
        text-align: center;
        margin: 2em auto;
    }

    .contactContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .contactElement {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em 0;
        width: 100%;
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

    .formArea {
        min-height: 100px;
    }

    .contactButton {
        margin: 0;
        padding: 0.9em 1.8em;
        text-transform: uppercase;
        font-weight: 600;
        color: #ff1154;
        background-color: black;
        border: 1px solid white;
        cursor: pointer;
    }

    .contactButton:hover {
        border-color: #ff1154;
    }

    .contactButton:disabled {
        color: white;
        background-color: darkgray;
        cursor: not-allowed;
    }

    .infoEmail {
        font-size: small;
        color: red;
        font-weight: 600;
        margin-bottom: 0;
    }

    .infoEmailOk {
        font-size: small;
        color:#3acddd;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 0;
    }
</style>