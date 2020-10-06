<template>
  <footer class="footer">
    <div class="footer__middle">
      <div class="container">
        <div class="footer__inner footer__inner_middle">
          <div class="footer__info">
            <h5 class="footer__info-title">Бизнес маркет</h5>
            <p class="footer__info-subtitle">Покупайте бизнес сервисы онлайн, оплатив с мобильного счета вашей организации</p>
          </div>
          <div class="footer__list">
            <FooterItem v-for="list in footerList" :key="list.id" :list="list" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__inner footer__inner_bottom">
          <p class="footer__copy">&copy; 2019 ПАО «МТС». Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerList: []
    }
  },
  mounted() {
    this.footerList = this.$store.getters.footerList
  }
}
</script>

<style lang="scss">
.footer {
  background-color: $g-color-grey-footer;
  color: $g-color-white;
  margin-top: 60px;
  &__middle {
    padding: 24px 0 0;
  }
  &__bottom {
    color: $g-color-grey-raven;
    background-color: $g-color-white;
  }
  &__inner {
    display: flex;
    align-items: center;
    &_middle {
      flex-direction: column;
      align-items: flex-start;
    }
    &_bottom {
      min-height: 56px;
    }
  }
  &__copy {
    font-size: 12px;
  }
  &__info {
    margin-bottom: 32px;
    &-title {
      display: block;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    &-subtitle {
      font-size: 14px;
    }
  }
  &__list {
    width: 100%;
  }
  &__link {
    text-decoration: none;
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .footer {
    margin-top: 100px;
    &__bottom {
      color: inherit;
      background-color: transparent;
    }
    &__inner {
      &_middle {
        padding-top: 50px;
      }
    }
    &__list {
      display: flex;
      width: calc(100% + 16px);
      margin: 0px -8px;
      & .footer__item {
        width: 20%;
        margin: 0px 8px;
      }
    }
  }
}

@media (min-width: $g-brakpoint-desktop) {
  .footer {
    &__inner {
      &_middle {
        flex-direction: row;
        padding-top: 56px;
      }
    }
    &__info {
      flex-shrink: 0;
      width: 172px;
      margin-right: 95px;
    }
    &__link {
      transition: color $g-transition-duration;
      &:hover {
        color: $g-color-accent
      }
    }
  }
}
</style>
