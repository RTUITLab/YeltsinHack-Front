<template>
  <div :class="$style.parent">
    <div :class="$style.videoContainer">
      <div :class="$style.svgParent" @click="onClick">
        <svg>
          <polyline
            :points="points.join(' ')"
            :fill="validatedArea ? 'rgba(0,255,0,0.3)' : 'transparent'"
            stroke-width="2"
            :stroke="validatedArea ? 'rgb(0,255,0)' : 'rgb(255,0,0)'"
          />
          <circle
            v-for="point of points"
            :cx="point.split(',')[0]"
            :cy="point.split(',')[1]"
            r="4"
            fill="rgb(0,255,0)"
            stroke-width="1"
            stroke="rgb(0,0,0)"
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
