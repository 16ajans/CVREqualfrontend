<template>
  <v-app>
    <v-card>
      <v-tabs right v-model="tab"
        ><v-tab>Recent Submissions</v-tab
        ><v-tab>Current Rankings</v-tab></v-tabs
      ><v-tabs-items v-model="tab"
        ><v-tab-item
          ><v-card elevation="2" class="ma-2" v-for="n in 10" :key="n"
            ><v-card-title>SongName %%.%% - Player Name (School)</v-card-title>
            <v-card-text>000,000 points - date time</v-card-text></v-card
          ></v-tab-item
        ><v-tab-item
          ><v-card elevation="2" class="ma-2"
            ><v-card-title>D1</v-card-title
            ><v-list-item class="ma-2" v-for="n in 16" :key="n"
              ><v-card-text>{{ n }}</v-card-text></v-list-item
            ></v-card
          ><v-card elevation="3" class="ma-2"
            ><v-card-title>D2</v-card-title
            ><v-list-item class="ma-2" v-for="n in 16" :key="n"
              ><v-card-text>{{ n }}</v-card-text></v-list-item
            ></v-card
          ></v-tab-item
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