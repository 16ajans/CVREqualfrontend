<template>
  <v-app>
    <v-card>
      <v-toolbar
        ><v-tabs right v-model="tab"
          ><v-tab>Recent Submissions</v-tab><v-tab>Current Rankings</v-tab></v-tabs
        ></v-toolbar
      ><v-tabs-items v-model="tab"
        ><v-tab-item
          ><v-card><v-card-text>kill</v-card-text></v-card></v-tab-item
        ><v-tab-item
          ><v-card><v-card-text>me</v-card-text></v-card></v-tab-item
        ></v-tabs-items
      >
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
};
</script>