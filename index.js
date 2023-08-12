let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 40.3083382, lng: -74.0697479 },
    zoom: 12,
    mapTypeId: "terrain",
  });
}

initMap();
