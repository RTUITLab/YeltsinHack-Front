<template>
  <div class="home">
    <CameraPicker/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CameraPicker from "@/components/CameraPicker/CameraPicker";

@Component({
  components: {
    HelloWorld,
    CameraPicker,
  },
})
export default class HomeView extends Vue {}
</script>
