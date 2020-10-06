<template>
  <div class="services">
    <TitleBlock title="Популярные сервисы" />
    <div class="services__content">
      <div class="services__fgrid">
        <ServicesItem v-for="service in servicesItems" :key="service.id" :service="service" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicesItems: []
    }
  },
  mounted() {
    this.servicesItems = this.$store.getters.servicesItems
  }
}
</script>

<style lang="scss">
.services {
  &__fgrid {
    display: flex;
    flex-direction: column;
    margin-bottom: -20px;
    .services__item {
      margin-bottom: 20px;
    }
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .services {
    &__fgrid {
      flex-direction: row;
      flex-wrap: wrap;
      width: calc(100% + 32px);
      margin: 0 -16px -32px;
      .services__item {
        width: calc(50% - 32px);
        margin: 0 16px 32px;
      }
    }
  }
}
</style>
