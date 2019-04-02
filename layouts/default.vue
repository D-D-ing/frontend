<template>
  <v-app :dark="isDark">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="miniVariant = !miniVariant">
          <v-list-tile-action>
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Collapse</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-spacer/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="true"
      v-model="rightDrawer"
      temporary
      fixed>
      <v-list>
        <v-list-tile @click.stop="isDark = !isDark">
          <v-list-tile-action>
            <v-icon light>opacity</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch theme (dark/light)</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon light>person_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>User option</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app>
      <v-spacer/>
      <span>
        Created with
        <v-icon style="font-size: 15px;">favorite</v-icon>
        in
        Dresden {{ thisYear }}!
      </span>
      <v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'DDIng Conference App',
      isDark: true,
      drawer: null,
      clipped: true,
      fixed: true,
      miniVariant: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
        { icon: 'pan_tool', title: 'Agenda', to: '/agenda' },
        {
          icon: 'supervised_user_circle',
          title: 'Join to Event',
          to: '/client'
        }
      ],
      rightDrawer: false
    }
  },
  computed: {
    thisYear: function() {
      return new Date().getFullYear()
    }
  }
}
</script>
