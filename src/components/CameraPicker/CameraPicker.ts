import { Component, Vue } from "vue-property-decorator";

@Component
export default class CameraPicker extends Vue {
  points: any = [];

  addPoint(x: number, y: number) {
    this.points.push(`${x},${y}`);
  }

  onClick(e: MouseEvent) {
    console.log(this.$el.clientWidth)
    this.addPoint(e.x, e.y);
  }
}
