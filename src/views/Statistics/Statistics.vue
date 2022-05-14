<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <div style="color: rgba(0, 0, 0, 0.6)">
            СТАТИСТИКА
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-0">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-carousel v-model="carousel" >
                <v-carousel-item
                v-for="(elem, i) in carouselLength"
                :key="i"
                >
                <v-sheet
                    height="100%"
                    tile
                >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                        <v-col cols="6" 
                        align="center"
                        justify="center"
                        v-for="(elem, el) in carouselItems"
                        :key="el">
                            {{elem}} + {{i}}
                        </v-col>
                    </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
          </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Statistics",

  components: {},
  methods: {
  },
  data() {
    return {
      carousel: 0,
      items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
    }
  },
  computed: {
      carouselLength(){
        return Math.ceil(this.items.length/4)
      },
      carouselItems(){
        let num = this.carousel
        return this.items.slice(num*4, num*4+4)
        // 0 - 4
        //4 - 8
        //8 - 12
      },
  }
});
</script>
