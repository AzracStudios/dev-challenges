<script>
  import Quiz from "./components/quiz.svelte";
</script>

<div class="app">
  <img class="bg" src="/background.png" alt="bg" />
  <Quiz />
  <p class="credits">
    created by{" "}
    <a href="https://github.com/AzracStudios">
      <b>
        <u>AzracStudios</u>
      </b>
    </a>{" "}
    - devChallenges.io
  </p>
</div>

<style lang="scss">
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: Poppins;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .bg {
    position: fixed;
    top: 0px;
    left: 0px;

    width: 140vw;
    z-index: -99;
    object-fit: cover;
  }

  .credits {
    color: white;
    font-size: 15px;
    position: fixed;

    bottom: 10px;

    a {
      color: white;
    }
  }
</style>
