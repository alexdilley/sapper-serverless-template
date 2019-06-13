<script>
  export let segment;
</script>

<style>
  nav {
    padding: 0 1em;
    font-weight: 300;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
  }

  ul {
    padding: 0;
    margin: 0;
  }

  /* clearfix */
  ul::after {
    display: block;
    clear: both;
    content: '';
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    bottom: -1px;
    display: block;
    width: calc(100% - 1em);
    height: 2px;
    content: '';
    background-color: rgb(255, 62, 0);
  }

  a {
    display: block;
    padding: 1em 0.5em;
    text-decoration: none;
  }
</style>

<nav>
  <ul>
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
