import { Component, Vue } from "vue-property-decorator";

/**
 *    Attention!
 *    Код плохой, сделан "лишь бы побыстрее"
 */

@Component
export default class CameraPicker extends Vue {
  areas: any = [[]];
  allPoints: any = [];
  validatedArea = [false];
  currentArea = 0;
  img = "http://localhost:6969/oneshotimage1?1";

  constructor() {
    super();

    document.oncontextmenu = () => {
      return false;
    };

    setInterval(() => {
      const img = <HTMLImageElement>this.$refs.svgParent;
      img.src =
        "http://localhost:6969/oneshotimage1?" + Math.random() * 999999999;
    }, 800);
  }

  addPoint(x: number, y: number) {
    this.areas[this.currentArea].push(`${x},${y}`);
    this.allPoints.push(`${x},${y}`);
  }

  onClick(e: MouseEvent) {
    const svgParentCoordinates = (<HTMLDivElement>(
      this.$refs.svgParent
    )).getBoundingClientRect();

    const point = {
      x: e.x - svgParentCoordinates.x,
      y: e.y - svgParentCoordinates.y,
    };

    const findPoint = this.areas[this.currentArea].find((e: any) => {
      const obj = e.split(",");
      return (
        Math.sqrt(
          Math.pow(obj[0] - point.x, 2) + Math.pow(obj[1] - point.y, 2)
        ) < 6
      );
    });

    if (findPoint) {
      this.addPoint(findPoint.split(",")[0], findPoint.split(",")[1]);
      this.areas.push([]);
      this.validatedArea.push(false);
      this.validatedArea[this.currentArea] = true;
      this.currentArea = this.areas.length - 1;
      this.allPoints = [];
    } else {
      this.addPoint(point.x, point.y);
      this.validatedArea[this.currentArea] = false;
    }
  }

  onCircleClick(e: any) {
    const index: any = e.target.getAttribute("index");
    this.areas[this.currentArea].splice(index, 1);
    this.allPoints = this.areas[this.currentArea];
  }

  onAreaClick(e: any) {
    const index: any = e.target.getAttribute("index");
    e.preventDefault();
    e.stopPropagation();
    this.allPoints = this.areas[index];
    this.currentArea = index;
  }
}
