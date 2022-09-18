<script>
  export let text = "Button";
  export let variant;
  export let disableShadow;
  export let disabled;
  export let startIcon;
  export let endIcon;
  export let size = "md";
  export let color = "default";
</script>

<div
  class={`button ${variant} ${size} ${color} ${disabled ? "disabled" : ""} ${
    disableShadow || disabled || variant ? "" : "shadow"
  }`}
>
  <span class={`material-symbols-outlined ${startIcon ? "" : "hidden"}`}
    >{startIcon}</span
  >
  {text}
  <span class={`material-symbols-outlined ${endIcon ? "" : "hidden"}`}
    >{endIcon}</span
  >
</div>

<style lang="scss">
  .material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  }

  .hidden {
    display: none;
  }

  .button {
    &.sm {
        padding: 6px 12px;
    }

    &.md {
        padding: 8px 16px;
    }

    &.lg {
        padding: 11px 22px;
    }

    width: fit-content;
    border-radius: 6px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    cursor: pointer;
    transition: all 0.2s;

    &:not(.disabled) {
      &:hover,
      &:focus {
        background: rgba(174, 174, 174, 1);
      }
    }

    &.shadow {
      box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    }

    &.disabled {
      &:not(.text) {
        background: rgba(224, 224, 224, 1);
      }

      color: rgba(158, 158, 158, 1);
    }
  }

  .default {
    background: rgba(224, 224, 224, 1);
    color: rgba(63, 63, 63, 1);

    &:not(.disabled) {
      &:hover,
      &:focus {
        background: rgba(174, 174, 174, 1);
      }
    }
  }

  .primary {
    background: rgba(41, 98, 255, 1);
    color: white;

    &:not(.disabled) {
      &:hover,
      &:focus {
        background: rgba(0, 57, 203, 1);
      }
    }
  }

  .secondary {
    background: rgba(69, 90, 100, 1);
    color: white;

    &:not(.disabled) {
      &:hover,
      &:focus {
        background: rgba(28, 49, 58, 1);
      }
    }
  }

  .danger {
    background: rgba(211, 47, 47, 1);
    color: white;

    &:not(.disabled) {
      &:hover,
      &:focus {
        background: rgba(154, 0, 7, 1);
      }
    }
  }

  .outline {
    background: white;
    border: 1px solid rgba(61, 90, 254, 1);
    color: rgba(61, 90, 254, 1);

    &:hover,
    &:focus {
      background: rgba(41, 98, 255, 0.1);
    }
  }

  .text {
    background: white;
    border: 1px solid transparent;
    color: rgba(61, 90, 254, 1);
  }
</style>
