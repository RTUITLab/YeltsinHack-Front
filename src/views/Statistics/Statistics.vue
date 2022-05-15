<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <div style="color: rgba(0, 0, 0, 1)">Статистика</div>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col class="py-0" style="max-width: 1200px; margin: 0 auto">
          <v-carousel v-model="carousel" show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="(elem, i) in carouselLength" :key="i">
              <v-sheet height="100%" tile>
                <v-row align="center" dense class="my-6">
                  <v-col
                    cols="4"
                    class="py-1"
                    align="center"
                    justify="center"
                    v-for="(camera, el) in carouselItems"
                    :key="el"
                  >
                    <v-sheet @click="goToCamera(camera.uuid)" tile>
                      <v-img src="../../assets/camera.png">
                        <div
                          class="white--text text-h5"
                          style="
                            position: absolute;
                            bottom: 5px;
                            background-color: rgba(196, 196, 196, 0.8);
                            width: 100%;
                          "
                        >
                          {{ camera.name }}
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
      <v-row style="margin: 70px auto; display: block">
        <div style="color: rgba(0, 0, 0, 1)">Все стенды</div>
        <br />
        <div>
          <div>
            <v-data-table
              :headers="headers"
              :items="allAreas[0]"
              item-key="name"
              class="elevation-1"
            >
              <template #item.link="{ item }">
                <a :href="`/${item.link}`"> Перейти </a>
              </template>
            </v-data-table>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Statistics",
  components: {},
  methods: {
    goToCamera(id: string) {
      const cameraId = id;
      this.$router.push({ name: "zone-page", params: { cameraId: cameraId } });
    },
  },
  created() {
    // this.$store.dispatch("getAreas").then(() => {
    //   this.allAreas = this.GET_AREAS
    // });
    let i = 0;
    this.$store.dispatch("getCameras").then(() => {
      this.allCameras = this.GET_CAMERAS;
      this.allAreas = this.GET_CAMERAS.map((camera: any) => {
        return camera.areas.map((item: any) => {
          i++;

          return {
            ...item,
            ...{ cam: camera.name, num: i, link: camera.uuid },
          };
        });
      });

      console.log(this.allAreas);
      // this.showAreas = true
    });
  },
  data() {
    return {
      allAreas: [],
      allCameras: [],
      headers: [
        {
          text: "№",
          align: "start",
          sortable: false,
          value: "num",
        },
        {
          text: "Название",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Камера",
          align: "start",
          sortable: false,
          value: "cam",
        },
        {
          text: "Ссылка",
          align: "start",
          sortable: false,
          value: "link",
        },
      ],
      areas: [
        {
          number: 0,
          name: "Something name",
          cam: "Камера 5",
          link: "dfdsf",
        },
        {
          number: 0,
          name: "Something name",
          cam: "Камера 5",
          link: "dfdsf",
        },
        {
          number: 0,
          name: "Something name",
          cam: "Камера 5",
          link: "dfdsf",
        },
        {
          number: 0,
          name: "Something name",
          cam: "Камера 5",
          link: "dfdsf",
        },
        {
          number: 0,
          name: "Something name",
          cam: "Камера 5",
          link: "dfdsf",
        },
        {
          number: 0,
          name: "Something name",
          cam: "Камера 5",
          link: "dfdsf",
        },
      ],
      carousel: 0,
      items: [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9",
      ],
    };
  },
  computed: {
    ...mapGetters(["GET_AREAS", "GET_CAMERAS"]),
    carouselLength() {
      const length = Math.ceil(this.allCameras.length / 6);
      return length;
    },
    carouselItems() {
      const num = this.carousel;
      const items = this.allCameras as string[];
      const arr = items.slice(num * 6, num * 6 + 6);
      return arr;
    },
  },
  mounted() {},
});
</script>
