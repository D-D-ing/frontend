<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>Events</h1>
      <ul>
        <li
          v-for="event in allEvents"
          :key="event.id">
          <p><nuxt-link :to="`liveevent/${event.accessToken}`">
            {{ event.name }}
          </nuxt-link></p>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import allEvents from '~/apollo/queries/allEvents'
export default {
  layout: 'inside',
  apollo: {
    allEvents: {
      query: allEvents,
      fetchPolicy: 'network-only'
    }
  },
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
