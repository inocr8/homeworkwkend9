var CountryDetailView = function(element){
  this.element = element;
}

//create the Google Map
var createGoogleMap = function(latitude, longitude, mapInfo){
  var position = {lat: latitude, lng: longitude};
  var zoomNumber = 4;
  var mapTypeId = google.maps.MapTypeId.HYBRID;
  var contentString = "<h1>"+ mapInfo.name +"</h1>" + "<h2>Population of: "+ Number(mapInfo.pop).toLocaleString() +"<br>Capital City: "+ mapInfo.cap +"</h2>";
  var icon = "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Ball-Azure-icon.png";
  var map = new Map(position, zoomNumber, mapTypeId);
  // map.addMarker(position)
  map.addInfoWindow(position, contentString, icon);
  map.bindClick();
};

CountryDetailView.prototype = {
  display: function(country){
    console.log("element", this.element)
    var mapInfo = {
      name: country.name,
      pop: country.population,
      cap: country.capital
    }
    createGoogleMap(country.latlng[0], country.latlng[1], mapInfo);
    var tags = this.element.querySelectorAll('h1, p, h2')
    tags[0].innerText = country.name;
    tags[1].innerText = "This country has a population size of " + Number(country.population).toLocaleString() + " humans.";
    tags[2].innerText = "The capital city of " + country.name + " is " + country.capital + ".";
    tags[3].innerText = country.name + " is situated in the region of " + country.region + ", but more accurately in the sub-region of " + country.subregion + ".";
    tags[4].innerText = "Did you know? " + country.name + " has a native name and this is " + country.nativeName + "!";
  }
}
