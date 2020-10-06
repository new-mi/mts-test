<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.button {
  font-weight: 500;
  text-decoration: none;
  min-height: 36px;
  transition: $g-transition;
  text-align: center;
  &_accent {
    background-color: $g-color-accent;
    color: $g-color-white;
    padding: 8px 16px;
    border-radius: 5px;
  }
  &_grey {
    background-color: $g-color-link-water;
    color: $g-color-deep-blue;
    padding: 8px 16px;
    border-radius: 5px;
  }
  &_tab {
    background-color: transparent;
    color: $g-color-grey-tab;
    padding: 8px 16px;
    border: 1px solid $g-color-grey-border;
    border-radius: 16px;
    &.is-active {
      color: $g-color-accent;
      pointer-events: none;
    }
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .button {
    &_accent,
    &_grey {
      font-size: 20px;
    }
  }
}
@media (min-width: $g-brakpoint-desktop) {
  .button {
    &_accent {
      &:hover {
        background-color: $g-color-red-hover;
      }
    }
    &_tab,
    &_grey {
      &:hover {
        background-color: $g-color-red-hover;
        color: $g-color-white;
      }
    }
  }
}
</style>
