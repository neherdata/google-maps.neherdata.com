var NDS = new google.maps.LatLng(40.3083382, -74.0697479);
var ndsMarker = new google.maps.Marker({
  position: NDS,
  title: "Neher Data Systems",
});

// To add the marker to the map, call setMap();
ndsMarker.setMap(map);
