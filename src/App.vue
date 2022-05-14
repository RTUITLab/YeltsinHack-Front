<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/Layouts/Footer.vue";
import Header from "./components/Layouts/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
});
</script>
