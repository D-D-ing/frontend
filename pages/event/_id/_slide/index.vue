<template>
  <div>
    <h1>{{ conferenceTitle }}</h1>
    <slides ref="slideShow"/>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="favorites"
        @click="openQuiterModal"
      >
        <span>Leiser</span>
        <v-icon>volume_down</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        @click="openLouderModal"
      >
        <span>Lauter</span>
        <v-icon>volume_up</v-icon>
      </v-btn>


      <v-btn
        color="teal"
        flat
        @click="openQuestionModal"
      >
        <span>Frage</span>
        <v-icon>live_help</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        @click="openRepeatModal"
      >
        <span>Wiederholen</span>
        <v-icon>replay</v-icon>
      </v-btn>
    </v-bottom-nav>
    <InteractModal ref="Modal"/>
  </div>
</template>

<script>
import Slides from '../../../../components/Slides'
import InteractModal from '../../../../components/InteractModal'

export default {
  name: 'Index',
  components: {
    Slides,
    InteractModal
  },
  data() {
    return {
      conferenceTitle: this.$route.params.id,
      slide: this.$route.params.slide
    }
  },
  methods: {
    openQuestionModal() {
      this.$refs.Modal.show(
        'Eine Frage stellen: ',
        'Ich habe eine Frage zu ....',
        'question',
        'https://www.meedia.de/wp-content/uploads/2016/07/jauch-quiz2-630x353.jpg'
      )
    },
    openLouderModal() {
      this.$refs.Modal.show(
        'Warum seid ihr so leise? ',
        'Bitte lauter sprechen.',
        'louder',
        'https://www.vermoegenmagazin.de/wp-content/uploads/2017/02/HP-Baxxter-Vermoegen.jpg'
      )
    },
    openQuiterModal() {
      this.$refs.Modal.show(
        'Warum seid ihr so laut? ',
        'Bitte leiser sprechen.',
        'quiter',
        'https://image.freepik.com/psd-kostenlos/lautstarkeregler_29-20000280.jpg'
      )
    },
    openRepeatModal() {
      this.$refs.Modal.show(
        'Wiederholen.. ',
        'Kann .... bitte nochmal wiederholt werden?',
        'repeat',
        'http://www.lowbird.com/data/images/2010/01/2009-12-28-1261411567779-1.gif'
      )
    }
  }
}
</script>
