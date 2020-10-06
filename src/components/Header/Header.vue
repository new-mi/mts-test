<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__inner header__inner_top">
          <a href="#" class="header__link">Москва</a>
          <a href="#" class="header__link">Обратная связь</a>
        </div>
      </div>
    </div>
    <div class="header__middle">
      <div class="container">
        <div class="header__inner header__inner_middle">
          <HeaderLogo/>
          <nav class="header__links">
            <a href="#" class="header__link">Онлайн сервисы</a>
          </nav>
          <PrivateOffice class="header__private-office" />
          <Humburger class="header__hamburger"/>
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss">
.header {
  box-shadow: 0px 0px 6px rgba(110, 119, 130, 0.25);
  &__inner {
    display: flex;
    align-items: center;
    &_middle {
      padding: 12px 0;
      min-height: 56px;
    }
    &_top {
      justify-content: flex-end;
      padding: 13px 0 14px;
      min-height: 44px;
    }
  }
  &__top {
    display: none;
    background-color: $g-color-white-smoke;
  }
  &__middle {
    background-color: $g-color-white;
  }
  &__hamburger,
  &__private-office {
    margin-left: 24px;
  }
  &__link {
    margin-left: 32px;
    font-size: 14px;
    color: $g-color-grey-raven;
    text-decoration: none;
  }
  &__links {
    display: none;
  }
}

@media (min-width: $g-brakpoint-desktop) {
  .header {
    &__top {
      display: block;
    }
    .humburger.header__hamburger {
      display: none;
    }
    .header__inner_middle .header__logo {
       margin-right: 72px;
    }
    &__links {
      display: inline-flex;
      align-items: center;
      margin-right: auto;
      & .header__link {
        color: $g-color-deep-blue;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
