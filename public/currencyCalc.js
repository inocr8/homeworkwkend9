var urlForCurrency = "https://restcountries.eu/rest/v1/currency/";
var requestForCurrency = new XMLHttpRequest();

var createPieChartCurrency = function(chartCountry, chartInfo){
  var currency = chartInfo.currency;
  var name = chartInfo.name;
  var countryPop = chartInfo.pop;
  var title = "<h1>Population of "+name+" in relation to "+currency+"</h1>"
  var calcPop = 0;
  var currencyCountry = [];
  requestForCurrency.open("GET", (urlForCurrency+currency));
  requestForCurrency.onload = function(){
    if(requestForCurrency.status === 200){
      var jsonStringCurrency = requestForCurrency.responseText;
      var listOfCurrencies = JSON.parse(jsonStringCurrency);  
      for (var c = 0; c < listOfCurrencies.length; c++) {
        calcPop += (listOfCurrencies[c].population);
      };
      currencyCountry = currencyCountry.push(calcPop);
      currencyTotalPop = calcPop;
      // listOfCurrencies = listOfCurrencies.population;
      for(cc in currencyCountry){
        var cc = 0;
        console.log(cc);
      }
      console.log(currency);
    };
    // var pieCurrencyCountry = new pieChartCurrency((currencyTotalPop - countryPop), chartCountry, title);
    // var pieCurrencyWorld = new pieChartCurrency(cu)
  };
  requestForCurrency.send(null);
};