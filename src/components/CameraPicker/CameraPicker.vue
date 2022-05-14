<template>
  <div :class="$style.parent">
    <div :class="$style.videoContainer">
      <div :class="$style.svgParent">
        <svg>
          <polyline points="0,0 50,0 150,100 250,100 300,150" fill="transparent" stroke-width="2" stroke="rgb(0,255,0)"/>          <circle cx="102" cy="102" r="5" fill="rgb(0,255,0)" stroke-width="1" stroke="rgb(0,0,0)"/>
        </svg>
      </div>
      <img
        :class="$style.videoContent"
        src="http://158.58.130.148/mjpg/video.mjpg"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./CameraPicker.ts"></script>

<style lang="scss" module src="./CameraPicker.scss"></style>
