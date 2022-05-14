<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "@/components/Layouts/Footer.vue";

export default Vue.extend({
  name: "ZonePage",
  components: { Footer },
});
</script>
