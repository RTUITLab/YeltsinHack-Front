<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <div style="color: rgba(0, 0, 0, 1)">
            Статистика
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col class="py-0">
          <v-carousel v-model="carousel" show-arrows-on-hover hide-delimiters >
            <v-carousel-item
            v-for="(elem, i) in carouselLength"
            :key="i">
              <v-sheet
              height="100%"
              tile>
                <v-row
                align="center"
                dense
                class="my-6">
                  <v-col 
                  cols="4"
                  class="py-1"
                  align="center"
                  justify="center"
                  v-for="(elem, el) in carouselItems"
                  :key="el"
                  >
                    <v-sheet
                    @click="goToCamera('123')"
                    tile>
                      <v-img
                      src="../../assets/camera.png">
                        <div class="white--text text-h5" style="position: absolute; bottom: 5px; background-color: rgba(196, 196, 196, 0.8); width: 100%">
                          Camera {{el}}
                        </div>
                      </v-img>
                    </v-sheet>
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
    goToCamera(id: string){
      const cameraId = id
      this.$router.push({ name: "zone-page", params: { cameraId: cameraId } });
    }
  },
  data() {
    return {
      carousel: 0,
      items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'],
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
  },
});
</script>
