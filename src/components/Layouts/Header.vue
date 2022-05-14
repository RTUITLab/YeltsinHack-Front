<template>
  <div>
    <v-app-bar
    color="#1976D2"
    dark
    height="48px"
    flat
    >
      <v-toolbar-title class="mr-4">Ельцин центр</v-toolbar-title>
      <v-divider
      style="color: rgba(255, 255, 255, 0.25)"
      inset
      vertical
      ></v-divider>

      <v-spacer></v-spacer>

      <div class="text-subtitle-2 font-weight-regular">
        Admin Dashboard
      </div>

      <v-spacer></v-spacer>

      <v-divider
      style="color: rgba(255, 255, 255, 0.25)"
      inset
      vertical
      ></v-divider>
      <v-btn
      elevation="0"
      class="text-capitalize font-weight-regular ml-4"
      color="primary">
        Admin Name
        <v-icon class="ml-3" size="36">mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",

  components: {},
  methods: {
  },
  data() {
    return {
      selectedItem: 1,
      items: ["Статистика", "Области"],
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }
  }
});
</script>
