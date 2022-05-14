export default function saveArea(area: any) {
  return fetch(process.env.VUE_APP_API_HOST + "/areas", {
    method: "POST",
    body: JSON.stringify(area),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((e) => e.json());
}

export function getAreas(cameraUuid: string) {
  return fetch(
    process.env.VUE_APP_API_HOST + "/areas?camera_uuid=" + cameraUuid
  ).then((e) => e.json());
}

export function updateArea(areaId: string, area: number) {
  return fetch(process.env.VUE_APP_API_HOST + "/areas/" + areaId, {
    method: "PUT",
    body: JSON.stringify(area),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((e) => e.json());
}

export function getCamera(cameraUuid: string) {
  return fetch(
    process.env.VUE_APP_API_HOST + "/cameras?uuid=" + cameraUuid
  ).then((e) => e.json());
}
