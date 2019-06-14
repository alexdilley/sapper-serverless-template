<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1 class="mb-8 font-bold text-5xl xs:text-6xl">{status}</h1>

<p class="my-4">{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
