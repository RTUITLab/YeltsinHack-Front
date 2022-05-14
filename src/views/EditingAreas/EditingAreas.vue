<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="pt-5">
          <div style="color: rgba(0, 0, 0, 1)">Редактирование областей</div>
          <CameraPicker></CameraPicker>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CameraPicker from "@/components/CameraPicker/CameraPicker.vue";

export default Vue.extend({
  name: "EditingAreas",

  components: { CameraPicker },
  methods: {},
  data() {
    return {};
  },
});
</script>
