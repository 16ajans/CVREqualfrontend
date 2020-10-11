<template>
  <v-app class="growy">
    <v-main>
      <v-app-bar app color="primary">
        <div>
          <v-img alt="CVRE Logo" contain src="./assets/logo.png" />
        </div>
      </v-app-bar>
      <v-container>
        <v-row justify="center"
          ><v-col class="col-auto shrinky"><router-view /></v-col
          ><v-col><TabbdContent /></v-col></v-row></v-container
    ></v-main>
    <v-footer>
      <v-img
        alt="Beat Saber Logo"
        contain
        src="./assets/BSLogo.png"
        max-height="56px"
      />
    </v-footer>
  </v-app>
</template>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
.growy {
  min-height: 100vh;
}
</style>

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
