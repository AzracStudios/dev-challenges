<script>
  export let quote;
</script>

<div class="quote">
  <div class="bar" />
  <p class="text">"{quote}"</p>
</div>

<style lang="scss">
  .quote {
    display: flex;
    align-items: center;
    gap: 30px;
    

    .bar {
      width: 4px;
      height: 90%;
      background-color: rgba(247, 223, 148, 1);
    }

    p {
      max-width: 615px;
      font-size: 30px;
      font-weight: 500;
    }
  }

</style>
