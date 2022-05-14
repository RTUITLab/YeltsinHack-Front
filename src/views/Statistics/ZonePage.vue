<template>
  <v-container>
    <v-row>
      <div>
        <v-breadcrumbs :items="breadcrumb_items" class="px-3"></v-breadcrumbs>
      </div>
    </v-row>
    <v-row>
      <div
        style="
          margin: 0 auto;
          max-width: 1200px;
          margin-top: 50px;
          width: 100%;
          display: grid;
          row-gap: 70px;
          margin-bottom: 70px;
        "
      >
        <div>
          <h3>Просмотры</h3>
          <div id="chart"></div>
        </div>
        <div>
          <h3>Посетители по стендам</h3>
          <div style="max-width: 500px; margin: 0 auto" id="chart2"></div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ApexCharts from "apexcharts";
import heatmap from "vue-heatmapjs";
Vue.use(heatmap, { heatmapPreload: [{ x: 10, y: 10, value: 100 }] });

export default Vue.extend({
  name: "ZonePage",
  components: {},
  data() {
    return {
      breadcrumb_items: [],
    };
  },
  created() {
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
    ] as any;
  },
  mounted() {
    var options = {
      chart: {
        height: 280,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 23, 2],
        },
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
        ],
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();

    let options2 = {
      chart: {
        type: "donut",
      },
      series: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

    chart2.render();
  },
});
</script>

<style scoped></style>
