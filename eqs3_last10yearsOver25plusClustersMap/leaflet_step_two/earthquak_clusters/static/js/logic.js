// Creating map object
var myMap = L.map("map", {
  center: [33.68, -117.82],
  zoom: 7
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.csv("static/js/Seismic_Data.csv").then(function(eqdata){
  console.log(eqdata)
  console.log(eqdata.Latitude)


  // Create a new marker cluster group
  var markers = L.markerClusterGroup();
  // Loop through data
  for (var i = 0; i < eqdata.length; i++) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([eqdata[i].Latitude, eqdata[i].Longitude])
      .bindPopup(eqdata[i].descriptor));
    // }
      // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  };

});
