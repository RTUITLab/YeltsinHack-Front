<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="pt-5">
          <div style="color: rgba(0, 0, 0, 1)">Карта посещений</div>
        </v-col>
      </v-row>
      <div
        style="
          display: flex;
          max-width: 900px;
          margin: 0 auto;
          justify-content: center;
          justify-content: space-between;
        "
      >
        <img
          src="/img/menu.svg"
          alt=""
          style="width: 200px; margin-top: -250px"
        />

        <div
          style="
            align-items: flex-start;
            flex-direction: column;
            width: fit-content;
            margin-top: 50px;
          "
        >
          <div><img src="/img/1.svg" alt="" style="width: 500px" /></div>
          <div><img src="/img/2.svg" alt="" style="width: 500px" /></div>
        </div>
      </div>
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
