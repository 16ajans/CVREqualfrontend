<template>
  <v-app
    ><v-card class="pa-2" min-width="300" max-width="420" v-show="!registering"
      ><v-card-title>Dashboard</v-card-title
      ><v-card-subtitle>Firstname Lastname</v-card-subtitle
      ><v-container
        ><v-btn class="mr-4" color="primary" @click="gen()">Generate Pin</v-btn
        ><v-chip v-show="genned">{{ pin }}</v-chip></v-container
      > </v-card
    ><a class="ml-auto" small>Logout</a></v-app
  >
</template>

<script>
export default {
  data() {
    return {
      pin: 0,
      genned: false,
    };
  },
  methods: {
    gen: function () {
      var pad = "000000";
      this.pin = (pad + Math.floor(Math.random() * 1000000)).slice(-pad.length);
      this.genned = true;
    },
  },
};
</script>