<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary">
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
          ><v-col class="col-auto"><router-view/></v-col
          ><v-col><TabbdContent /></v-col></v-row></v-container
    ></v-main>
  </v-app>
</template>

<script>
import TabbdContent from "./components/tabbdContent";

export default {
  name: "Skelet",

  components: {
    TabbdContent,
  },

  data: () => ({
    //
  }),
  
};
</script>
