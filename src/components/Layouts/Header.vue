<template>
  <div>
    <v-app-bar
    color="#1976D2"
    dark
    flat
    >
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      flat
    >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-card
        flat
        class="mx-auto"
        max-width="300"
        tile>
            <v-list elevation="0">
            <v-list-item-group
            v-model="selectedItem"
            color="primary"
            >
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                >
                <v-list-item-content>
                    <v-list-item-title v-text="item" ></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
      </v-menu>

      <v-toolbar-title>Ельцин центр</v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        Account Name
      </div>

      <v-btn icon>
        <v-icon size="36">mdi-account-circle-outline</v-icon>
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
