const mapboxAccessToken ='pk.eyJ1IjoicnlteTIwMjAiLCJhIjoiY2tmc29ndnk0MGJlazJ5bTZlNDNwaW5hNiJ9.n8Rd5g1O2mvWG_LFdSLhTA';
const caseDataFile = "https://raw.githubusercontent.com/ryanpmeyer/Geog80Final/master/data/COVID_CASES.csv";
const deathDataFile = "https://raw.githubusercontent.com/ryanpmeyer/Geog80Final/master/data/COVID_DEATHS.csv";
const countiesGeoFile = "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json";
var caseData;
var deathData;

init();

async function init() {
    console.log("loading data");
    let caseDataPromise = dfd.read_csv(caseDataFile);
    let deathDataPromise = dfd.read_csv(deathDataFile);
    caseData = await caseDataPromise;
    deathData = await deathDataPromise;
    console.log(caseData);
    createMap()
}

function createMap() {
    var map = L.map('map-cases').setView([37.8, -96], 4);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);
    let geoJSON = JSON.parse(countiesGeoFile);
    L.geoJson(countiesGeoFile).addTo(map);
}
