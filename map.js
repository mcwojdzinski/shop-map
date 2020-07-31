let map;

// Initialize google map api for js
function initMap() {
  let infowindow = new google.maps.InfoWindow();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: {
      lat: 52.2126958,
      lng: 18.8807217
    }
  });

  function placeMarkerInterMarche(loc) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map,
      icon: "/markersImages/intermarche.png"
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent(`<div class="popup">
        <p class="popup-city">${loc.city}</p>
        <p class="popup-address">${loc.street}</p>
        <p class="popup-address">${loc.zip}</p>
      </div>`);
      infowindow.open(map, marker);
    });
  }

  function placeMarkerMakro(loc) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map,
      icon: "/markersImages/makro.png",
      zIndex: 999,
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent(`<div class="popup">
        <p class="popup-city">${loc.city}</p>
        <p class="popup-address">${loc.street}</p>
        <p class="popup-address">${loc.zip}</p>
      </div>`);
      infowindow.open(map, marker);
    });
  }

  // Minimize carrefour icon
  let iconCarrefour = {
    url: "/markersImages/carrefour.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  function placeMarkerSelgros(loc) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map,
      icon: "/markersImages/selgros.png",
      zIndex: 999,
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent(`<div class="popup">
        <p class="popup-city">${loc.city}</p>
        <p class="popup-address">${loc.street}</p>
        <p class="popup-address">${loc.zip}</p>
      </div>`);
      infowindow.open(map, marker);
    });
  }



  function placeMarkerCarrefour(loc) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map,
      icon: iconCarrefour,
      zIndex: 999,
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent(`<div class="popup">
        <p class="popup-city">${loc.city}</p>
        <p class="popup-address">${loc.street}</p>
        <p class="popup-address">${loc.zip}</p>
      </div>`);
      infowindow.open(map, marker);
    });
  }

  // ITERATE ALL LOCATIONS. Pass every location to placeMarker and generating objects from shopList folder

  fetch("/shopList/intermarche.json").then(response => response.json()).then(interMarche => 
    interMarche.forEach(placeMarkerInterMarche)
  )

  fetch("/shopList/makro.json").then(response => response.json()).then(makro => 
    makro.forEach(placeMarkerMakro)
  )

  fetch("/shopList/selgros.json").then(response => response.json()).then(selgros => 
    selgros.forEach(placeMarkerSelgros)
  )

  fetch("/shopList/carrefour.json").then(response => response.json()).then(carrefour => 
    carrefour.forEach(placeMarkerCarrefour)
  )
}

