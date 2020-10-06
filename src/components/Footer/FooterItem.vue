<template>
  <div class="footer__item" :class="{ 'is-active': isOpen }">
    <div class="footer__item-title" @click="toggle" tabindex="0">
      <span>{{ list.name }}</span>
      <i class="icon icon_right">
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.42748 2.00766C-0.0599785 1.62241 -0.142834 0.914938 0.242416 0.42748C0.627666 -0.0599782 1.33514 -0.142834 1.82259 0.242416L6.00333 3.54656L10.178 0.252028C10.6658 -0.132874 11.3732 -0.049512 11.7581 0.438221C12.143 0.925955 12.0596 1.63337 11.5719 2.01827C11.5719 2.01827 7.9342 4.93002 7.44372 5.27606C6.95325 5.62211 6.57705 6.00192 6.00672 5.99999C5.43008 6.00192 5.1133 5.71432 4.56267 5.2758C4.01204 4.83729 0.42748 2.00766 0.42748 2.00766Z" fill="#F2F3F7"/>
        </svg>
      </i>
    </div>
    <div class="footer__item-content">
      <a v-for="(item, index) in list.items" :key="index" :href="item.href" class="footer__link">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>


<style lang="scss">
.footer__item {
  width: 100%;
  padding: 8px 0;
  &.is-active {
    .footer__item {
      &-title {
        .icon {
          transform: rotate(180deg);
        }
      }
      &-content {
        display: flex;
      }
    }
  }
  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    outline: none;
    font-weight: 600;
  }
  &-content {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    .footer__link {
      padding: 8px 0;
      font-size: 12px;
    }
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .footer__item {
    &-title {
      font-size: 12px;
      pointer-events: none;
      margin-bottom: 24px;
      .icon {
        display: none;
      }
    }
    &-content {
      display: flex;
    }
  }
}
</style>
