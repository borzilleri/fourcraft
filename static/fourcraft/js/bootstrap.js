function init_map(regions) {
  var latlng = new google.maps.LatLng(47.644111,-122.293625);
  var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),
      myOptions);

  var nwseattle = new google.maps.Polygon({
    paths: [
    new google.maps.LatLng(regions.northwest[0][0],regions.northwest[0][1]),
      new google.maps.LatLng(regions.northwest[1][0],regions.northwest[1][1]),
      new google.maps.LatLng(regions.northwest[2][0],regions.northwest[2][1]),
      new google.maps.LatLng(regions.northwest[3][0],regions.northwest[3][1])
    ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.75,
      strokeWeight: 1,
      fillColor: "#FF0000",
      fillOpacity: 0.35
  });
  nwseattle.setMap(map);
}

function login(e) {
  // FIXME: Need a better way to specify url prefix?
  // Maybe not, if we know this will eventually live at the root
  // of its own domain.
  window.location('/fourcraft/login');
}

$(function() {
  // FIXME: This is temporary data, needs to be removed eventually.
  var seattle = {
    'northwest': [
  [47.719232,-122.452927],[47.7338, -122.325],
[47.7338, -122.325],[47.6207, -122.454]
  ]
  };
  init_map(seattle);

  // TODO: Eventually replace this with an ajax call to get
  // user state.
  var userLoggedIn = false;
  if( userLoggedIn ) {
    // Display user info?
  }
  else {
    $('#login-button').live('click', login);
  }
});

