function initialize() {
	var mapCenter = new google.maps.LatLng(41.790113, -87.600732);
	var map = new google.maps.Map(document.getElementById("map-canvas"), {
		center: mapCenter,
		zoom: 18
	});
	var drawingManager = new google.maps.drawing.DrawingManager({
		drawingMode: google.maps.drawing.OverlayType.POLYGON,
		drawingControl: false,
		polylineOptions: {
			editable: true,
			strokeColor: '#ffffff'
		}
	});
	drawingManager.setMap(map);

	var overlay = new google.maps.OverlayView();
	overlay.draw = function() {};
	overlay.setMap(map);

	google.maps.event.addDomListener(window, 'click', function(event) {
		var proj = overlay.getProjection();
		console.log(proj.fromContainerPixelToLatLng(new google.maps.Point(event.clientX, event.clientY)));
	});
}

google.maps.event.addDomListener(window, 'load', initialize);