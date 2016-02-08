var urlForCurrency = "https://restcountries.eu/rest/v1/currency/";
var requestForCurrency = new XMLHttpRequest();

var createPieChartCurrency = function(chartCountry, chartInfo){
  var currency = chartInfo.currency;
  var name = chartInfo.name;
  var countryPop = chartInfo.pop;
  var title = "<h1>Population of "+name+" in relation to "+currency+"</h1>"
  var calcPop = 0; 
  requestForCurrency.open("GET", (urlForCurrency+currency));
  requestForCurrency.onload = function(){
    if(requestForCurrency.status === 200){
      var jsonStringCurrency = requestForCurrency.responseText;
      var listOfCurrencies = JSON.parse(jsonStringCurrency);  
      for (var c = 0; c < listOfCurrencies.length; c++) {
        calcPop += (listOfCurrencies[c].population);
      };
      currencyTotalPop = calcPop;
      console.log(currency);
    };
    var pie = new pieChartCurrency((currencyTotalPop - countryPop), chartCountry, title);
  };
  requestForCurrency.send(null);
};