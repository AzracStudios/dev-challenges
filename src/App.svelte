<script>
  import Button from "./button.svelte";
</script>

<div class="app">
  <h1 style="color: rgb(50, 50, 50);">Buttons</h1>

  <div class="row">
    <div class="cont">
      <code>{"<Button />"}</code>
      <Button text="Default" />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{'<Button variant="outline" />'}</code>
      <Button text="Default" variant="outline" />
    </div>

    <div class="cont">
      <code>{'<Button variant="text" />'}</code>
      <Button text="Default" variant="text" />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{"<Button disableShadow />"}</code>
      <Button text="Default" color="primary" disableShadow />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{"<Button disabled />"}</code>
      <Button text="Default" disabled />
    </div>

    <div class="cont">
      <code>{'<Button variant="text" disabled />'}</code>
      <Button text="Default" variant="text" disabled />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{'<Button startIcon="local_grocery_store" />'}</code>
      <Button text="Default" startIcon="local_grocery_store" color="primary" />
    </div>

    <div class="cont">
      <code>{'<Button endIcon="local_grocery_store" />'}</code>
      <Button text="Default" endIcon="local_grocery_store" color="primary" />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{'<Button size="sm" />'}</code>
      <Button text="Default" color="primary" size="sm" />
    </div>

    <div class="cont">
      <code>{'<Button size="md" />'}</code>
      <Button text="Default" color="primary" size="md" />
    </div>

    <div class="cont">
      <code>{'<Button size="lg" />'}</code>
      <Button text="Default" color="primary" size="lg" />
    </div>
  </div>

  <div class="row">
    <div class="cont">
      <code>{'<Button color="default" />'}</code>
      <Button text="Default" />
    </div>

    <div class="cont">
      <code>{'<Button color="primary" />'}</code>
      <Button text="Primary" color="primary" />
    </div>

    <div class="cont">
      <code>{'<Button color="secondary" />'}</code>
      <Button text="Secondary" color="secondary" />
    </div>

    <div class="cont">
      <code>{'<Button color="danger" />'}</code>
      <Button text="Danger" color="danger" />
    </div>
  </div>

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
    height: 100px;
  }

  .app {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 50px;
  }
  .row {
    display: flex;
    gap: 50px;
  }

  .cont {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
