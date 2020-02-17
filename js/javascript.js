//Sticky nav
var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var logoTriangle = document.getElementById("triangle");

// Get the modal
var modal = document.getElementById("myModal");
// Modal marker
var markerIcon = document.getElementById("modalMarkerIcon");

var sticky = navbar.offsetTop;
window.onscroll = function(e) {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    header.classList.add("onScrollHeaderMargin");
    modal.style.paddingTop = "80px";
    markerIcon.style.top = "0px";
    logo.classList.add("logoSticky");
    logoTriangle.classList.add("triangleSticky");
  } else {
    navbar.classList.remove("sticky");
    header.classList.remove("onScrollHeaderMargin");
    modal.style.paddingTop = "108px";
    markerIcon.style.top = "28px";
    logo.classList.remove("logoSticky");
    logoTriangle.classList.remove("triangleSticky");
  }
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close")[0];
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 44.81925383828084, lng: 20.443805158138275 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#cacaca"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "water",
        stylers: [
          {
            color: "#f2a4a2"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#cacaca"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      }
    ]
  });

  var contentString =
    '<div id="content" class="mapInfoWindow">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h2 class="firstHeading mapInfoWindow__heading">Restoran Nacionala Klasa</h2>' +
    '<p class="mapInfoWindow__text">Ušće Beograd RS, 11000</p>' +
    '<button draggable="false" type="button" aria-label="Close" title="Close" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: absolute; cursor: pointer; user-select: none; top: 10px; right: 10px; width: 30px; height: 30px;"><img src="./img/exit.svg" alt=""></button>' +
    '<div id="bodyContent">' +
    '<img src="./img/restoran-nacionalna-klasa-slider.png" class="mapInfoWindow__img">' +
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "./img/restoran-nacionalna-klasa-marker.svg"
  });
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
}
