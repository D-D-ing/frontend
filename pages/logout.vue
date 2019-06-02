<template>
  <v-layout
    justify-center
    align-center>
    <v-text-field>Logging out.</v-text-field>
  </v-layout>
</template>

<script>
export default {
  layout: 'outside',
  created() {
    this.logOut()
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/reset').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
