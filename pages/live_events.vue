<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>Events</h1>
      <ul>
        <li
          v-for="liveEvent in allLiveEvents"
          :key="liveEvent.id">
          <p><nuxt-link :to="`liveevent/${liveEvent.accessToken}`">
            {{ liveEvent.name }}
          </nuxt-link></p>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import allLiveEvents from '~/apollo/queries/allLiveEvents'
export default {
  layout: 'inside',
  apollo: {
    allLiveEvents: {
      query: allLiveEvents,
      fetchPolicy: 'network-only'
    }
  },
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
