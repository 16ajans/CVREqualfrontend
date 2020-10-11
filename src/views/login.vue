<template>
  <v-app
    ><v-card class="pa-2" min-width="300" v-show="!registering"
      ><v-card-title class="pb-0">Login</v-card-title
      ><v-form
        ><v-container
          ><v-text-field
            :rules="[rules.required]"
            label="Username"
          ></v-text-field
          ><v-text-field
            :append-icon="showPaswd ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="showPaswd ? 'text' : 'password'"
            label="Password"
            @click:append="showPaswd = !showPaswd"
          ></v-text-field
          ><v-btn class="mt-4" color="primary" @click="login()">Submit</v-btn></v-container
        ></v-form
      ></v-card
    ><v-card class="pa-2" min-width="300" max-width="420" v-show="registering"
      ><v-card-title class="pb-0">Register</v-card-title
      ><v-form
        ><v-container
          ><v-text-field
            :rules="[rules.required]"
            label="Username"
          ></v-text-field
          ><v-text-field
            :append-icon="RegshowPaswd ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="RegshowPaswd ? 'text' : 'password'"
            label="Password"
            @click:append="RegshowPaswd = !RegshowPaswd"
          ></v-text-field
          ><v-text-field
            :append-icon="RegConfshowPaswd ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="RegConfshowPaswd ? 'text' : 'password'"
            label="Confirm Password"
            @click:append="RegConfshowPaswd = !RegConfshowPaswd"
          ></v-text-field
          ><v-text-field :rules="[rules.required]" label="Email"></v-text-field
          ><v-text-field :rules="[rules.required]" label="Name"></v-text-field
          ><v-select
            :items="schools"
            :rules="[rules.required]"
            label="School"
          ></v-select>
          <v-btn class="mt-4" color="primary">Submit</v-btn></v-container
        ></v-form
      ></v-card
    ><a class="ml-auto"
      small
      @click="
        registering = !registering;
        showPaswd = false;
        RegshowPaswd = false;
        RegConfshowPaswd = false;
      "
    >
      {{ registering ? "Login" : "Register" }}</a
    ></v-app
  >
</template>

<script>
export default {
  data() {
    return {
      registering: false,
      showPaswd: false,
      RegshowPaswd: false,
      RegConfshowPaswd: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      schools: ["This", "is", "a", "placeholder"],
    };
  },
  methods: {
    login: function () {
      this.$router.push('/dash')
    }
  },
};
</script>