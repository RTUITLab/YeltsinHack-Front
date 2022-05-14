<template>
  <div>
    <v-app-bar
      style="background: linear-gradient(to right, #0027b2, #be00c7)"
      dark
      height="48px"
      flat
    >
      <v-toolbar-title style="user-select: none" class="mr-4"
        ><router-link
          to="/"
          style="color: white; text-decoration: none; font-weight: bold"
          ><img
            src="/img/icons/museum.svg"
            alt=""
            height="30"
            style="margin-top: 9px; margin-left: 15px" /></router-link
      ></v-toolbar-title>

      <v-divider
        style="color: rgba(255, 255, 255, 0.25)"
        inset
        vertical
      ></v-divider>

      <v-spacer></v-spacer>

      <div class="text-subtitle-3 font-weight-regular">Admin Dashboard</div>

      <v-spacer></v-spacer>

      <v-divider
        style="color: rgba(255, 255, 255, 0.25)"
        inset
        vertical
      ></v-divider>
      <v-btn
        elevation="0"
        class="text-capitalize font-weight-regular ml-4"
        style="background: transparent; display: flex; align-items: center"
      >
        Admin Name
        <img
          src="/img/icons/hueta.png"
          alt=""
          width="28"
          style="margin: 0px 10px; background-color: "
        />
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",

  components: {},
  methods: {},
  data() {
    return {
      selectedItem: 1,
      items: ["Статистика", "Области"],
      fav: true,
      menu: false,
      message: false,
      hints: true,
    };
  },
});
</script>
