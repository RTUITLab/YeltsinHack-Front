import { Component, Vue } from "vue-property-decorator";
import saveArea from "@/services/pointsManager";

/**
 *    Attention!
 *    Код плохой, сделан "лишь бы побыстрее"
 */

@Component
export default class CameraPicker extends Vue {
  areas: any = [[]];
  areasNames: any = [];
  allPoints: any = [];
  validatedArea = [false];
  currentArea = 0;
  img = "http://158.58.130.148/mjpg/video.mjpg";

  constructor() {
    super();

    document.oncontextmenu = () => {
      return false;
    };

    const img = <HTMLImageElement>this.$refs.svgParent;

    // img.onload=()=>{
    //   setInterval(() => {
    //     img.src =
    //       "http://localhost:6969/oneshotimage1?" + Math.random() * 999999999;
    //   }, 800);
    // }
  }

  getCoords(index: number) {
    let maxX = 0;
    let minX = 9999999;
    let maxY = 0;
    let minY = 9999999;
    this.areas[index].forEach((e: any) => {
      const obj = e.split(",");

      if (Number.parseInt(obj[0]) > maxX) maxX = Number.parseInt(obj[0]);
      if (Number.parseInt(obj[0]) < minX) minX = Number.parseInt(obj[0]);
      if (Number.parseInt(obj[1]) > maxY) maxY = Number.parseInt(obj[1]);
      if (Number.parseInt(obj[1]) < minY) minY = Number.parseInt(obj[1]);
    });

    const svgParentCoordinates = (<HTMLDivElement>(
      this.$refs.svgParent
    )).getBoundingClientRect();
    //

    let obj = {
      maxX,
      maxY,
      minX,
      minY,
      dX: (maxX - minX) / 2 + minX,
      dY: (maxY - minY) / 2 + minY
    };
    return obj;
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
      y: e.y - svgParentCoordinates.y
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
      this.areasNames.push("Hello world");
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

  onSave(index: number) {
    let obj: any = {
      name: this.areasNames[index],
      points: this.areas[index].map((e: any) => {
        const object = e.split(",");
        return { x: object[0], y: object[1] };
      }),
    };
    saveArea(obj);
  }
}
