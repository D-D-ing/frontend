<template>
  <v-dialog
    ref="modal"
    v-model="dialog"
    width="500"
  >

    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Publikumsfrage
      </v-card-title>

      <v-card-text>
        Was ist die Antwort auf alle Fragen?
      </v-card-text>
      <v-btn @click="dialog=false">
        12
      </v-btn>
      <v-btn @click="dialog=false">
        22
      </v-btn>
      <v-btn @click="dialog=false">
        32
      </v-btn>
      <v-btn @click="dialog=false">
        42
      </v-btn>
      <v-divider/>

      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="error"
          flat
          @click="dialog = false"
        >
          Abbrechen
        </v-btn>
        <v-spacer/>
        <v-btn
          color="success"
          flat
          @click="dialog = false"
        >
          Senden
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'QuestionModal',
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    show() {
      this.dialog = true
    }
  }
}
</script>

<style scoped>
</style>
