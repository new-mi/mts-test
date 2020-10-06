<template>
  <div class="title-block" data-aos="fade-up">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.title-block {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  color: $g-color-deep-blue;
  margin-bottom: 30px;
}
@media (min-width: $g-brakpoint-tablet) {
  .title-block {
    max-width: 100%;
    width: 444px;
    justify-content: center;
    text-align: center;
    margin: 0px auto 50px;
    font-size: 32px;
  }
}
</style>
