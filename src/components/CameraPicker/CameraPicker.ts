import { Component, Vue } from "vue-property-decorator";

/**
 *    Attention!
 *    Код плохой, сделан "лишь бы побыстрее"
 */

@Component
export default class CameraPicker extends Vue {
  points: any = [];
  validatedArea = false;

  addPoint(x: number, y: number) {
    this.points.push(`${x},${y}`);
  }

  onClick(e: MouseEvent) {
    const svgParentCoordinates = (<HTMLDivElement>(
      this.$refs.svgParent
    )).getBoundingClientRect();

    const point = {
      x: e.x - svgParentCoordinates.x,
      y: e.y - svgParentCoordinates.y,
    };

    const findPoint = this.points.find((e: any) => {
      const obj = e.split(",");
      return (
        Math.sqrt(
          Math.pow(obj[0] - point.x, 2) + Math.pow(obj[1] - point.y, 2)
        ) < 4
      );
    });

    if (findPoint) {
      this.addPoint(findPoint.split(",")[0], findPoint.split(",")[1]);
      this.validatedArea = true;
    } else {
      this.addPoint(point.x, point.y);
      this.validatedArea = false;
    }
  }
}
