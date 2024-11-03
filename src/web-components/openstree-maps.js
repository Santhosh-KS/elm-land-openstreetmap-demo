import leaflet from "leaflet";

class OpenStreetMapComponents extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log("SANT: connectedCallback");
    this.render();
  }

  render() {
    var map = leaflet.Map;
    const myMarker = leaflet.Marker;
    console.log("Log:", map);
    map = leaflet.map("map").setView([-33.8767, 151.2399], 13);
    var marker = leaflet
      .marker([-33.8767, 151.2399], {
        draggable: true,
        riseOnHover: true,
        title: "SOME TITLE",
      })
      .addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am at Double Bay!.").openPopup();

    var circle = leaflet
      .circle([-33.8767, 151.2398], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.4,
        radius: 1000,
      })
      .addTo(map);
    circle.bindPopup("I am a circle.");

    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(map);
    /* var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(map); */

    let iconOptions = {
      iconUrl: "el.png",
      iconSize: [30, 40],
    };

    let customIcon = leaflet.icon(iconOptions);
    let iconMarkerOptions = {
      icon: customIcon,
      draggable: true,
      title: "OpenStreeMaps on Elm-land!",
    };

    let iconMarker = leaflet
      .marker([-33.8767, 151.2399], iconMarkerOptions)
      .addTo(map);
    iconMarker.bindPopup("<b>I'm Custom Icon!!</b>.").openPopup();
  }
}

window.customElements.define("maps-demo", OpenStreetMapComponents);
