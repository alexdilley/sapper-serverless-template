<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul class="mb-4 list-inside list-disc">
  {#each posts as post}
    <!--
      We're using the non-standard `rel=prefetch` attribute to tell Sapper to
      load the data for the page as soon as the user hovers over the link or
      taps it, instead of waiting for the 'click' event.
    -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}" class="underline">
        {post.title}
      </a>
    </li>
  {/each}
</ul>
