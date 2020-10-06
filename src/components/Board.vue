<template>
  <div class="board" style="background-image: url('/assets/images/board.png')">
    <div class="board__box">
      <h1 class="board__title">Цифровые решения для вашего бизнеса</h1>
      <p class="board__text">Покупайте бизнес сервисы онлайн, <br> оплатив с мобильного счета вашей организации</p>
      <button class="button button_accent board__button">Смотреть все сервисы</button>
    </div>
  </div>
</template>

<style lang="scss">
.board {
  padding: 14px 0 220px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 230px 200px;
  &__title {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  &__box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }
  &__text {
    font-weight: 500;
    margin-bottom: 20px;
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .board {
    padding: 60px 0;
    background-position: right bottom;
    background-size: 430px 381px;
    min-height: 400px;
    &__box {
      display: flex;
      max-width: 100%;
      width: 600px;
    }
    &__title {
      font-size: 48px;
      margin-bottom: 32px;
    }
    &__text {
      order: -1
    }
  }
}
</style>
