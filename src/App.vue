<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary">
        <div>
          <v-img
            alt="CVRE Logo"
            contain
            src="./assets/logo.png"
          />
        </div>
      </v-app-bar>
      <v-container>
        <v-row
          ><v-col class="col-auto"><Login /></v-col
          ><v-col><TabbdContent /></v-col></v-row></v-container
    ></v-main>
  </v-app>
</template>

<script>
import Login from "./components/login";
import TabbdContent from "./components/tabbdContent";
// import Dash from "./components/dash";

export default {
  name: "App",

  components: {
    Login,
    TabbdContent,
    // Dash,
  },

  data: () => ({
    //
  }),
  
};
</script>
