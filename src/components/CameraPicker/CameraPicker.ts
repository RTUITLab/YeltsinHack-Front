import { Component, Vue } from "vue-property-decorator";
import saveArea, {
  getAreas,
  getCamera,
  updateArea,
} from "@/services/pointsManager";

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
  ids: any = [];
  img = "http://localhost:6969/oneshotimage1";
  cameraUuid = this.$route.params.cameraId;

  public mounted() {
    const imgContainer = <HTMLImageElement>this.$refs.svgParent;
    let inited = false;
    imgContainer.onload = () => {
      const koeff = imgContainer.naturalWidth / imgContainer.width;

      if (!inited) {
        inited = true;
        this.validatedArea = [];
        this.areas = [];
        this.ids = [];
        this.currentArea = -1;
        this.allPoints = [];
        getCamera(this.cameraUuid).then(
          ((e: any) => {
            console.log(e);
            for (const i of e[0].areas) {
              this.ids.push(i.uuid);
              this.areas.push(
                i.points.map((y: any) => {
                  return `${y.x / koeff},${y.y / koeff}`;
                })
              );
              this.validatedArea.push(true);
              this.areasNames.push(i.name);
            }
            this.areas.push([]);
            this.currentArea = this.areas.length;
            this.allPoints = [];
            console.log(this.areas);
          }).bind(this)
        );
      }

      setTimeout(() => {
        imgContainer.src =
          "http://localhost:6969/oneshotimage1?" +
          Math.ceil(Math.random() * 999999999);
      }, 1000);
    };
  }

  constructor() {
    super();

    document.oncontextmenu = () => {
      return false;
    };
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

    const obj = {
      maxX,
      maxY,
      minX,
      minY,
      dX: (maxX - minX) / 2 + minX,
      dY: (maxY - minY) / 2 + minY,
    };
    return obj;
  }

  addPoint(x: number, y: number) {
    this.areas[this.currentArea].push(`${x},${y}`);
    this.allPoints.push(`${x},${y}`);
  }

  onClick(e: MouseEvent) {
    if (this.currentArea === -1) this.currentArea = this.areas.length - 1;
    if (!this.areas[this.currentArea]) {
      this.currentArea = this.areas.length - 1;
    }

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
      this.areasNames.push("Hello world");
      this.ids.push(undefined);
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

  onSave() {
    const imgContainer = <HTMLImageElement>this.$refs.svgParent;
    const koeff = imgContainer.naturalWidth / imgContainer.width;
    const koeff2 = imgContainer.naturalWidth / imgContainer.width;
    console.log(koeff, koeff2);

    for (const i in this.areas) {
      console.log(i);
      const obj: any = {
        name: this.areasNames[i],
        camera_uuid: this.cameraUuid,
        uuid: this.ids[i],
        points: this.areas[i].map((e: any) => {
          const object = e.split(",");
          return { x: object[0] * koeff, y: object[1] * koeff };
        }),
      };

      if (obj.uuid) {
        updateArea(obj.uuid, obj);
      } else {
        console.log(this.areas, this.areasNames);
        saveArea(obj);
      }
    }
  }
}
