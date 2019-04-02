<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>Willkommen zum Livefeedback!</h1>

      Bitte den Code der Veranstaltung eingeben:
      <v-form v-model="valid">
        <v-container>
          <v-layout
            align-center="true"
            justify-center="true">
            <v-flex
              xs12
              md4
            >
              <v-text-field
                v-model="eventID"
                label="First name"
                placeholder="Enter your EventID"
                required
              />
            </v-flex>
          </v-layout>
          <v-layout
            align-center="true"
            justify-center="true"
          >
            <v-flex
              xs12
              md4
            >
              <v-btn
                color="info"
                @click="handleClick">Submit</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
//import Slides from './Slides'

export default {
  name: 'Client',
  //components: {
  // Slides
  //},
  data() {
    return {
      conferenceTitle: this.$route.params.eventName
    }
  },
  methods: {
    handleClick() {
      console.log(this.eventID)
      this.$router.push('/event/' + this.eventID + '/0')
    }
  }
}
</script>
