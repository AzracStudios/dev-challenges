<script>
  export let author;
  export let genre;
  export let handleClick;
</script>

<div class="author" on:click={handleClick}>
  <p class="atext">{author}</p>
  <p class="gtext">{genre}</p>
</div>

<style lang="scss">
  .author {
    cursor: pointer;

    margin-top: 50px;
    padding: 20px;
    width: 100%;

    transition: all 0.3s;

    &:hover {
      background: rgba(51, 51, 51, 1);
      .atext {
        color: white;
      }
    }

    .atext {
      font-size: 24px;
      color: rgba(79, 79, 79, 1);
      font-weight: 600;
      height: 20px;
    }

    .gtext {
      font-size: 16px;
      font-weight: 500;
      color: rgba(130, 130, 130, 1);
    }
  }
</style>
