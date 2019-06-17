<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>User Profile</h1>
      <p v-if="myUser">username: {{ myUser.username }} <br> name: {{ myUser.name }}</p>
      <p v-else>No user is signed in. Log in first!</p>
    </v-flex>
  </v-layout>
</template>

<script>
import myUser from '~/apollo/queries/myUser'
export default {
  layout: 'inside',
  apollo: {
    myUser: {
      query: myUser
    }
  }
}
</script>
