<template>
  <v-app>
    <v-card>
      <v-tabs right v-model="tab"
        ><v-tab>Recent Submissions</v-tab
        ><v-tab>Current Rankings</v-tab></v-tabs
      ><v-tabs-items v-model="tab"
        ><v-tab-item
          ><v-card
            elevation="2"
            class="ma-2"
            v-for="record in this.recents(10)"
            :key="record.id"
            ><v-card-title
              ><span class="avoidwrap"
                >{{ record.mapName }}
                {{ (record.accuracy * 100).toFixed(2) }}%</span
              >
              <pre> - </pre>
              <span class="avoidwrap">
                {{ record.username
                }}<span v-if="record.team"> ({{ record.team }})</span></span
              ></v-card-title
            >
            <v-card-subtitle
              >{{ record.score }} points -
              {{
                new Date(Date.parse(record.time)).toLocaleString()
              }}</v-card-subtitle
            ></v-card
          ></v-tab-item
        ><v-tab-item
          ><v-card elevation="2" class="ma-2">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Rank</th>
                    <th class="text-left">Player</th>
                    <th class="text-left">School</th>
                    <th class="text-left">Plays</th>
                    <th class="text-left">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="n in 3" :key="n">
                    <td>0</td>
                    <td>{{ n }}</td>
                    <td>{{ n }}</td>
                    <td>{{ n }}</td>
                    <td>{{ n }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table></v-card
          ></v-tab-item
        ></v-tabs-items
      >
    </v-card>
  </v-app>
</template>

<style>
span.avoidwrap {
  display: inline-block;
}
</style>

<script>
export default {
  data() {
    return {
      tab: null,
      scores: [],
    };
  },
  methods: {
    nabNgo: async function () {
      let reponse = await fetch("https://cvrescores.herokuapp.com/api/scores");
      this.scores = await reponse.json();
    },
    recents: function (num) {
      let recs = [];
      for (let i = this.scores.length - 1; i >= this.scores.length - num; i--) {
        recs.push(this.scores[i]);
      }
      return recs;
    },
  },
  created() {
    this.nabNgo();
  },
};
</script>