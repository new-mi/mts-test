<template>
  <a :href="service.href" class="services__item" data-aos="fade-up" data-aos-offset="100">
    <div class="services__item-box">
      <h5 class="services__item-title">{{ service.title }}</h5>
      <p class="services__item-text">{{ service.text }}</p>
    </div>
    <div class="services__item-image">
      <img :src="service.src" :alt="service.title">
    </div>
  </a>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.services__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  border: 1px solid $g-color-grey-border;
  border-radius: 10px;
  text-decoration: none;
  &-box {
    display: flex;
    flex-direction: column;
  }
  &-title {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  &-image {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-left: 16px;
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .services__item {
    border-radius: 8px;
    &-image {
      width: 80px;
      height: 80px;
    }
  }
}
@media (min-width: $g-brakpoint-desktop) {
  .services__item {
    transition: $g-transition;
      &-text {
        max-width: 100%;
        width: 288px;
      }
      &:hover {
        border-color: transparent;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
      }
  }
}
</style>
