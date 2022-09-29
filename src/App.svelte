<script>
  import Input from "./input.svelte";
</script>

<div class="app">
  <h1 style="color: rgb(50, 50, 50);">Input</h1>
  <div class="row">
    <div class="cont">
      <code>{"<Input />"}</code>
      <Input />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{"<Input error />"}</code>
      <Input error />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{"<Input disabled />"}</code>
      <Input disabled />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{'<Input helperText="Some interesting text" />'}</code>
      <Input helperText="Some interesting text" />
    </div>

    <div class="cont">
      <code>{'<Input error helperText="Some interesting text" />'}</code>
      <Input error helperText="Some interesting text" />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{"<Input value='Text' />"}</code>
      <Input value="Text" />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{'<Input size="sm" />'}</code>
      <Input size="sm" />
    </div>

    <div class="cont">
      <code>{'<Input size="md" />'}</code>
      <Input size="md" />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{"<Input fullwidth />"}</code>
      <Input fullWidth />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{"<Input multiline rows='4' />"}</code>
      <Input multiline rows="4" />
    </div>
  </div>

  <div class="spacer-sm" />
  <p>created by Azrac Studios - devChallenges.io</p>
  <div class="spacer" />

</div>

<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;

    &:not(code) {
      font-family: Poppins;
    }

    box-sizing: border-box;
  }

  .spacer {
    height: 80;
  }

  .spacer-sm {
    height: 20px;
  }

  .app {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 50px;
    width: 90vw;
  }
  .row {
    display: flex;
    gap: 50px;
    width: 100%;
    margin-bottom: 30px;

    &:has(.helperText) {
      margin-bottom: 50px;
    }
  }

  .cont {
    display: flex;
    flex-direction: column;
    &:has(.fullWidth) {
      width: 100%;
    }
  }
</style>
