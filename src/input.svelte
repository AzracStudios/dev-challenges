<script>
  export let error;
  export let disabled;
  export let helperText = "";
  export let size = "md";
  export let value;
  export let fullWidth;
  export let multiline;
  export let rows;
  export let labelText = "Label";
</script>

<main
  class={`input ${size} ${fullWidth ? "fullWidth" : "nmlWidth"} ${
    error && !disabled ? "error" : !error && disabled ? "disabled" : "normal"
  }`}
>
  <p class="label">{labelText}</p>
  <div class="cont">
    {#if !multiline}
      <input
        type="text"
        placeholder="Placeholder"
        value={value ? value : ""}
        {disabled}
      />
    {:else}
      <textarea name="textarea" cols="30" {rows} placeholder="Placeholder" />
    {/if}
  </div>

  {#if helperText !== ""}
    <p class="helperText">{helperText}</p>
  {/if}
</main>

<style lang="scss">
  .hidden {
    display: none;
  }

  .input {
    height: fit-content;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;

    .label {
      font-size: 1rem;
    }

    .helperText {
      font-size: 0.8rem;
      color: gray;
    }

    &.md {
      height: 56px;
    }

    &.sm {
      height: 40px;
    }

    &.nmlWidth {
      width: 200px;
    }

    &.fullWidth {
      width: 100%;

    }

    .cont {
      width: 100%;
      &:has(input) {
        height: inherit;
      }
    }

    input {
      height: inherit;
    }

    &.disabled {
      input {
        background: #f2f2f2;
        border: 1px solid #e0e0e0;
      }

      input:hover {
        border: 1px solid #e0e0e0;
      }
    }

    input,
    textarea {
      border-radius: 8px;
      padding: 18px 12px;
      border: 1px solid gray;
      transition: all 0.2s;
      outline: none;
      margin-top: -10px;
      margin-bottom: -5px;
      width: 100%;
      resize: none;

      &:hover {
        border: 1px solid rgb(51, 51, 51);
      }
    }

    &.normal {
      input:focus,
      textarea:focus {
        border: 1px solid rgb(41, 98, 255);
      }

      &:focus-within {
        color: rgba(41, 98, 255, 1);

        .helperText {
          color: rgba(41, 98, 255, 1);
        }
      }
    }

    &.error {
      input,
      textarea {
        border: 1px solid rgba(211, 47, 47, 1);

        &:hover {
          border: 1px solid rgb(51, 51, 51);
        }
      }

      color: rgba(211, 47, 47, 1);

      &:has(.cont):hover > p {
        color: rgba(51, 51, 51, 1);
      }
    }
  }
</style>
