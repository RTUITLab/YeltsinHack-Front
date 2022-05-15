<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="pt-5">
          <div style="color: rgba(0, 0, 0, 1)">Карта посещений</div>
        </v-col>
      </v-row>
      <v-row
        style="
          align-items: flex-start;
          margin: 0 auto;
          width: fit-content;
          margin-top: 50px;
        "
      >
        <img src="/img/1.svg" alt="" style="height: 450px" />
        <img src="/img/2.svg" alt="" style="height: 450px" />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VisitMap",

  components: {},
  methods: {},
  data() {
    return {};
  },
});
</script>
