function initMap() {

	var alcatraz_combo_tours = {
		info: '<strong>Alcatraz Combo Tours & Souvenirs</strong><br>\
					Pier 41<br> San Francisco, CA 94133<br>\
					<a href="https://goo.gl/maps/rPdgJaAXaBU2">Get Directions</a>',
		lat: 37.809394,
		long: -122.411806
	};

	var gocar_fishermans = {
		info: '<strong>Gocar Tours</strong><br>\
					431 Beach Street<br> San Francisco, CA 94133<br>\
					<a href="https://goo.gl/maps/JSCR6DR1GPt">Get Directions</a>',
		lat: 37.807072,
		long: -122.416147
	};

	var gocar_union_square = {
		info: '<strong>Gocar Tours</strong><br>\r\
					321 Mason Street<br> San Francisco, CA 94102<br>\
					<a href="https://goo.gl/maps/WpfcgLV11bG2">Get Directions</a>',
		lat: 37.786314,
		long: -122.409857
	};
  var segway_fishermans = {
		info: '<strong>Electric Tour Company | Segway Tour</strong><br>\r\
					 757 Beach Street <br> San Francisco CA, 94109<br>\
					<a href="https://goo.gl/maps/NV3BFWFsNBK2">Get Directions</a>',
		lat: 37.806443,
		long: -122.421217
	};
  var segway_golden_gate = {
    info: '<strong>Electric Tour Company | Segway Tour</strong><br>\r\
          82 Hagiwara Tea Garden Drive <br> San Francisco, CA 94118 <br>\
          <a href="https://goo.gl/maps/EzoHnqtEgm62">Get Directions</a>',
    lat: 37.769938,
    long: -122.469381
  };
  var segway_vip = {
    info: '<strong>Electric Tour Company | Segway VIP Tour</strong><br>\r\
          417 Beach Street<br> San Francisco CA, 94133<br>\
          <a href="https://goo.gl/maps/RUDg6v7s2tQ2">Get Directions</a>',
    lat: 37.807104,
    long: -122.415959
  };

	var locations = [
      [
			 alcatraz_combo_tours.info,
			 alcatraz_combo_tours.lat,
			 alcatraz_combo_tours.long, 0
		  ],
      [
				gocar_fishermans.info,
				gocar_fishermans.lat,
				gocar_fishermans.long, 1
			],
      [
				gocar_union_square.info,
				gocar_union_square.lat,
				gocar_union_square.long, 2
			],
			[
				segway_fishermans.info,
				segway_fishermans.lat,
				segway_fishermans.long, 3
			],
			[
				segway_golden_gate.info,
				segway_golden_gate.lat,
				segway_golden_gate.long, 4
			],
			[
				segway_vip.info,
				segway_vip.lat,
				segway_vip.long, 5
			],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(37.777537, -122.430109),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
