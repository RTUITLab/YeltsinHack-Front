<template>
  <div :class="$style.parent">
    <div :class="$style.videoContainer">
      <div :class="$style.svgParent" @click="onClick">
        <svg>
          <polyline
            v-for="(obj, index) of areas"
            v-bind:key="Math.random()*999"
            :fill="validatedArea[index] ? 'rgba(0,255,0,0.3)' : 'transparent'"
            :index="index"
            :points="obj.join(' ')"
            :stroke="validatedArea[index] ? 'rgb(0,255,0)' : 'rgb(255,0,0)'"
            stroke-width="2"
            @click="onAreaClick"
          />
          <circle
            v-for="(point, index) of allPoints"
            v-bind:key="Math.random()*999"
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
  </div>
</template>

<script lang="ts" src="./CameraPicker.ts"></script>
<style lang="scss" module src="./CameraPicker.scss"></style>
