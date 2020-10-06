<template>
  <div class="header__logo">
    <Logo />
    <span class="header__logo-text" >Бизнес маркет</span>
  </div>
</template>

<style lang="scss">
.header {
  &__logo {
    display: inline-flex;
    align-items: center;
    margin-right: auto;
    &-text {
      display: none;
    }
  }
}

@media (min-width: $g-brakpoint-tablet) and (max-width: $g-brakpoint-desktop) {
  .header {
    &__logo {
      .logo {
        width: 75px;
        height: 19px;
      }
    }
  }
}

@media (min-width: $g-brakpoint-desktop) {
  .header {
    &__logo {
      &-text {
        display: inline-block;
        color: $g-color-accent;
        margin-left: 10px;
        font-size: 20px;
        white-space: nowrap;
        line-height: 24px
      }
    }
  }
}
</style>
