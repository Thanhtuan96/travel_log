mapboxgl.accessToken = `${mapToken}`;

const coordinates = currentCamp.geometry.coordinates;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: coordinates || [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
