<template>
  <div class="pair-click__option" data-aos="fade-right">
    <i class="icon icon_l pair-click__option-icon">
      <img :src="option.src" :alt="option.text">
    </i>
    <p class="pair-click__option-text">{{ option.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.pair-click__option {
  display: flex;
  align-items: flex-start;
  &-icon {
    flex-shrink: 0;
    margin-right: 12px;
    padding: 2px;
  }
}
</style>
