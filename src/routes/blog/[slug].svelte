<script context="module">
  // eslint-disable-next-line consistent-return
  export async function preload({ params }) {
    // The `slug` parameter is available because this file is called
    // [slug].html.
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    }
    this.error(res.status, data.message);
  }
</script>

<script>
  export let post;
</script>

<style>
  /*
    By default, CSS is locally scoped to the component, and any unused styles
    are dead-code-eliminated. In this page, Svelte can't know which elements are
    going to appear inside the {{{post.html}}} block, so we have to use the
    :global(...) modifier to target all elements inside .content.
  */
  .content :global(h2) {
    @apply font-medium;

    font-size: 1.4em;
  }

  .content :global(p) {
    @apply my-4;
  }

  .content :global(a) {
    @apply underline;
  }

  .content :global(pre) {
    @apply p-2 my-4 overflow-x-auto bg-gray-100 rounded-sm shadow-inner;
  }

  .content :global(ul) {
    @apply list-inside list-disc;
  }

  .content :global(li) {
    @apply mb-2;
  }

  .content :global(pre) :global(code) {
    @apply p-0 whitespace-pre-line bg-transparent;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>
