<script>
  export let idx;
  export let selected;
  export let right;
  export let wrong;
  export let onclick;
  export let txt;
</script>

<div
  class={`option ${selected ? "s" : right ? "c" : wrong ? "w" : "n"}`}
  on:click={() => {
    onclick(txt);
  }}
>
  <div class="l">
    <p class="idx">{idx}</p>
    <div class="txt">{txt}</div>
  </div>

  <div class="r">
    <span class={`material-symbols-outlined ${right ? "" : "hidden"}`}
      >check_circle</span
    >
    <span class={`material-symbols-outlined ${wrong && !right ? "" : "hidden"}`}
      >cancel</span
    >
  </div>
</div>

<style lang="scss">
  .hidden {
    display: none;
  }

  .material-symbols-outlined {
    color: rgba(242, 242, 242, 1);

    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  }

  .option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: 12px;

    transition: background .3s;

    width: 360px;
    height: 50px;

    padding: 0px 15px;
    cursor: pointer;

    .l {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .r {
      display: flex;
      align-items: center;
    }

    .idx {
      font-size: 20px;
      font-weight: 500;
      color: rgba(96, 102, 208, 0.8);
    }

    .txt {
      font-size: 15px;
      font-weight: 500;
      color: rgba(96, 102, 208, 0.8);
    }

    &:not(.n) {
      border: none;

      .idx {
        color: white;
      }
      .txt {
        color: white;
      }
    }

    &.s {
      background: rgba(249, 168, 38, 1);
    }

    &.c {
      background: rgba(96, 191, 136, 1);
    }

    &.w {
      background: rgba(234, 130, 130, 1);
    }
  }
</style>
