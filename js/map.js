console.log('map.js loaded.');

//******************
//*  Leaflet
//*****************

// GeoJson data sources.
var countyData = '../data/TX_counties/tx_counties.geojson';
var zikaIndexData = '../data/Zika_Index_Hack.geojson';

// Layer data.
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.');
var denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.');
var aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.');
var golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denver, aurora, golden]);

// Create map globals.
var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

// Create default config objects.
var defaultLat = 31.2;
var defaultLong = -99; 
var defaultZoom = 6;
var defaultLocation = new L.LatLng(defaultLat, defaultLong);

// Create the Leaflet map, set the default view and zoom, and add the basemap.
var map = L.map('zikamap', {
    center: defaultLocation,
    zoom: defaultZoom,
    layers: [Thunderforest_Pioneer]
});

// Add data layers.
var countyLayer = new L.GeoJSON.AJAX(countyData);
console.log(countyLayer);     
countyLayer.addTo(map);

var zikaIndexLayer = new L.GeoJSON.AJAX(zikaIndexData);
console.log(zikaIndexLayer);   
zikaIndexLayer.addTo(map);

// Layer controls.
var baseMaps = {
    "OpenStreetMap_Mapnik": OpenStreetMap_Mapnik,
    "OpenStreetMap_BlackAndWhite": OpenStreetMap_BlackAndWhite,
    "Thunderforest_OpenCycleMap": Thunderforest_OpenCycleMap,
    "Thunderforest_Transport": Thunderforest_Transport,
    "Thunderforest_TransportDark": Thunderforest_TransportDark,
    "Thunderforest_SpinalMap": Thunderforest_SpinalMap,
    "Thunderforest_Landscape": Thunderforest_Landscape,
    "Thunderforest_Pioneer": Thunderforest_Pioneer,
    "OpenMapSurfer_Roads": OpenMapSurfer_Roads,
    "OpenMapSurfer_Grayscale": OpenMapSurfer_Grayscale,
    "Stamen_TonerLite": Stamen_TonerLite,
    "Stamen_Watercolor": Stamen_Watercolor,
    "Esri_WorldStreetMap": Esri_WorldStreetMap,
    "Esri_WorldTopoMap": Esri_WorldTopoMap,
    "Esri_WorldImagery": Esri_WorldImagery,
    "Esri_OceanBasemap": Esri_OceanBasemap,
    "Esri_NatGeoWorldMap": Esri_NatGeoWorldMap
};

var overlayMaps = {
    "Cities": cities
};

// Add controls to map.
L.control.layers(baseMaps, overlayMaps).addTo(map);
