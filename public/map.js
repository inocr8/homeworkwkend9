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
    var contentString = ["The people here love watching Friends, either with or without top Friendster Mr Rick.", "These folks are really good at clog dancing, so good they frighten the ducks.", "The people who live here all wear blue leggings and watch Flashdance.", "Sexy?  No not really.  Sad face :-(", "They used to be cool.", "The people of this far flung land (entirely dependent on things) just love to boogie.  They boogie woogie woogie all night long.", "Sweet Jesus, every second person gotta catch 'em all...but that's mainly diseases.", "If you ever look at them and say hi, they will knife you.  Then it's sexy time.", "Once you know about the things they do to each other with butter. It's possible you might move here.", "Every single person here is called Steve."];
    var fastStats = "<h1>Fun facts on this location</h1>"+"<h2>"+ contentString[Math.floor(contentString.length * Math.random())] +"</h2>";
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addInfoWindow({lat: event.latLng.lat(), lng: event.latLng.lng()}, fastStats, "https://openclipart.org/image/64px/svg_to_png/177823/color-icons-red-help.png");
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