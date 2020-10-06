<template>
  <div class="pair-click">
    <TitleBlock title="Покупка с корпоративного счета в пару кликов" />
    <div class="pair-click__content">
      <div class="pair-click__list">
        <PairClickOption v-for="(option, index) in pairClickOptions" :key="index" :option="option" />
        <a href="/" class="button button_accent pair-click__button" data-aos="fade-right">Смотреть все сервисы</a>
      </div>
      <div class="pair-click__image">
        <img src="/assets/images/pair-click/image.png" alt="Покупка с корпоративного счета в пару кликов">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pairClickOptions: []
    }
  },
  mounted() {
    this.pairClickOptions = this.$store.getters.pairClickOptions
  }
}
</script>

<style lang="scss">
.pair-click {
  &__list {
    display: flex;
    flex: 1 0;
    flex-direction: column;
    margin-bottom: 30px;
    .pair-click__option {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__image {
    display: none;
    flex-shrink: 0;
  }
  &__content {
    display: block;
    flex-direction: column;
  }
  &__button {
    margin: 0 auto 0 36px;
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .pair-click  {
    &__image {
      display: block;
      min-width: 400px;
      margin-left: 32px;
    }
    &__list {
      margin-bottom: 0;
    }
    &__content {
      display: flex;
      flex-direction: row;
    }
  }
}
@media (min-width: $g-brakpoint-desktop) {
  .pair-click  {
    &__image {
      min-width: 522px;
      margin-left: 92px;
      img {
        width: 100%;
      }
    }
    &__content {
      align-items: center;
    }
  }
}
</style>
