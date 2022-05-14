<template>
  <div>
    <v-container>
        <v-row>
          <div>
            <v-breadcrumbs
            :items="breadcrumb_items"
            class="px-3"
            ></v-breadcrumbs>
          </div>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-row>
              Статистика
            </v-row>
            <v-row>
              Карта
            </v-row>
          </v-col>
          <v-col cols="6">
            СТЕНДЫ
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ZonePage",
  components: {
  },
  data(){
    return {
      breadcrumb_items: []
    }
  },
  created(){
    this.breadcrumb_items = [
      {
        text: "Статистика",
        disabled: false,
        exact: true,
        to: { name: "statisticts" },
      },
      {
        text: "Zone-1",
        disabled: true,
        to: "",
      },
    ] as any
  }
});
</script>
