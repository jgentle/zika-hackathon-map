(function() {
    console.log('Zika Hackathon @ TACC on September 9, 2016');

    //******************
    //*  Leaflet
    //*****************

    // Create map globals.
    var map;
    var ajaxRequest;
    var plotlist;
    var plotlayers=[];

    // Create maptile attribution objects.
    var openStreetMapAttribution = '© <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors<br/>';

    // Create maptile layer objects.
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 16, attribution: osmAttrib});
    
    // Create default config objects.
    var defaultLat = 30;
    var defaultLong = -97; 
    var defaultZoom = 6;
    var defaultLocation = new L.LatLng(defaultLat, defaultLong);

    // Create the Leaflet map and set the default view and zoom.
    map = new L.Map('zikamap');
    map.setView(defaultLocation,defaultZoom);
    map.addLayer(osm);

    //******************
    //*  D3
    //*****************

    // we will be appending the SVG to the Leaflet map pane g (group) element will be inside the svg
    var svg = d3.select(map.getPanes().overlayPane).append("svg");

    // Include the leaflet-zoom-hide to prevent phantom original SVG on zoom.
    var g = svg.append("g").attr("class", "leaflet-zoom-hide");

    // Define data source.
    // var dataSource = '../data/geojson/points.geojson';

}).call(this);