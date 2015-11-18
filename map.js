var MapView = {
  init: function() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(41.850033, -87.6500523),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true, //disables default controls so you can add your own back on
    };

    var that = this;

    this.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    //Loads custom zoom controls
    var zoomDiv = document.createElement('div');
    var renderZoomControls = new ZoomControl(zoomDiv, this.map);
    zoomDiv.index = 1;
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomDiv);

  }
}
