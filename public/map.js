var Map = function(latLng, zoomNumber, mapTypeId){
  this.googleMap = new google.maps.Map(document.getElementById('map'),{
    center: latLng,
    zoom: zoomNumber,
    mapTypeId: mapTypeId
  }),
  this.addMarker = function(latLng, contentString, icon){
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      // draggable: true,
      contentString: contentString,
      icon: icon
    });
    return marker;
  },
  this.bindClick = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addInfoWindow({lat: event.latLng.lat(), lng: event.latLng.lng()}, "pooooo attack!", "https://cdn0.iconfinder.com/data/icons/poop-emoji-cartoons/263/poop-poo-pooh-emoji-cartoon-face-042-128.png");
    }.bind(this));
  },
  this.setCenter = function(latLng){
    this.googleMap.setCenter(latLng);
  },
  this.addInfoWindow = function(latLng, contentString, icon){
    var marker = this.addMarker(latLng, contentString, icon);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: this.contentString
      });
      infoWindow.open(this.map, marker);
    });
  }
}