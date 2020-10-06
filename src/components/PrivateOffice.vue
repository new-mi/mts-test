<template>
  <button class="private-office">
    <Avatar :is-circle="true" image="/assets/images/avatar.svg" class="private-office__avatar" />
    <span>Личный кабинет</span>
  </button>
</template>


<style lang="scss">
.private-office {
  span {
    display: none;
  }
}
@media (min-width: $g-brakpoint-desktop) {
  .private-office {
    display: inline-flex;
    align-items: center;
    padding: 0 17px;
    span {
      display: inline-block;
      color: $g-color-deep-blue;
      margin-left: 12px;
    }
  }
}
</style>
