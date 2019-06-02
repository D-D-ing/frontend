<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>User Profile</h1>
      <p v-if="user">username: {{ user.username }}</p>
      <p v-else>No user is signed in. Log in first!</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'inside',
  computed: {
    user() {
      return (this.$store.state.auth || {}).user || null
    }
  },
  created() {
    this.$store.dispatch('auth/fetch')
  }
}
</script>
