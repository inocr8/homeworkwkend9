var CountryDetailView = function(element){
  this.element = element;
}

//create the Google Map
var createGoogleMap = function(latitude, longitude, mapInfo){
  var position = {lat: latitude, lng: longitude};
  var zoomNumber = 0;
  if(mapInfo.area < 999999){
    zoomNumber = 7;
  }
  else if(mapInfo.area >= 1000000 && mapInfo.area < 4999999){
    zoomNumber = 5;
  }
  else if(mapInfo.area >= 5000000 && mapInfo.area < 9999999){
    zoomNumber = 4;
  }
  else{
    zoomNumber = 3;
  }
  var mapTypeId = google.maps.MapTypeId.HYBRID;
  var contentString = "<h1>"+ mapInfo.name +"</h1>" + "<h2>Population of: "+ Number(mapInfo.pop).toLocaleString() +"<br>Capital City: "+ mapInfo.cap +"</h2>";
  var icon = "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Push-Pin-1-Left-Azure-icon.png";
  var map = new Map(position, zoomNumber, mapTypeId);
  map.addInfoWindow(position, contentString, icon);
  map.bindClick();
};

CountryDetailView.prototype = {
  display: function(country){
    console.log("element", this.element)
    var chartCountry = country;
    var mapInfo = {
      name: country.name,
      pop: country.population,
      cap: country.capital,
      area: country.area
    };
    var chartInfo = {
      name: country.name,
      pop: country.population,
      region: country.region,
      subregion: country.subregion,
      currency: country.currencies[0]
    };
    createGoogleMap(country.latlng[0], country.latlng[1], mapInfo);
    createPieChartRegion(chartCountry, chartInfo);
    createPieChartCurrency(chartCountry, chartInfo);
    var tags = this.element.querySelectorAll('h1, p, h2')
    tags[0].innerText = country.name;
    tags[1].innerText = "This country has a population size of " + Number(country.population).toLocaleString() + " humans.";
    tags[2].innerText = "The capital city of " + country.name + " is " + country.capital + ".";
    tags[3].innerText = country.name + " is situated in the region of " + country.region + ", but more accurately in the sub-region of " + country.subregion + ".";
    tags[4].innerText = country.name + " is part of the " + country.currencies[0] + " family of nations.";
    tags[5].innerText = "Did you know? " + country.name + " has a native name and this is " + country.nativeName + "!";
  }
};
