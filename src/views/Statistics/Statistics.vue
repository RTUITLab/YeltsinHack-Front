<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="pt-5">
          <div style="color: rgba(0, 0, 0, 1)">
            Статистика
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-carousel v-model="carousel" show-arrows-on-hover >
            <v-carousel-item
            v-for="(elem, i) in carouselLength"
            :key="i">
              <!-- <v-sheet
              height="100%"
              tile> -->
                <v-row
                align="center"
                class="fill-height">
                  <v-col 
                  cols="4"
                  class="py-0"
                  align="center"
                  justify="center"
                  v-for="(elem, el) in carouselItems"
                  :key="el"
                  >
                    <!-- <div
                  class="d-flex"> -->
                      <!-- <v-avatar
                      tile
                      size="240"
                      > -->
                        <v-img
                        src="../../assets/camera.png"
                        ></v-img>
                      <!-- </v-avatar> -->
                    <!-- </div>                     -->
                  </v-col>
                </v-row>
              <!-- </v-sheet> -->
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
      items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'],
    }
  },
  computed: {
      carouselLength(){
        const length = Math.ceil(this.items.length/6)
        return length
      },
      carouselItems(){
        const num = this.carousel
        const items = this.items as string[]
        const arr = items.slice(num*6, num*6+6)
        return arr
      },
  }
});
</script>
