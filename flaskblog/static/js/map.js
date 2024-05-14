mapboxgl.accessToken = 'pk.eyJ1IjoicHVuZXJ2YS1zaW5naCIsImEiOiJja3ZyMGJpMnY3bHd0MnFtc2JhNmYycTQxIn0.bffhOFWVm6eao7NnixlIVQ';

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })

  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }

  function errorLocation() {
    setupMap([77.10, 28.70])
  }

  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 13
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }));
  }
