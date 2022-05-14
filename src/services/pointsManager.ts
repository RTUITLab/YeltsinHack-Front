export default function saveArea(area: any) {
  fetch(process.env.VUE_APP_API_HOST + "/areas", {
    method: "POST",
    body: JSON.stringify(area),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
