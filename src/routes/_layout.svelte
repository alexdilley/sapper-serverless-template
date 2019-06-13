<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style>
  main {
    position: relative;
    box-sizing: border-box;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    background-color: white;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
