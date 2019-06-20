<template>
  <v-layout
    justify-center
    align-center>
    <v-card
      class="elevation-10"
      style="flex: 0 1 400px">
      <v-card-title class="headline">Log In</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-alert
            v-if="alert"
            :type="alert.type"
            value="true">{{ alert.message }}</v-alert>
          <v-text-field
            v-model="username"
            label="Username"/>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"/>
          <v-btn
            :loading="loading"
            :disabled="loading"
            type="submit">Log In</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import SignIn from '~/apollo/queries/signIn'
export default {
  layout: 'outside',
  data() {
    return {
      username: '',
      password: '',
      alert: null,
      loading: false
    }
  },
  methods: {
    async submit() {
      this.alert = null
      try {
        const res = await this.$apollo.query({
          query: SignIn,
          fetchPolicy: 'network-only',
          variables: {
            username: this.username,
            password: this.password
          }
        })
        this.alert = {
          type: 'success',
          message: 'login successful'
        }
        this.loading = false
        this.$store.dispatch('auth/login', res.data.signIn.token)
        setTimeout(() => {
          this.$router.push('/live_events')
        }, 1000)
      } catch (e) {
        this.loading = false
        this.alert = {
          type: 'error',
          message: 'Error while logging in.'
        }
      }
    }
  }
}
</script>
