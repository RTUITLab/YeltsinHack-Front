<template>
  <div :class="$style.parent">
    <button @click="onSave">Save</button>
    <div :class="$style.videoContainer">
      <div :class="$style.svgParent" @click="onClick">
        <svg>
          <polyline
            v-for="(obj, index) of areas"
            v-bind:key="Math.random() * 999"
            :fill="validatedArea[index] ? 'rgba(0,220,0,0.3)' : 'transparent'"
            :index="index"
            :points="obj.join(' ')"
            :stroke="validatedArea[index] ? 'rgb(0,220,0)' : 'rgb(255,0,0)'"
            stroke-width="2"
            @click="onAreaClick"
          />
          <text
            v-for="(obj, index) of areas"
            v-if="areas[index].length > 0"
            :x="getCoords(index).dX"
            :y="getCoords(index).dY"
            fill="rgb(0,255,0)"
          >
            {{ areasNames[index] }}
          </text>
          <circle
            v-for="(point, index) of allPoints"
            v-bind:key="Math.random() * 999"
            :cx="point.split(',')[0]"
            :cy="point.split(',')[1]"
            :index="index"
            fill="rgb(0,255,0)"
            r="4"
            stroke="rgb(0,0,0)"
            stroke-width="1"
            @click.right="onCircleClick"
          />
        </svg>
      </div>
      <img ref="svgParent" :class="$style.videoContent" :src="img" />
    </div>
    <div :class="$style.listParent">
      <div :class="$style.list">
        <h2>Список</h2>
        <table>
          <tbody>
            <tr v-for="(obj, index) of areasNames" align="center">
              <td>
                {{ index + 1 }}
              </td>
              <td>
                <v-text-field
                  v-model="areasNames[index]"
                  :value="obj"
                  hide-details="auto"
                ></v-text-field>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./CameraPicker.ts"></script>
<style lang="scss" module src="./CameraPicker.scss"></style>
