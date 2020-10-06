<template>
  <swiper ref="mySwiper" :options="swiperOptions">

    <swiper-slide v-for="card in cards" :key="card.id">
      <TaskCard :card="card" />
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next" slot="button-next">
      <div class="nav-el nav-el_next">
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.451255 10.865L4.81625 6.50001L0.451255 2.13501C0.0125049 1.69626 0.0125049 0.987509 0.451255 0.548759C0.890005 0.110009 1.59875 0.110009 2.0375 0.548759L7.20125 5.71251C7.64 6.15126 7.64 6.86001 7.20125 7.29876L2.0375 12.4625C1.59875 12.9013 0.890005 12.9013 0.451255 12.4625C0.0237549 12.0238 0.0125049 11.3038 0.451255 10.865Z"/>
        </svg>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev">
      <div class="nav-el nav-el_prev">
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.54875 2.13499L3.18375 6.49999L7.54875 10.865C7.9875 11.3037 7.9875 12.0125 7.54875 12.4512C7.11 12.89 6.40125 12.89 5.9625 12.4512L0.798746 7.28749C0.359996 6.84874 0.359996 6.13999 0.798746 5.70124L5.9625 0.537494C6.40125 0.0987443 7.11 0.0987443 7.54875 0.537494C7.97625 0.976244 7.9875 1.69624 7.54875 2.13499Z"/>
        </svg>
      </div>
    </div>

  </swiper>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 8,
        slidesPerView: 'auto',
        freeMode: true,
        breakpoints: {
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 32,
            slidesPerView: 4,
            freeMode: false,
          },

        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  beforeDestroy() {
    this.swiper.destroy()
  }
}
</script>
