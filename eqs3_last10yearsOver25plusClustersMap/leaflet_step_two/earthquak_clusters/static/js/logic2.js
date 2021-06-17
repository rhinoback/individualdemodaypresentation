// Creating map object
var myMap = L.map("map", {
  center: [33.68, -117.82],
  zoom: 7
});
// // Define a map object
// var myMap = L.map("map", {
//   center: [37.09, -95.71],
//   zoom: 5,
//   layers: [streetmap, states, cities]
// });
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
  console.log(eqdata.Magnitude)




  // Create a new marker cluster group
  var markers = L.markerClusterGroup();
  // Loop through data
  for (var i = 0; i < eqdata.length; i++) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([eqdata[i].Latitude, eqdata[i].Longitude])
      // .bindPopup("<h1>" + eqdata[i].Place + "</p>" + "<h2>"+ "Magnitude" + " : " + eqdata[i].Magnitude + " Waveform: " + eqdata[i].MagType + "</h2>" + "<p><h3>" + eqdata[i].Depth + " , "+ eqdata[i].Type + "</p></h3>"));
      .bindPopup("<h1>" + "Place: " + eqdata[i].Place + "</p></h1>" + "<h2>"+ "Magnitude: " + eqdata[i].Magnitude +  "</p></h2>" + "<h3>"+"MagType: " + eqdata[i].MagType + "/ Depth: " + eqdata[i].Depth + "Type: " + eqdata[i].Type + "</p></h3>"));
      // 
//PUT IN SOME CUSTOM MARKERS HERE

      // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  };

});



  // // Create a new marker cluster group
  // var markers = L.markerClusterGroup();
  // // Loop through data
  // for (var i = 0; i < eqdata.length; i++) {

  //     // Add a new marker to the cluster group and bind a pop-up
  //    // ,Latitude,Longitude,Depth,Magnitude,Waveform,Place,Time,Type
  //     markers.addLayer(L.marker([eqdata[i].Latitude, eqdata[i].Longitude])
  //     .bindPopup("<h1>" + eqdata[i].Place + "</p>" + "<h2>"+ "Magnitude" + " : " + eqdata[i].Magnitude + " Waveform: " + eqdata[i].Waveform + "</h2>" + "<p><h3>" + eqdata[i].Depth + " , "+ eqdata[i].Type + "</p></h3>"));
  //     // Add our marker cluster layer to the map
  //   myMap.addLayer(markers);


  // //ADDING layers


// // Function to determine marker size based on population
// function markerSize(Magnitude) {
//   return Magnitude * 10;
// }

// // An array containing all of the information needed to create city and state markers
// var locations = [
//   {
//    coordinates: ([eqdata[i].Latitude, eqdata[i].Longitude]).
//    state= {
//     name: "Depth of Earthquakes",
//     population: eqdata[i].Depth
//    },
//    city: {
//     name: "Magnitude of Earthquakes",
//     population: eqdata[i].Magnitude
//    }
//   }
// ];

// // Define arrays to hold created city and state markers
// var cityMarkers = [];
// var stateMarkers = [];

// // Loop through locations and create city and state markers
// for (var i = 0; i < locations.length; i++) {
//   // Setting the marker radius for the state by passing population into the markerSize function
//   stateMarkers.push(
//     L.circle(locations[i].coordinates, {
//       stroke: false,
//       fillOpacity: 0.75,
//       color: "orange",
//       fillColor: "yellow",
//       radius: markerSize(locations[i].state.population)
//     })
//   );

//   // Setting the marker radius for the city by passing population into the markerSize function
//   cityMarkers.push(
//     L.circle(locations[i].coordinates, {
//       stroke: false,
//       fillOpacity: 0.75,
//       color: "purple",
//       fillColor: "pink",
//       radius: markerSize(locations[i].city.population)
//     })
//   );
// }

// // Create base layers

// // Streetmap Layer
// var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// });

// var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "dark-v10",
//   accessToken: API_KEY
// });

// // Create two separate layer groups: one for cities and one for states
// var states = L.layerGroup(stateMarkers);
// var cities = L.layerGroup(cityMarkers);

// // Create a baseMaps object
// var baseMaps = {
//   "Street Map": streetmap,
//   "Dark Map": darkmap
// };

// // Create an overlay object
// var overlayMaps = {
//   "State Population": states,
//   "City Population": cities
// };

// // Define a map object
// var myMap = L.map("map", {
//   center: [37.09, -95.71],
//   zoom: 5,
//   layers: [streetmap, states, cities]
// });

// // Pass our map layers into our layer control
// // Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(myMap);




//   // Function to determine marker size based on population
// function markerSize(Magnitude) {
//   return Magnitude * 10;
// }

// // An array containing all of the information needed to create city and state markers
// var eqdata = []

// // Define arrays to hold created city and state markers
// var cityMarkers = [];
// var stateMarkers = [];

// // Loop through locations and create city and state markers
// for (var i = 0; i < eqdata.length; i++) {
//   // Setting the marker radius for the state by passing population into the markerSize function
//   stateMarkers.push(
//     L.circle(eqdata[i].latitude, {
//       stroke: false,
//       fillOpacity: 0.75,
//       color: "yellow",
//       fillColor: "orange",
//       radius: markerSize(eqdata[i].state.population)
//     })
//   );

//   // Setting the marker radius for the city by passing population into the markerSize function
//   cityMarkers.push(
//     L.circle(eqdata[i].longitude, {
//       stroke: false,
//       fillOpacity: 0.75,
//       color: "purple",
//       fillColor: "pink",
//       radius: markerSize(locations[i].city.population)
//     })
//   );
// }

// // Create base layers

// // Streetmap Layer
// var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// });

// var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "dark-v10",
//   accessToken: API_KEY
// });

// // Create two separate layer groups: one for cities and one for states
// var states = L.layerGroup(stateMarkers);
// var cities = L.layerGroup(cityMarkers);

// // Create a baseMaps object
// var baseMaps = {
//   "Street Map": streetmap,
//   "Dark Map": darkmap
// };

// // Create an overlay object
// var overlayMaps = {
//   "State Population": states,
//   "City Population": cities
// };

// // Define a map object
// var myMap = L.map("map", {
//   center: [37.09, -95.71],
//   zoom: 5,
//   layers: [streetmap, states, cities]
// });

// // Pass our map layers into our layer control
// // Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(myMap);


// });








//   // Once we get a response, send the data.features object to the createFeatures function
//   createFeatures(data.features);
// });

// function createFeatures(earthquakeData) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   // function onEachFeature(feature, layer) {
//   //   layer.bindPopup("<h3>" + feature.properties.place +
//   //     "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//   // }
  
//   function onEachFeature(feature, layer) {
//     layer.bindPopup("<h1>" + feature.properties.place + "<h2>" + feature.properties.mag  + ", " + feature.properties.magType +
//       "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//   }

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   var earthquakes = L.geoJSON(earthquakeData, {
//     onEachFeature: onEachFeature
//   });

//   // Sending our earthquakes layer to the createMap function
//   createMap(earthquakes);
// }