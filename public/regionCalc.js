var urlForRegions = "https://restcountries.eu/rest/v1/region/";
var requestForRegions = new XMLHttpRequest();

var createPieChart = function(chartCountry, chartInfo){
  var region = chartInfo.region;
  var name = chartInfo.name;
  var countryPop = chartInfo.pop;
  var title = "<h1>Population of "+name+" in relation to "+region+"</h1>"
  var calcPop = 0; 
  requestForRegions.open("GET", (urlForRegions+region));
  requestForRegions.onload = function(){
    if(requestForRegions.status === 200){
      var jsonStringRegions = requestForRegions.responseText;
      var listOfRegions = JSON.parse(jsonStringRegions);  
      for (var r = 0; r < listOfRegions.length; r++) {
        calcPop += (listOfRegions[r].population);
      };
      regionTotalPop = calcPop;
    };
    var pie = new PieChart((regionTotalPop - countryPop), chartCountry, title);
  };
  requestForRegions.send(null);
};