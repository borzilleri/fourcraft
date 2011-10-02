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

$(function() {
  var seattle = {
    'northwest': [
  [47.719232,-122.452927],[47.7338, -122.325],
[47.7338, -122.325],[47.6207, -122.454]
  ]
  };

  init_map(seattle);

  $('#login-button').live('click', function() {

  });
});

