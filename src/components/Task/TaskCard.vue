<template>
  <div class="task__card" data-aos="fade-down">
    <img :src="card.logo" alt="" class="task__card-logo">
    <h5 class="task__card-title">{{ card.title }}</h5>
    <p class="task__card-text">{{ card.text }}</p>
    <div class="task__card-options">
      <div v-for="opt in card.options" :key="opt.id" v-html="opt.html"></div>
    </div>
    <a :href="card.href" class="button button_grey task__card-button">Подробнее</a>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.task__card {
  display: flex;
  flex: 1 0;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  width: 260px;
  min-width: 260px;
  height: 100%;
  padding: 30px 25px;
  border-radius: 8px;
  border: 1px solid $g-color-grey-border;
  & > * {
    max-width: 100%;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-logo {
    // height: 16px;
    margin-bottom: 16px;
  }
  &-title {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    min-height: 56px;
  }
  &-text {
    min-height: 125px;
  }
  &-button {
    width: 100%;
    margin-top: auto;
  }
  &-options {
    margin-top: auto;
    & + .task__card-button {
      margin-top: 0;
    }
  }
  &-option {
    display: flex;
    align-items: center;
    &_call {
      span {
        line-height: 1;
        &:nth-child(1) {
          font-size: 45px;
        }
        &:nth-child(2) {
          font-size: 21px;
          margin-left: 8px;
        }
      }
    }
    &_price {
      font-size: 21px;
      line-height: 1;
      span {
        font-size: 24px;
      }
    }
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .task__card {
    width: 276px;
    min-width: 276px;
    padding: 30px;
  }
}

@media (min-width: $g-brakpoint-desktop) {
  .task__card {
    transition: $g-transition;
    &:hover {
      border-color: transparent;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    }
  }
}
</style>
