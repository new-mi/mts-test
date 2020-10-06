<template>
  <div class="task">
    <TitleBlock title="Какую задачу вы решаете?" />
    <div class="task__content">
      <nav class="task__tabs">
        <button
          data-aos="fade-right"
          class="button button_tab task__tab"
          :class="{ 'is-active': task.id === currentTaskId }"
          v-for="task in tasks" :key="task.id"
          @click.prevent="clickTab(task.id)"
        >{{ task.name }}</button>
      </nav>
      <div class="task__slider" v-if="currentTask">
        <TaskSwiper ref="taskSwiper" :cards="currentTask.items" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      currentTaskId: null
    }
  },
  computed: {
    currentTask() {
      return this.tasks.find(t => t.id === this.currentTaskId)
    }
  },
  mounted() {
    this.tasks = this.$store.getters.tasks
    this.clickTab(this.tasks[0].id)
  },
  methods: {
    clickTab(id) {
      this.currentTaskId = id
    }
  }
}
</script>

<style lang="scss">
.task {
  &__tabs {
    display: flex;
    flex-direction: column;
    // margin-bottom: 30px;
    .task__tab {
      margin-bottom: 8px;
    }
  }
  &__slider {
    width: calc(100% + 32px);
    margin: 0 -16px;
    padding: 30px 16px 0;
    overflow: hidden;
    .swiper-pagination {
      min-height: 76px;
      display: flex;
      align-items: center;
      padding: 20px 0 ;
    }
    .swiper-slide {
      height: auto;
    }
    .swiper-container {
      overflow: visible;
    }
    .swiper-slide {
      flex: 0 1
    }
    .swiper-pagination-bullet {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: $g-color-grey-heather;
      border-radius: 50%;
      margin-right: 8px;
      outline: none;
      cursor: pointer;
      &-active {
        background-color: $g-color-accent;
        pointer-events: none;
      }
    }
  }
}

@media (min-width: $g-brakpoint-tablet) {
  .task {
    &__tabs {
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 18px;
      .task__tab {
        margin: 0 12px 12px 0;
      }
    }
    &__slider {
      .swiper-pagination {
        justify-content: center;
        padding: 20px 80px;
      }
    }
  }
}

@media (min-width: $g-brakpoint-desktop) {
  .task {
    &__tabs {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    &__slider {
      .swiper-pagination-bullet {
        &:hover {
          background-color: $g-color-red-hover;
        }
      }
    }
  }
}

</style>
