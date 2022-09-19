<script>
  export let handleClick
</script>

<div class="btn" on:click={handleClick}>
  <p>random</p>
  <span class="material-symbols-outlined"> autorenew </span>
</div>

<style lang="scss">
  .material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    position: fixed;
    top: 0px;
    right: 0px;
    padding: 30px 80px;
  }
</style>
