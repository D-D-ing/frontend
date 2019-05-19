<template>
  <div>
    <h1>{{ getEventByAccessToken.name }}</h1>
    {{ getEventByAccessToken.description }}
    <h2>Interactions</h2>
    <ul>
      <li
        v-for="interaction in getEventByAccessToken.interactions"
        :key="interaction.id">
        <p>{{ interaction.name }}</p>
        <p>{{ interaction.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import GetEventByAccessToken from '~/apollo/queries/getEventByAccessToken'

export default {
  data() {
    return {
      getEventByAccessToken: {},
      accessToken: this.$route.params.token
    }
  },
  apollo: {
    getEventByAccessToken: {
      query: GetEventByAccessToken,
      fetchPolicy: 'network-only', // don't used cached values by default
      loadingKey: 'loading',
      variables() {
        return {
          token: this.accessToken
        }
      }
    }
  }
}
</script>
