mapboxgl.accessToken = 'KEY_HERE';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

// successLocation(position)
// This will be called when we successfully get the user's location
function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

// errorLocation()
// This is called when we fail to get the user's location so we set the map to a default location
function errorLocation() {
    setupMap([-2.24, 53.48]) // default location - Manchester
}

// setupMap(center)
// This function will set up the map and add the navigation control panel in the top left
function setupMap(center) {
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    // const nav = new mapboxgl.Map({attributionControl: false})
    // .addControl(new mapboxgl.AttributionControl({
    //     customAttribution: 'Map design by me'
    // }));

    let directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}

