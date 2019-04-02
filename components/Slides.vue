<template>
  <v-carousel
    v-model="slide"
    :mandatory="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    />
  </v-carousel>
</template>

<script>
export default {
  name: 'Slides',
  data() {
    return {
      slide: 0,
      sliding: null,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    nextSlide() {
      this.slide += 1
    },
    fetchData() {
      if (this.$route.params.slideId) {
        this.slide = this.$route.params.slideId
      } else {
        this.$route.params.slideId = 0
      }
    }
  }
}
</script>

<style scoped>
</style>
