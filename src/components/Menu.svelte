<script>
  import { onMount } from "svelte";
  import Drawer, { Content, Header, Title, Subtitle } from "@smui/drawer";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import IconButton from "@smui/icon-button";
  import { H6 } from "@smui/common/elements";
  let open = false;
  let active = "/";
  function setActive(value) {
    active = value;
    open = false;
  }

  onMount(async () => {
    console.log(window.window.innerWidth);
  });
</script>

<nav class="toHide">
  <!-- Don't include fixed={false} if this is a page wide drawer.
          It adds a style for absolute positioning. -->
  <Drawer variant="modal" bind:open>
    <Header>
      <Title>ZenTown</Title>
      <Subtitle>Développement Web</Subtitle>
    </Header>
    <Content>
      <List>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("/")}
          activated={active === "/"}
        >
          <Graphic class="material-icons" aria-hidden="true">home</Graphic>
          <Text>Accueil</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("portfolio")}
          activated={active === "portfolio"}
        >
          <Graphic class="material-icons" aria-hidden="true">star</Graphic>
          <Text>Portfolio</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("portfolio")}
          activated={active === "portfolio"}
        >
          <Graphic class="material-icons" aria-hidden="true">send</Graphic>
          <Text>Contact</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("contact")}
          activated={active === "contact"}
        >
          <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
          <Text>Drafts</Text>
        </Item>

        <Separator />
        <Subheader component={H6}>2020 - 2022</Subheader>
      </List>
    </Content>
  </Drawer>
  <div class="buttonContainer">
    <IconButton
      color="f35f5f"
      class="material-icons"
      on:click={() => (open = !open)}>menu</IconButton
    >
  </div>
</nav>

<noscript>
  <style>
    .toHide {
      display: none;
    }
  </style>
</noscript>

<style>
  .buttonContainer {
    display: flex;
    align-items: center;
    margin: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    border: 2px dotted #f35f5f;
    border-radius: 50%;
  }
</style>
