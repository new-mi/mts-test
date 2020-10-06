const { default: Swiper } = require("swiper");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/_variables.scss';@import '@/assets/scss/_functions.scss';`
      }
    }
  },
  transpileDependencies: ["dom7", "swiper"]
}
