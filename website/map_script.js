const mapboxAccessToken ='pk.eyJ1IjoicnlteTIwMjAiLCJhIjoiY2tmc29ndnk0MGJlazJ5bTZlNDNwaW5hNiJ9.n8Rd5g1O2mvWG_LFdSLhTA';
const caseDataFile = "COVID_CASES.json";
const deathDataFile = "COVID_DEATHS.json";
const countiesGeoFile = "geojson-counties-fips.json";
var caseData = new dfd.DataFrame(caseDataJSON);
var deathData = new dfd.DataFrame(deathDataJSON);
var countiesGeo= new dfd.DataFrame(countiesGeoJSON);
var map = L.map('map-cases').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.geoJson(countiesGeo).addTo(map);