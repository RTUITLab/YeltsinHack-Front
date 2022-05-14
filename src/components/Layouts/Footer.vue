<template>
<div>
  <v-footer
    color="primary"
    padless
  >
    <v-row
    justify="center"
    no-gutters
    >
    <v-col cols="4"
    v-for="link in links"
    :key="link">
      <v-btn
      :to="link.link"
      block
      exact-path
      color="white"
      class="text-capitalize"
      text
      height="34"
      >
        {{ link.text }}
      </v-btn>
    </v-col>
      
    </v-row>
  </v-footer>  
</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",

  components: {},
  methods: {
  },
  data() {
    return {
      links: [
        {
          text: "Статистика",
          link: { name: "statisticts" },
        },
        {
          text: "Редактирование объектов",
          link: { name: "editing-areas" },
        },
        {
          text: "Карта размещений",
          link: { name: "visit-map" },
        }
      ],
    }
  }
});
</script>
