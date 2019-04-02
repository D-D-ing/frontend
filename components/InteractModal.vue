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
        {{ heading }}
      </v-card-title>
      <v-img
        :src="picture"
        height="7.5cm"
      />
      <v-textarea
        :value="text"
        name="input-7-1"
        label="Deine Nachricht"
      />
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
  name: 'InteractModal',
  data() {
    return {
      text: '',
      dialog: false,
      heading: '',
      picture: undefined,
      type: ''
    }
  },
  methods: {
    show(heading, text, type, picture) {
      this.dialog = true
      this.text = text
      this.heading = heading
      this.picture = picture
      this.type = type
    }
  }
}
</script>

<style scoped>
</style>
