<template>
  <v-layout
    justify-center
    align-center>
    <v-card
      class="elevation-10"
      style="flex: 0 1 400px">
      <v-card-title class="headline">Log In</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitGQL">
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
    async submitGQL() {
      this.alert = null
      console.log(this.username)
      console.log(this.password)
      try {
        const res = await this.$apollo.query({
          query: SignIn,
          fetchPolicy: 'network-only',
          variables: {
            username: this.username,
            password: this.password
          }
        })
        console.log(res.data.signIn.token)
        this.alert = {
          type: 'success',
          message: 'login successful'
        }
        this.loading = false
        this.$store.dispatch('auth/gqlLogin', res.data.signIn.token)
        this.$router.push('/events')
      } catch (e) {
        this.loading = false
        this.alert = {
          type: 'error',
          message: 'Error while logging in.'
        }
      }
    },
    submit() {
      this.alert = null
      this.loading = true
      this.$store
        .dispatch('auth/login', {
          username: this.username,
          password: this.password
        })
        .then(result => {
          this.alert = {
            type: 'success',
            message: result.data.message
          }
          this.loading = false
          this.$router.push('/events')
        })
        .catch(error => {
          this.loading = false
          if (error.response && error.response.data) {
            this.alert = {
              type: 'error',
              message: error.response.data.message || error.reponse.status
            }
          }
        })
    }
  }
}
</script>
