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
import getCameras from "@/services/getCameras";
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
  methods: {
    getTime(time: string) {
      let date = new Date(time);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return Math.ceil(date.getTime() / 1000);
    },
  },
  async mounted() {
    let cam = await getCameras(<any>this.$route.params.cameraId);
    let categories = [];
    let series = [];
    let lastDate = undefined;
    let lastCount = 0;
    let countObj=0
    let sum:any = []
    let objects:any={}
    for( let i of cam[0].areas){
      let obj=i.stats
      for(let j in obj){
        obj[j].pName=i.name
      }
      sum=sum.concat(obj)
    }
    sum = sum.sort((i:any,j:any) => {
      if(i.time<j.time)return 1
      else return -1
    })
    for (let i of sum) {
      let date = this.getTime(i.time);
      let date2 =
        new Date(date * 1000).toLocaleDateString("ru") +
        ", " +
        new Date(date * 1000).toLocaleTimeString("ru");
      if (categories.indexOf(date2) === -1) categories.push(date2);
      if (lastDate === date2) {
        if(Object.keys(objects).indexOf(i.pName)!==-1){
          objects[i.pName]={count:objects[i.pName].count+i.count,sum:objects[i.pName].sum+1}
        }else{
          objects[i.pName]={count:i.count,sum:1}

        }
        lastCount+=i.count
        countObj++
      }
      else {
        lastCount=Math.ceil(lastCount/countObj)
        series.push(lastCount);
        lastCount = 0;
        countObj=0
        lastDate = date2;
      }
    }

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
          data: series,
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
        categories: categories,
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();

    let ser=[]
    console.log(objects)
    for(let k of Object.keys(objects)){
      ser.push(Math.ceil(objects[k].count/objects[k].sum))
    }

    let options2 = {
      chart: {
        type: "donut",
      },
      series: ser,
      labels: Object.keys(objects),
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

    chart2.render();
  },
});
</script>

<style scoped></style>
