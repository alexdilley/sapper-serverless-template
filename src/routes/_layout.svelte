<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<Nav {segment} />

<main class="relative max-w-4xl p-6 sm:p-8 mx-auto bg-white">
  <slot />
</main>
