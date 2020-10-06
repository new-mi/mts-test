<template>
  <button class="humburger">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss">
.humburger {
  width: 24px;
  height: 24px;
  padding: 4px 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: $g-color-grey-humburger;
    border-radius: 1px;
  }
}
</style>
