<template>
  <div class="avatar"
    :class="{
      'avatar_circle': isCircle
    }"
  >
    <img :src="image" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isCircle: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      reuired: true
    }
  }
}
</script>

<style lang="scss">
.avatar {
  width: 32px;
  height: 32px;
  background-color: $g-color-grey;
  img {
    width: 100%;
    height: 100%;
  }
  &_circle {
    border-radius: 50%;
  }
}
@media (min-width: $g-brakpoint-tablet) {
  .avatar {
    width: 40px;
    height: 40px;
  }
}
</style>
