export default function getCameras(id: string) {
  if (id) {
    return fetch(process.env.VUE_APP_API_HOST + "/cameras?uuid=" + id).then(
      (e) => e.json()
    );
  } else {
    return fetch(process.env.VUE_APP_API_HOST + "/cameras").then((e) =>
      e.json()
    );
  }
}
