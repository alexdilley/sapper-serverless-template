<script>
  export let segment;
</script>

<style>
  nav {
    border-color: color-mod(theme('colors.red.500') a(0.1));
  }

  li {
    @apply block float-left;
  }

  .selected {
    @apply relative inline-block;
  }

  .selected::after {
    @apply absolute block bg-red-500;

    bottom: -1px;
    width: calc(100% - 1em);
    height: 2px;
    content: '';
  }

  a {
    @apply block px-2 py-3;
  }

  @screen xs {
    a {
      @apply py-4;
    }
  }
</style>

<nav class="px-4 font-light border-b">
  <ul class="clearfix">
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <!--
      For the blog link, we're using rel=prefetch so that Sapper prefetches the
      blog data when we hover over the link or tap it on a touchscreen.
    -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog"
      >
        blog
      </a>
    </li>
  </ul>
</nav>
