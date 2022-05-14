<template>
  <div :class="$style.parent">
    <div :class="$style.videoContainer">
      <div :class="$style.svgParent" @click="onClick">
        <svg>
          <polyline
            v-for="(obj, index) of areas"
            @click="onAreaClick"
            :index="index"
            :fill="validatedArea[index] ? 'rgba(0,255,0,0.3)' : 'transparent'"
            :points="obj.join(' ')"
            :stroke="validatedArea[index] ? 'rgb(0,255,0)' : 'rgb(255,0,0)'"
            stroke-width="2"
          />
          <circle
            @click.right="onCircleClick"
            v-for="(point, index) of allPoints"
            :index="index"
            :cx="point.split(',')[0]"
            :cy="point.split(',')[1]"
            fill="rgb(0,255,0)"
            r="4"
            stroke="rgb(0,0,0)"
            stroke-width="1"
          />
        </svg>
      </div>
      <img
        ref="svgParent"
        :class="$style.videoContent"
        src="http://158.58.130.148/mjpg/video.mjpg"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./CameraPicker.ts"></script>
<style lang="scss" module src="./CameraPicker.scss"></style>
