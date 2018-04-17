<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark 
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
     fixed >
     <v-toolbar-title>BITA Export<b></b></v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn icon @click.native=""><v-icon>settings</v-icon></v-btn>
     <v-btn icon><v-icon>help</v-icon></v-btn>    
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        subContent

        </v-layout>
      </v-container>

       </v-content>
    <v-footer color="indigo" light inset app height="10">
      <v-spacer></v-spacer><div class="mr-2 white--text caption" >&copy; 2018 </div>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios"
import _ from 'lodash'
import moment from 'moment'
import { EventBus } from "./EventBus"

export default {
  data() {
    return {
      drawer: null,
      toggleNavBar: false
      }
  },
  computed: {
  },
  created() {
   },
  components: {
  },
  methods: {    
  }
}
</script>


<style scoped>

</style>