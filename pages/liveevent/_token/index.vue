<template>
  <div>
    <h1>{{ getLiveEventByAccessToken.name }}</h1>
    {{ getLiveEventByAccessToken.description }}
    <h2>Interactions</h2>
    <ul>
      <li
        v-for="interaction in getLiveEventByAccessToken.interactions"
        :key="interaction.id">
        <p>{{ interaction.name }}</p>
        <p>{{ interaction.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import GetLiveEventByAccessToken from '~/apollo/queries/getLiveEventByAccessToken'

export default {
  layout: 'inside',
  data() {
    return {
      getLiveEventByAccessToken: {},
      accessToken: this.$route.params.token
    }
  },
  apollo: {
    getLiveEventByAccessToken: {
      query: GetLiveEventByAccessToken,
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
